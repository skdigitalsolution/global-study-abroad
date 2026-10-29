# Phase 2: GlobalPath Test Preparation

Only the existing Test Preparation page was redesigned in this phase. Phase 1 Counselling components, shared Navbar/Footer, route definitions, shared FAQ/form implementations, package.json and Tailwind/Vite configuration were preserved. No new service routes or dependencies were added.

## Reference findings and limits

Reviewed public text on 28 October 2026: https://www.studies-overseas.com/test-preparation

Observable order: hero and demo CTA, academy introduction and benefits, undergraduate exam group, graduate exam group, English proficiency group, language coaching, university promotion, events, study journey, blogs, counselling CTA, newsletter and footer. Exam entries have detail and enrol actions. No dedicated FAQ appeared in the accessible page text.

Exact photographic placements, column widths, carousel interaction and mobile breakpoint behaviour could not be verified with the text browser. GlobalPath's layout and copy are independently designed. No reference images, brand assets, testimonials or performance claims are used.

## Original layout

1. Light editorial hero with a local study photograph and working discovery/preparation anchors. This deliberately differs from Counselling's navy hero.
2. Filterable exam discovery with separate English proficiency and academic admission groups. Each card expands a practical research guide.
3. Dark preparation section with a vertical assessment, planning, practice and review timeline.
4. Existing native HTML FAQ component, supplied with original Test Preparation answers.
5. Gold consultation banner linking to the existing Counselling enquiry draft form. No new form or backend.

Exam choice, accepted versions and scores depend on the institution, programme and destination. No exam administration, provider affiliation, coaching availability, fees, score guarantees or pass rates are claimed.

## Important files: Hinglish explanation

- `src/pages/services/TestPreparationPage.jsx`: page ka assembly point. Hero, discovery, timeline, FAQ aur CTA ko order mein render karta hai. `useEffect` page title/meta description update karta hai aur unmount par old values restore karta hai.
- `src/data/testPreparation.js`: six exams, categories, official provider URLs, preparation steps, FAQs aur photo credit yahan hain. Content update karna ho to JSX ke bajay yahan edit karo. Shared service metadata spread hoti hai; original object mutate nahi hota.
- `src/components/test-preparation/TestPreparationHero.jsx`: responsive hero aur breadcrumb. Local photo ka URL `import.meta.env.BASE_URL` use karta hai, isliye `/global-study-abroad/` deployment mein path correct hai.
- `ExamDiscovery.jsx`: `useState` active category aur expanded exam track karta hai. `.filter()` relevant exams select karta hai aur `.map()` cards render karta hai. `aria-pressed`, `aria-expanded`, `aria-controls` aur `hidden` buttons/panels ka accessible state batate hain. Filter change par expanded card reset hota hai.
- `PreparationPlan.jsx`: ordered list ko vertical timeline ki tarah style karta hai; screen reader ko steps correct order mein milte hain.
- `TestPreparationCTA.jsx`: React Router `Link` existing `/services/counselling#enquiry` par navigate karta hai. Page koi registration ya booking submit nahi karta.
- `scripts/verify-services.mjs`: new page ke six cards, categories, official links, section order, local photo aur consultation target check karta hai; existing Counselling render checks bhi run hote hain.

Tailwind mein mobile base styles pehle hain. `sm:` font sizes/spacing badhata hai, `lg:grid-cols-[1fr_0.95fr]` hero ko desktop par split karta hai. Cards base par one column, `md:` par two aur `xl:` par three columns hote hain. Existing `navy-*` aur `gold-*` tokens reuse hue hain; no Tailwind configuration changes.

## Photo provenance

Local file: `public/images/services/test-preparation-study.jpg`.

Photographer: Roxanne Minnish. Source: https://www.pexels.com/photo/woman-wearing-blue-headphones-studying-on-her-laptop-7976775/

License: https://www.pexels.com/license/. Downloaded for website use on 28 October 2026. The image is illustrative; it does not identify a GlobalPath student, classroom, partner or coaching batch. Credit/source are visible under the photo. No reference-site photography was copied.

## Official exam sources

Descriptions are broad preparation directions, not a substitute for current test specifications. The cards link directly to these providers:

- IELTS Academic: https://ielts.org/take-a-test/test-types/ielts-academic-test
- TOEFL: https://www.ets.org/toefl.html
- PTE Academic: https://www.pearsonpte.com/pte-academic/
- GRE: https://www.ets.org/gre.html
- GMAT: https://www.mba.com/exams/gmat-exam
- SAT: https://satsuite.collegeboard.org/sat

## Preview and checks

Run `npm.cmd run dev` inside `global-study-abroad`, then use the terminal's actual port:

`http://localhost:5173/global-study-abroad/services/test-preparation`

Manual checks:

1. Test all three category filters; counts should be six, three and three.
2. Expand and close each exam guide with keyboard or pointer. Official provider links open in a new tab; preparation links jump to the timeline.
3. Expand FAQs with Enter/Space. Follow consultation CTA to Phase 1 and verify its enquiry form still makes an unsent draft only.
4. Check 375px, 768px and desktop layouts for wrapping/overflow. Reload the direct route; production hosting still needs SPA fallback support.

Automated checks passed: production build, targeted ESLint, route/page server rendering including Phase 1, local asset existence, section/card/link assertions and diff whitespace checks. File hashes confirm Phase 1 source and existing theme/configuration were unchanged by this phase. Interactive browser/screenshots were not available, so client-side filter clicks, focus behaviour and responsive appearance require manual browser verification.
