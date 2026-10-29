import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { createServer } from 'vite';

// Asset and render smoke checks, not a replacement for browser/viewport checks.
const vite = await createServer({ server: { middlewareMode: true, hmr: false }, appType: 'custom' });
try {
  const { iiamPhotos } = await vite.ssrLoadModule('/src/data/iiamPhotos.js');
  const photos = Object.values(iiamPhotos);
  assert.equal(new Set(photos.map((photo) => photo.path)).size, photos.length, 'Duplicate local photo path');
  for (const photo of photos) {
    assert.ok(photo.path.startsWith('images/iiam/') && !photo.path.includes('..'));
    assert.equal(new URL(photo.source).hostname, 'www.iiamedu.com');
    assert.equal(new URL(photo.original).hostname, 'www.iiamedu.com');
    assert.ok(photo.width > 0 && photo.height > 0 && photo.alt && photo.caption);
    const bytes = await readFile(`public/${photo.path}`);
    assert.equal(bytes.readUInt16BE(0), 0xffd8, `${photo.path}: JPEG header`);
    assert.equal(bytes.readUInt16BE(bytes.length - 2), 0xffd9, `${photo.path}: JPEG end marker`);
  }

  const render = (Component) => renderToStaticMarkup(createElement(MemoryRouter, null, createElement(Component)));
  const verifyMarkup = async (html, expectedImages) => {
    const sources = [...html.matchAll(/src="(\/global-study-abroad\/images\/iiam\/[^\"]+)"/g)].map((match) => match[1]);
    assert.equal(sources.length, expectedImages);
    for (const source of sources) await access(`public/${source.replace('/global-study-abroad/', '')}`);
    assert.equal((html.match(/Source: IIAM College/g) || []).length, expectedImages, 'Every photo has a source credit');
  };

  for (const [path, count] of [
    ['/src/pages/AboutPage.jsx', 4],
    ['/src/pages/services/CounsellingPage.jsx', 2],
    ['/src/pages/services/TestPreparationPage.jsx', 1],
  ]) {
    const { default: Page } = await vite.ssrLoadModule(path);
    const html = render(Page);
    await verifyMarkup(html, count);
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1);
    if (path.includes('AboutPage')) {
      assert.ok(html.includes('id="iiam-student-life"'));
      assert.ok(html.includes('href="#iiam-student-life"'));
    }
    console.log(`PASS ${path}: render, photo paths and credits`);
  }

  // About's aviation tab is client state: render its photo section independently.
  const { IIAMPracticalPhotos } = await vite.ssrLoadModule('/src/components/about/IIAMImageSections.jsx');
  await verifyMarkup(render(IIAMPracticalPhotos), 3);
  const aboutSource = await readFile('src/pages/AboutPage.jsx', 'utf8');
  assert.ok(aboutSource.includes('<IIAMPracticalPhotos />'));
  assert.ok(aboutSource.includes("activeTab === 'aviation'"));
  console.log(`PASS aviation/hospitality section and ${photos.length} distinct local JPEG assets`);
} finally {
  await vite.close();
}
