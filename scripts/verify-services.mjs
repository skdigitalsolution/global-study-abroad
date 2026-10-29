import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { createServer } from 'vite';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';

// SSR catches runtime errors and checks that routes, metadata and assets agree.
const vite = await createServer({ server: { middlewareMode: true, hmr: false }, appType: 'custom' });
try {
  const { services } = await vite.ssrLoadModule('/src/data/services.js');
  const { counselling } = await vite.ssrLoadModule('/src/data/counselling.js');
  const { testPreparation, exams } = await vite.ssrLoadModule('/src/data/testPreparation.js');
  const { universities, destinations, selectionFAQ, filterUniversities, emptyFilters } = await vite.ssrLoadModule('/src/data/universities.js');
  const { navigationData } = await vite.ssrLoadModule('/src/data/navigationData.js');
  const app = await readFile('src/App.jsx', 'utf8');
  const nav = navigationData.find((item) => item.name === 'Services');
  assert.equal(services.length, 9);
  assert.equal(new Set(services.map((service) => service.slug)).size, 9);
  assert.equal(nav.children.length, 9);
  const names = ['CounsellingPage', 'TestPreparationPage', 'CountryUniversitySelectionPage', 'ApplicationsAdmissionPage', 'ScholarshipsPage', 'InternshipPage', 'EducationLoanPage', 'VisaProcessingPage', 'AlliedServicesPage'];
  for (const [index, service] of services.entries()) {
    const route = `/services/${service.slug}`;
    assert.ok(app.includes(`path="${route}"`), `Missing route ${route}`);
    assert.ok(nav.children.some((child) => child.path === route), `Missing navigation ${route}`);
    await access(`public/${service.image}`);
    const { default: Page } = await vite.ssrLoadModule(`/src/pages/services/${names[index]}.jsx`);
    const html = renderToStaticMarkup(createElement(MemoryRouter, { initialEntries: [route] }, createElement(Page)));
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1, `${route}: one primary heading`);
    for (const id of ['process', 'enquiry', 'faq-heading']) assert.ok(html.includes(`id="${id}"`));
    const pageContent = service.slug === 'counselling' ? counselling
      : service.slug === 'test-preparation' ? testPreparation
      : service.slug === 'country-university-selection' ? selectionFAQ : service;
    const additionalDetails = service.slug === 'country-university-selection' ? universities.length + 1 : 0;
    assert.equal((html.match(/<details /g) || []).length, pageContent.faqs.length + additionalDetails);
    assert.ok(html.includes('has not been') || html.includes('does not book'), 'Truthful form disclosure');
    if (!['test-preparation', 'country-university-selection'].includes(service.slug)) {
      assert.ok(html.includes('type="email"') && html.includes('required=""'));
    }
    if (service.slug === 'counselling') {
      for (const photo of Object.values(counselling.photos)) {
        const photoPath = photo.path || `images/services/${photo.file}`;
        await access(`public/${photoPath}`);
        assert.ok(html.includes(`/global-study-abroad/${photoPath}`));
      }
      assert.ok(html.includes('id="profile-assessment"'));
      assert.equal((html.match(/type="checkbox"/g) || []).length, 5);
      const sectionIds = ['counselling-title', 'process', 'benefits-title', 'profile-assessment', 'faq-heading', 'enquiry'];
      const positions = sectionIds.map((id) => html.indexOf(`id="${id}"`));
      assert.ok(positions.every((position,index) => position >= 0 && (index === 0 || position > positions[index - 1])), 'Counselling section order');
    } else if (service.slug === 'test-preparation') {
      await access(`public/${testPreparation.photo.file}`);
      assert.ok(html.includes(`/global-study-abroad/${testPreparation.photo.file}`));
      assert.equal(exams.length, 6);
      assert.equal(exams.filter((exam) => exam.category === 'english').length, 3);
      assert.equal(exams.filter((exam) => exam.category === 'admission').length, 3);
      for (const exam of exams) {
        assert.ok(html.includes(`id="exam-${exam.id}"`));
        assert.ok(html.includes(`aria-controls="exam-detail-${exam.id}"`));
        assert.ok(html.includes(`href="${exam.officialUrl}"`));
      }
      const ids = ['test-preparation-title', 'exam-discovery', 'process', 'faq-heading', 'enquiry'];
      const positions = ids.map((id) => html.indexOf(`id="${id}"`));
      assert.ok(positions.every((position, index) => position >= 0 && (index === 0 || position > positions[index - 1])), 'Test preparation section order');
      assert.ok(html.includes('href="/services/counselling#enquiry"'), 'Consultation points to Phase 1');
      assert.ok(!html.includes('<form'), 'No fake booking or registration form');
    } else if (service.slug === 'country-university-selection') {
      for (const destination of destinations) {
        await access(`public/${destination.image}`);
        assert.ok(html.includes(`/global-study-abroad/${destination.image}`));
      }
      assert.ok(html.includes('role="search"'));
      assert.ok(html.includes('id="university-results"'));
      assert.ok(html.includes('Fictional demo'));
      assert.ok(html.includes('href="/services/counselling#enquiry"'));
      assert.equal(new Set(universities.map((item) => item.id)).size, universities.length);
      const apply = (changes) => filterUniversities(universities, { ...emptyFilters, ...changes });
      assert.equal(apply({}).length, 8);
      assert.equal(apply({ query: '  NORTHBRIDGE  ' })[0].id, 'demo-1');
      assert.equal(apply({ query: 'computer science' }).length, 3);
      assert.equal(apply({ country: 'Canada' }).length, 2);
      assert.equal(apply({ subject: 'Engineering' }).length, 4);
      assert.equal(apply({ studyLevel: 'Diploma' }).length, 3);
      assert.deepEqual(apply({ country: 'Canada', subject: 'Computer Science', studyLevel: 'Masters' }).map((item) => item.id), ['demo-3']);
      assert.equal(apply({ country: 'Canada', subject: 'Design' }).length, 0);
      assert.equal(apply({ query: 'no-such-university' }).length, 0);
      assert.equal(apply({ query: '   ' }).length, 8);
      const before = JSON.stringify(universities);
      apply({ query: 'Business' });
      assert.equal(JSON.stringify(universities), before, 'Filtering does not mutate demo data');
      const { default: Directory } = await vite.ssrLoadModule('/src/components/discovery/UniversityDirectory.jsx');
      const emptyHtml = renderToStaticMarkup(createElement(MemoryRouter, {}, createElement(Directory, {
        results: [], filters: { ...emptyFilters, query: 'no-match' }, onChange() {}, onClear() {},
      })));
      assert.ok(emptyHtml.includes('No demo matches yet.'));
      assert.ok(emptyHtml.includes('Reset your search'));
      console.log('PASS discovery search, case/whitespace, combined filters, reset baseline and empty-state rendering');
    } else {
      assert.ok(html.includes(`/global-study-abroad/${service.image}`));
    }
    assert.ok(!html.includes('images.unsplash.com'), 'Local illustrations only');
    console.log(`PASS ${route}`);
  }
  console.log('All nine service pages render with matching routes, navigation, form disclosures and local images.');
} finally {
  await vite.close();
}
