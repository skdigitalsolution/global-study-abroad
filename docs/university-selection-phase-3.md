# Phase 3: Country & University Selection

Only the existing Country & University Selection route was redesigned. No Phase 4 or other service pages were added. Navbar, Footer, Phase 1, Phase 2, dependencies and Tailwind/Vite configuration are unchanged. The existing `/universities` page is also preserved.

## Reference findings

Inspected public text on 28 October 2026: https://www.studies-overseas.com/universities

Accessible hierarchy: introduction and expert CTA, country selection, input/results area, help/contact CTA, university-related FAQs, newsletter and grouped footer links. Individual result-card fields, result photography, detailed filtering interactions and responsive viewport layout were not exposed to the text browser. No exact visual behaviour is asserted. GlobalPath uses an original atlas-style hero, destination photography, local demo directory, filter sidebar and editorial shortlist section.

## Demo content and photography

All eight institution names, subject groupings, study levels and descriptions in the new directory are fictional examples. They are not real admissions listings. No rankings, fees, official partnerships, available courses or admissions guarantees are claimed. Each card and the directory introduction explicitly label the data. Destination photographs show real places, not these fictional institutions or campuses.

Four local photos were downloaded from Pexels for website use, not copied from the reference:

- UK / Tower Bridge: https://www.pexels.com/photo/tower-bridge-london-1721593/ (Kyle Lui; credited in hero).
- Canada / Toronto skyline: https://www.pexels.com/photo/the-toronto-skyline-14626447/
- Australia / Sydney Opera House: https://www.pexels.com/photo/sydney-opera-house-21363471/
- Ireland / Dublin bridge: https://www.pexels.com/photo/beautiful-ha-penny-bridge-in-dublin-city-5459745/
- License: https://www.pexels.com/license/

Sources are available in the expanded demo profiles. Local files live under `public/images/discovery/`; URLs use Vite's base path.

## Important files: Hinglish explanation

- `src/data/universities.js`: `universities` ek array hai. Har object mein unique id, fictional name, country, city, subjects, studyLevels, local image path aur shortDescription hai. Dropdown options data se generate hote hain, isliye filters mein invalid subject names hard-code nahi karne padte.
- `src/pages/services/CountryUniversitySelection.jsx`: dedicated page aur shared state. `filters` object mein `query`, `country`, `subject`, `studyLevel` rehte hain. `changeFilter()` functional setter se sirf changed field update karta hai aur baaki fields preserve karta hai. `results` har render par current state se calculate hote hain; separate results state nahi rakhni padti.
- `src/pages/services/CountryUniversitySelectionPage.jsx`: existing App import ke liye small compatibility re-export. Existing `/services/country-university-selection` route unchanged hai.
- `src/components/discovery/UniversityFilters.jsx`: controlled native selects. `value` React state se aur `onChange` parent callback se linked hain. `useId()` desktop/mobile filter copies ke unique label IDs banata hai.
- `src/components/discovery/UniversityDirectory.jsx`: responsive result cards, empty state, live result count aur native expandable profiles. Desktop sidebar aur mobile native `<details>` panel same filter component/state use karte hain.
- `scripts/verify-services.mjs`: Phase 3 behaviour assertions plus Phase 1/2 regression rendering.

### filter() aur includes() kaise kaam karte hain

```js
const query = filters.query.trim().toLowerCase();
const searchableText = [university.name, ...university.subjects]
  .join(' ').toLowerCase();
```

`trim()` extra outer spaces remove karta hai aur `toLowerCase()` search ko case-insensitive banata hai. `searchableText.includes(query)` name ya subject mein partial match check karta hai. Empty string sab records se match hoti hai.

`records.filter(...)` sirf wahi records return karta hai jo sab active conditions pass karte hain. Country exact match hai; `subjects.includes(filters.subject)` aur `studyLevels.includes(filters.studyLevel)` selected value ko array mein check karte hain. Conditions `&&` se combine hain, isliye filters ek saath apply hote hain. Original data mutate nahi hota.

Clear action `setFilters({ ...emptyFilters })` se query aur saare filters reset karta hai. Country card bhi fresh state banata hai, selected country set karta hai aur results heading par scroll/focus karta hai. Is reset behaviour ko page par explain kiya hai.

### Responsive aur accessibility details

Hero search mobile par stack hota hai; `sm:flex-row` se wider view mein inline hota hai. Country cards one/two/four columns mein adapt hote hain. Directory `lg:grid-cols-[240px_minmax(0,1fr)]` desktop sidebar banata hai; `minmax(0,1fr)` content overflow avoid karta hai. Result cards `md:grid-cols-2` par two columns hote hain.

Mobile filters native `<details>/<summary>` use karte hain, jo Enter/Space se expand hote hain. Desktop aur mobile views shared state use karte hain. Results count has `role="status"`; search/selects have explicit labels; decorative icons are hidden from screen readers. Result heading supports programmatic focus after search. Detail profiles do not create new routes or modal focus traps.

## Preview

Run `npm.cmd run dev` in `global-study-abroad` and use the actual terminal port:

`http://localhost:5173/global-study-abroad/services/country-university-selection`

Suggested checks:

1. Search `Computer Science`: three demo results. Search `NORTHBRIDGE` with outer spaces: one result.
2. Select Canada + Computer Science + Masters: one result (Maple Harbour Example University).
3. Select Canada + Design: empty state; reset returns all eight records.
4. Click Australia card: two results, other search/filter values cleared.
5. Expand a profile and follow the counselling link. Form prepares an unsent draft only; no real booking/submission.
6. Check mobile filter expansion and desktop sidebar, keyboard controls, long text wrapping and country-card focus at 375px/768px/desktop widths.

## Verification and limits

Passed: production build, targeted ESLint, SSR route rendering, local-image existence, case/whitespace search, each filter, combined filters, no-match results, non-mutation and empty-state rendering. File hashes confirm Phase 1, Phase 2, Navbar/Footer and existing package/theme/configuration stayed unchanged. Existing route/nav checks still pass.

No interactive browser/screenshot tool was available. Client-side clicking, actual mobile widths and focus behaviour were inspected in code but need the manual viewport checks above; SSR does not verify those browser interactions. Listings are intentionally fictional and not connected to a university API. Filters reset when the page unmounts; no backend or storage is used. Production hosting needs the same SPA fallback support as the existing React Router site.
