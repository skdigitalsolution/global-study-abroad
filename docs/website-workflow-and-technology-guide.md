# GlobalPath: Complete Website Workflow and Technology Guide

Reviewed against the existing project on **29 October 2026**.

This is the main handover guide for the `global-study-abroad` website. It explains the visitor journey, application structure, routes, interactive features, data, design system, development tools, verification and deployment. The current code is the source of truth; older phase documents describe the implementation at that earlier stage.

## Contents

1. [Project overview](#1-project-overview)
2. [Visitor workflow](#2-visitor-workflow)
3. [Complete route map](#3-complete-route-map)
4. [Features by area](#4-features-by-area)
5. [Technology and tools](#5-technology-and-tools)
6. [Application and folder structure](#6-application-and-folder-structure)
7. [Data and state workflow](#7-data-and-state-workflow)
8. [Forms and enquiry workflow](#8-forms-and-enquiry-workflow)
9. [Design, accessibility and imagery](#9-design-accessibility-and-imagery)
10. [Local development workflow](#10-local-development-workflow)
11. [Verification workflow](#11-verification-workflow)
12. [Deployment workflow](#12-deployment-workflow)
13. [Maintenance and future integration](#13-maintenance-and-future-integration)
14. [Existing detailed documentation](#14-existing-detailed-documentation)

## 1. Project overview

GlobalPath is a responsive study-abroad information and planning website built inside the existing React project. Visitors can explore destinations, browse university records, understand nine service areas, prepare questions for counselling and view career information.

It is a **client-rendered single-page application (SPA)**. React displays the interface in the browser, React Router changes pages, and JavaScript data files supply the content. The current application has no connected submission backend, database, authentication, admin dashboard, payment gateway or live admissions system.

The shared navigation and newer pages use GlobalPath. Some inherited pages retain Imperial/IIAM wording, statistics, contact details or older sample content. Those inherited statements are not verified GlobalPath claims. A complete brand/content review remains separate from this documentation task.

### What is functional today?

- Internal route navigation, dropdowns, mobile navigation and section anchors.
- Local destination, university, exam, scholarship, internship, support-topic and career exploration controls where implemented.
- University eligibility/detail views, preparation checklists, FAQ expansion and enquiry-draft preparation.
- Input validation and clear notices where online submission is unavailable.

Browsing an institution or preparing a draft does not submit an application, secure a place, book an appointment or guarantee eligibility.

## 2. Visitor workflow

### Main study-abroad journey

1. **Land on Home.** Read the introduction, explore destination/service sections or use the country and degree selector.
2. **Search universities.** Home search navigates to `/universities` with `country` and `degree` query parameters.
3. **Explore a destination.** Open Destinations, search its cards and visit a country or regional guide.
4. **Review study information.** Destination guides offer overview/courses, university listings and visa-planning sections, with counselling links.
5. **Refine the university directory.** Search by name, city or sample program; choose destination and degree; change sort order; open eligibility details.
6. **Read a service guide.** Use the Services dropdown to understand counselling, exams, shortlisting, applications, funding, internships, visas or departure support.
7. **Prepare questions.** Use a preparation checklist or the Counselling enquiry-draft section.
8. **Choose a contact action.** Follow an existing contact/booking link, or copy the unsent enquiry draft. Online forms currently do not deliver messages or confirm appointments.

### Alternative journeys

- **Exam planning:** Services > Test Preparation > choose exam category > expand an exam > visit its official information or prepare a counselling enquiry.
- **Shortlist practice:** Services > Country & University Selection > choose a destination and filters > explore fictional demo profiles > prepare shortlisting questions.
- **Career exploration:** Company > Careers > see the confirmed-openings state > optionally enable the clearly labelled sample preview > filter examples > follow Contact for next steps.
- **Regional exploration:** Destinations > New Zealand, Europe or Asia > use the guide tabs and available country selection > visit official university information or the main directory.

## 3. Complete route map

Routes below are React Router paths. The current browser URL prefixes each with **`/global-study-abroad`**. For example, `/universities` is previewed at `/global-study-abroad/universities`.

| Route | Page component | Purpose |
| --- | --- | --- |
| `/` | `HomePage.jsx` | Main introduction, search and exploration sections |
| `/destinations` | `DestinationsPage.jsx` | Searchable destination listing |
| `/destinations/new-zealand` | `NewZealandPage.jsx` | New Zealand guide |
| `/destinations/europe` | `EuropePage.jsx` | Europe guide with country-specific content |
| `/destinations/asia` | `AsiaPage.jsx` | Asia guide with country-specific content |
| `/destinations/:countrySlug` | `CountryDetailPage.jsx` | Existing country detail pages, including `uk`, `usa`, `canada`, `ireland`, `australia` and `germany` where supplied by destination data |
| `/universities` | `UniversitiesPage.jsx` | Main institution directory and eligibility/detail view |
| `/services` | `ServicesPage.jsx` | Service overview |
| `/services/counselling` | `CounsellingPage.jsx` | Counselling journey and local enquiry draft |
| `/services/test-preparation` | `TestPreparationPage.jsx` | Exam discovery and preparation planning |
| `/services/country-university-selection` | `CountryUniversitySelectionPage.jsx` | Wrapper exporting the dedicated `CountryUniversitySelection.jsx` discovery page |
| `/services/applications-admission` | `ApplicationsAdmissionPage.jsx` | Wrapper exporting `ApplicationsAdmission.jsx` |
| `/services/scholarships` | `ScholarshipsPage.jsx` | Scholarship planning and illustrative opportunities |
| `/services/internship` | `InternshipPage.jsx` | Internship planning and illustrative project exploration |
| `/services/education-loan` | `EducationLoanPage.jsx` | Education-funding preparation guide |
| `/services/visa-processing` | `VisaProcessingPage.jsx` | Study-visa preparation guide |
| `/services/allied-services` | `AlliedServicesPage.jsx` | Related support and departure-planning guide |
| `/about` | `AboutPage.jsx` | Existing company/institutional information |
| `/careers` | `CareersPage.jsx` | Career information and opening/sample exploration |
| `/contact` | `ContactPage.jsx` | Existing contact information and non-delivering enquiry form |
| `/book-counselling` | `BookCounsellingPage.jsx` | Validated booking interface without booking delivery |
| `*` | `NotFoundPage.jsx` | Fallback for unmatched URLs |

An arbitrary `countrySlug` does not automatically create content; the slug must match the existing destination data. The three explicit regional routes use their own guide pages.

### Shared navigation

`src/data/navigationData.js` defines Destinations, Universities, Services, Company and Contact Us. Services links are generated from `src/data/services.js`. Company contains About Us and Careers. Both desktop and mobile navigation consume this shared structure.

`App.jsx` keeps Navbar and Footer outside the route switch, so they remain around each page. A fixed **Plan your next step** link opens `/services/counselling#enquiry`. `ScrollToTop.jsx` handles scrolling to the top or to a supplied hash target after navigation.

## 4. Features by area

### Home

`HomePage.jsx` composes these sections in order:

1. Hero and destination/degree search.
2. Trust statistics.
3. Destination cards.
4. Service cards.
5. How it works.
6. Testimonials.
7. FAQs.
8. Newsletter form.

Statistics and testimonials are inherited content, not independently verified outcomes. Newsletter input is validated, but a valid email is not subscribed to a mailing list.

### Destination guides

- The destination list filters local records using the search text.
- Existing country pages show an image-led hero, overview/courses, university cards, admission information, visa-planning steps and counselling links.
- New Zealand, Europe and Asia use the reusable `DestinationGuidePage.jsx` and `extendedDestinationGuides.js`.
- Regional guides provide Overview & Courses, Universities and Visa Process tabs. Their tab implementation includes arrow-key, Home and End navigation.
- Europe/Asia provide country-specific selections where defined in the guide data.
- University cards lead to the configured official information or enquiry/directory actions.

Destination information is informational. Visa rules, costs and academic entry criteria must be rechecked with the relevant official source. Regional guide cards may still say to check official course fees even where the main directory has more detailed audited data: those views do not use identical rendering/data paths.

### Main Universities directory

The main `/universities` directory preserves the existing institution list and appends regional records through the existing data structure. The fee audit documents 28 institutions at its review point, including 20 previously-placeholder records.

- Keyword search matches university name, city or listed program.
- Destination filtering supports individual countries and the Europe/Asia groupings.
- Study-level filtering uses each record's `studyLevels`.
- Search, destination and degree are stored in URL query parameters: `q`, `country`, `degree`.
- Sorting offers university name and numeric tuition order. The internal state value `ranking` actually selects the displayed **University Name (A-Z)** behavior; it does not perform ranking order.
- Missing numeric tuition values sort after known numeric values.
- Reset clears query filters and restores default sorting.
- Results include count/empty state, responsive cards, sample programs and retained Apply/eligibility actions.
- The detail view exposes further eligibility information and, for audited records, fee/English scope plus official source links.

**Sorting limitation:** numeric tuition sorting does not convert currencies. An AUD number and an EUR number cannot be interpreted as a fair common-currency comparison. The fee audit did not recertify the eight legacy records or their rankings.

### Nine service pages

| Service | Main features and workflow |
| --- | --- |
| Counselling | Split hero, student journey, benefits, profile-preparation checklist/progress, FAQs and validated unsent enquiry draft. IIAM event/classroom photos have source captions. |
| Test Preparation | Exam-focused hero; IELTS, TOEFL, PTE, GRE, GMAT and SAT discovery; English proficiency versus admission-test categories; expandable exam details and official links; assessment-to-review preparation plan; FAQs and counselling CTA. |
| Country & University Selection | Destination-led discovery, keyword/subject/country/study-level filters, desktop sidebar/mobile collapsible filters, result counts, reset/empty states, inline demo profiles, shortlisting guidance and counselling CTA. All institutions in this service directory are fictional demo records. |
| Applications & Admission | Application-planning guidance, preparation stages, interactive document checklist, FAQs and existing enquiry actions. No university application is transmitted. |
| Scholarships | Funding guidance, illustrative opportunities filtered by category/destination/level, preparation checklist, FAQs and enquiry actions. Examples are not verified open awards. |
| Internship | Industry/work-mode filters over illustrative project records, planning guidance, readiness checklist, FAQs and consultation actions. Examples are not confirmed placements or vacancies. |
| Education Loan | Funding-planning information, process and document checklist, FAQs and enquiry actions. No credit assessment, lender integration, approval or disbursement. |
| Visa Processing | Visa-preparation guidance, document checklist, planning steps, FAQs and enquiry actions. No embassy submission, visa decision or approval guarantee. |
| Allied Services | Search/category filters over support topics, departure-readiness checklist, FAQs and existing contact/enquiry actions. Descriptions do not confirm supplier bookings or verified service availability. |

The later service pages have their own layouts and local sections. They are not all direct instances of `ServicePageLayout.jsx`. Shared components remain available for reuse, while page-specific content may live in its page component.

### Careers, About and Contact

- Careers includes company/culture aspirations, a local illustrative professional photograph and a searchable/filterable opportunities component.
- `careers.js` has no confirmed jobs by default. The optional sample preview is separate and explicitly fictional.
- Career filters cover keyword, department, location and employment type; reset and no-match behavior are included.
- Sample applications and the resume CTA lead to existing Contact guidance, not an upload or hiring backend.
- About and Contact preserve existing content. Office locations, contact details and response-time wording require company verification before publication.

## 5. Technology and tools

Versions below are the **declared ranges in `package.json`**, not a claim that every installed package resolves to exactly that number. `package-lock.json` records the resolved dependency tree.

| Technology/tool | Declared version | How this project uses it |
| --- | --- | --- |
| JavaScript / ES modules | Language, no package version | Application logic, data arrays, imports/exports, filtering and validation |
| JSX | Compiled source syntax | React component markup in `.jsx` files |
| React | `^19.3.1` | Components, props, state, effects and rendering |
| React DOM | `^19.3.1` | `createRoot` mounts the browser application; verification uses server rendering |
| React Router DOM | `^7.18.4` | BrowserRouter, Routes, Route, Link, navigation, location and URL search parameters |
| Vite | `^8.3.5` | Development server, module transformation, production build and local build preview |
| Vite React plugin | `^6.1.2` | React/JSX integration and development refresh |
| Tailwind CSS | `^4.3.3` | Utility classes, responsive styling and navy/gold theme tokens |
| Tailwind Vite plugin | `^4.3.3` | Integrates Tailwind compilation into Vite |
| Lucide React | `^1.62.0` | Interface icons for navigation, study topics, steps, filters and actions |
| ESLint / `@eslint/js` | `^10.13.0` / `^10.0.1` | Static JavaScript lint rules |
| ESLint React Hooks plugin | `^7.1.1` | Hook-usage checks |
| ESLint React Refresh plugin | `^0.5.7` | Refresh-compatible component export checks |
| `globals` | `^17.13.0` | Browser-global definitions for linting |
| React type definitions | React `^19.3.0`, React DOM `^19.3.0` | Development/editor types; application source remains JavaScript, not TypeScript |
| Node.js and npm | No version pinned in this project | Dependency installation, Vite/ESLint commands and verification scripts |
| Browser platform APIs | Browser-provided | FormData, native validation, Clipboard API, URLSearchParams, focus, scroll and keyboard interactions |

Use `package.json` and the lockfile when installing or updating rather than inferring resolved versions from prose.

`eslint.config.js` uses ESLint's flat configuration and ignores `dist`. The verification script is an `.mjs` Node script run separately from `npm run lint`.

### Supporting implementation tools and sources

- Terminal commands in PowerShell/npm were used to inspect, build and verify the existing project.
- Public reference-page inspection informed information architecture; its branding and copy were not adopted as GlobalPath content.
- Official university pages supplied the scoped fee and English-requirement audit, with sources stored in data and documentation.
- Pexels sources are credited for applicable illustrative photography; IIAM official photos are used in three placements with the user's confirmed reuse permission.
- The IIAM classroom web image was resized/re-encoded with conventional image processing, not AI generation. Its original is retained outside the public web assets.
- No external API keys or AI runtime service are needed for the current browser features.

## 6. Application and folder structure

```text
global-study-abroad/
|-- index.html                     HTML shell and root mount element
|-- package.json                   Dependencies and npm commands
|-- package-lock.json              Resolved dependency versions
|-- vite.config.js                 React/Tailwind plugins and base URL
|-- eslint.config.js               Static lint configuration
|-- src/
|   |-- main.jsx                   StrictMode + createRoot entry point
|   |-- App.jsx                    Router, route map and shared shell
|   |-- index.css                  Tailwind import, theme and global styles
|   |-- assets/                    Imported assets, including retained legacy files
|   |-- pages/                     Top-level route components
|   |   `-- services/              Dedicated service pages and wrappers
|   |-- components/
|   |   |-- common/                Navbar, navigation, mobile menu, Footer, Button
|   |   |-- home/                  Home sections
|   |   |-- counselling/           Counselling-specific sections/checklist
|   |   |-- test-preparation/      Exam discovery, hero, plan and CTA
|   |   |-- discovery/             Demo university filters/results
|   |   |-- destinations/          Shared regional guide
|   |   |-- careers/               Opportunities interface
|   |   `-- services/              Reusable service building blocks
|   `-- data/                      Local metadata, listings and filter helpers
|-- public/images/                 Directly served photos and illustrations
|-- scripts/verify-services.mjs     Automated service smoke checks
|-- docs/                          Phase guides, audits and this handover
`-- dist/                          Generated production build, not source code
```

### Rendering workflow

```text
index.html -> src/main.jsx -> App.jsx
                              |
                              +-- BrowserRouter (Vite base URL)
                              +-- ScrollToTop + fixed counselling link
                              +-- Navbar
                              +-- Routes -> selected page -> sections + local data
                              +-- Footer
```

React StrictMode wraps development rendering. Effects should clean up their listeners and temporary document changes; development can invoke extra setup/cleanup cycles to expose problems.

Reusable components receive content through props. For example, `EnquiryCTA` receives service metadata, while the regional guide receives destination-specific data. `Button.jsx` supplies a styled button, not automatic routing; page code uses React Router links or click handlers for navigation.

`EnquiryModal.jsx` remains as legacy code but is not mounted by `App.jsx`. Its old automatic popup/simulated success behavior is not the active site-wide enquiry workflow. Likewise, a file's presence does not prove that a route renders it.

## 7. Data and state workflow

| Data file | Responsibility |
| --- | --- |
| `navigationData.js` | Shared desktop/mobile menu hierarchy |
| `services.js` | Nine service names/slugs and reusable service metadata |
| `servicesData.js` | Existing overview/home service content; separate from newer service metadata |
| `destinationsData.js` | Existing destination list and country-page content |
| `extendedDestinationGuides.js` | New Zealand, Europe and Asia guide content and university groups |
| `universitiesData.js` | Existing main directory records plus regional records |
| `regionalUniversities.js` | Converts regional guide universities into directory records, adds audited data and provides destination matching |
| `universityFeeRequirements.js` | Official-source fee/English labels, scope, links and review date for previously-placeholder records |
| `universities.js` | Separate fictional discovery records, destination metadata and filter helper |
| `counselling.js` | Counselling copy, journey/checklist data and photo metadata |
| `testPreparation.js` | Exam categories, exam explanations, official links and photo metadata |
| `iiamPhotos.js` | Verified official IIAM photo paths, dimensions, descriptions, source pages and original URLs |
| `internshipOpportunities.js` | Illustrative project exploration records |
| `careers.js` | Confirmed jobs, separate fictional samples and filter helpers |
| `faqsData.js` | Existing shared/home FAQ content |

Some page-specific arrays remain inside their page component. There is no CMS or server synchronization: editing a data file requires rebuilding/redeploying the site.

### How React updates results

1. A visitor types or selects a value.
2. An event handler updates `useState` or URL search parameters.
3. The component derives matching records using `.filter()`.
4. `.includes()` performs partial text matching, usually after lowercasing.
5. Active conditions combine with AND, so adding filters can reduce the results.
6. React renders matching cards or an empty-results message.

In the main directory, `useMemo` derives the filtered/sorted list from current filters. It is a rendering optimization, not a database or permanent cache. Sorting runs on the filtered array. In checklists, selected IDs/titles are added or removed from an array; counts and progress reflect that array.

**Hinglish:** `useState` current selection ya checkbox value yaad rakhta hai. `filter()` poori list mein se matching entries nikalta hai; `includes()` text ke andar keyword check karta hai. State badalte hi React matching UI dobara render karta hai. Main directory ke URL filters reload/share ho sakte hain; normal page checklist state reload par reset ho jaati hai.

## 8. Forms and enquiry workflow

| Interface | Validation/interaction | Actual outcome |
| --- | --- | --- |
| Shared `EnquiryCTA` | Required name/email/message/acknowledgement; name and message trimmed-length checks; optional phone pattern/digit validation | Displays an unsent draft in a read-only textarea |
| Copy draft | Clipboard write attempted after user action | Copies text locally; manual-copy fallback when unavailable |
| Contact | Required name, valid email, phone length and message | States that messaging is not connected and nothing was sent |
| Book Counselling | Required name, valid email, phone length and city; destination can be initialized from query string | States that no session was booked and no details were sent |
| Home newsletter | Email check | States that signup is not connected; no subscription |
| Preparation checklists | Local checkbox toggles and progress/counts | No document upload, eligibility decision or submission |
| Careers application/resume actions | Existing route links | Contact guidance; no resume upload or hiring submission |

`EnquiryCTA` uses `preventDefault()`, `FormData`, native form constraints and custom validation. It stores the generated draft in React state. The Clipboard API may require a secure context and browser permission; the manual-copy message handles failure.

No active workflow sends these form fields to a backend or persists them to localStorage/sessionStorage. A reload or component unmount clears normal local form/checklist state. Existing dormant success UI in older Contact/Booking components does not mean their current handlers deliver anything.

**Hinglish:** Abhi form submit ka matlab company ko email bhejna nahi hai. Counselling form sirf draft banata hai; Contact/Booking/Newsletter clearly batate hain ki connection available nahi hai. Real success tabhi show karna hai jab future backend actual request accept kare.

## 9. Design, accessibility and imagery

### Tailwind design system

Tailwind v4 is imported with `@import "tailwindcss"` in `src/index.css`. Custom colors live in its `@theme` block; the project does not need a new Tailwind v3-style configuration file.

| Token | Value | Typical purpose |
| --- | --- | --- |
| `navy-950` | `#050b18` | Dark background and primary text |
| `navy-900` | `#0a162d` | Navigation, dark sections and cards |
| `navy-800` | `#102042` | Dark surfaces/borders |
| `navy-50` | `#f2f5fb` | Light section backgrounds |
| `gold-600` | `#c77000` | Accent text |
| `gold-500` | `#f59e0b` | Action accents |
| `gold-400` | `#fbbf24` | Bright gold buttons/highlights |
| `gold-100` | `#fef3c7` | Soft accent backgrounds |

The body uses an Inter-first system font stack; naming Inter does not itself download a font. Utility classes control grids, spacing, typography, rounded corners, shadows and hover/focus states. Custom glow utilities and scrollbar styles supplement them.

Responsive base classes target small screens. Prefixes such as `sm:`, `md:`, `lg:` and `xl:` alter layout at wider breakpoints. Sections stack on mobile; grids/split layouts expand on larger screens. The mobile navigation drawer is used below the desktop navigation breakpoint.

**Hinglish:** `grid-cols-1 lg:grid-cols-2` ka matlab mobile par ek column aur large screen par do columns. `bg-navy-900` aur `text-gold-400` common theme tokens use karte hain, isliye colors consistent rehte hain.

### Accessibility features implemented

- Shared dropdowns use native `details`/`summary`, with closing behavior for Escape/outside interactions.
- The mobile drawer has dialog semantics, focus trapping/return and body-scroll locking.
- FAQs and demo profiles use expandable semantic controls; exam details include button/control associations.
- Regional tabs have tab/panel relationships and keyboard navigation.
- Newer forms include labels, native validation and status/error messaging.
- Image metadata supplies alt text; decorative icons are hidden from assistive technology where configured.
- Responsive layouts, focus styling and breadcrumbs support navigation.

These are implementation features, not a full accessibility-conformance certification. Older forms/components have uneven labeling and interaction quality. Browser, keyboard and assistive-technology checks remain necessary.

### Image workflow

- Files under `public/` are addressed from the Vite base, for example `${import.meta.env.BASE_URL}images/iiam/iiam-classroom-web.jpg`.
- Assets imported from `src/assets/` are handled by Vite's module/build pipeline.
- Local photos avoid depending on third-party image hosting at runtime; some retained directory/destination images may still use remote URLs.
- Lazy loading, explicit dimensions and `object-cover` are used where configured. Some hero images load eagerly.
- Ten distinct IIAM photos now appear across About, Counselling and Test Preparation. About adds a student-environment split, training photos in its existing aviation/hospitality tab and a three-photo student-life gallery; Counselling uses event/discussion photos; Test Preparation keeps the classroom. Credits/captions identify the source and do not claim a test-preparation batch exists. `IIAMPhoto.jsx` and `components/about/IIAMImageSections.jsx` provide the reusable photo and About sections.
- Large/unused IIAM originals are retained in `docs/iiam-originals/`, outside `public/`; only web assets belong in the production public image folder.
- Illustrative destination photos should not be described as a particular university campus unless verified. Generic staff photographs are not actual GlobalPath employees.

See the image audit for exact source URLs, reuse permission basis, mappings and sections that did not have suitable image slots.

## 10. Local development workflow

Run commands from the existing project directory:

```powershell
cd C:\Users\ADMIN\Desktop\class\global-study-abroad
npm.cmd ci
npm.cmd run dev
```

`npm ci` installs the lockfile-defined dependencies and expects `package.json` and `package-lock.json` to agree. Use `npm install` when intentionally changing dependencies and commit/review the resulting lockfile change. Avoid reinstalling dependencies when the existing installation already works and no dependency change is needed.

On systems without a PowerShell `npm.ps1` restriction, `npm` and `npm.cmd` serve the same purpose. Use the URL and port Vite actually prints, usually:

```text
http://localhost:5173/global-study-abroad/
http://localhost:5173/global-study-abroad/universities
http://localhost:5173/global-study-abroad/services/counselling
```

### Typical change workflow

1. Find the route in `App.jsx` and follow its component import.
2. Identify the page's data source rather than creating a duplicate directory/page.
3. Edit copy/data in the appropriate metadata file or page-local array.
4. Reuse common components and theme tokens; preserve existing route behavior.
5. Check affected links, filters, empty states and mobile behavior.
6. Run the appropriate lint/build/smoke checks.
7. Record source/permission changes in the relevant audit.

## 11. Verification workflow

| Command | Purpose |
| --- | --- |
| `npm.cmd run dev` | Development server with refresh |
| `npm.cmd run build` | Compile the production site into `dist/` |
| `npm.cmd run preview` | Serve the built output locally; not a deployment |
| `npm.cmd run lint` | Run the configured ESLint rules |
| `node scripts/verify-services.mjs` | Run separate Node/Vite service smoke checks |
| `node scripts/verify-iiam-images.mjs` | Verify IIAM asset metadata/JPEG paths and render the updated image sections |

The service script uses Node assertions, Vite module loading and React static server rendering. It checks route/navigation consistency, page markup, local assets and selected data/filter behaviors. This is not an interactive browser test suite; there is no configured `npm test` command, Playwright or Cypress dependency.

### Known verification status at handover

- The last image-update production build passed. It retained a JavaScript chunk-size advisory above 500 kB; an advisory is not a build failure.
- Targeted lint and Counselling/Test Preparation render, source-credit and image-path checks passed during that update.
- The full `verify-services.mjs` currently passes those pages and discovery, then stops on an Applications/Admission section-anchor assertion. Its assumptions need reconciliation with the current page; do not describe the whole suite as passing.
- Full-project lint success has not been established by this documentation task.
- This guide is a documentation-only change; the earlier checks are historical results, not new browser validation.

### Manual browser checklist

1. Open Home and every route; test direct URL refresh as well as internal links.
2. At desktop/tablet/mobile widths, inspect wrapping, card columns, imagery, drawer and overflow.
3. Use Tab, Enter/Space and Escape in menus; check mobile focus return and regional tab keys.
4. Main directory: search by name/city/program, combine destination and degree, sort, reset, and force zero results.
5. Discovery service: combine country/subject/level filters and inspect an inline demo profile.
6. Open eligibility details; confirm official fee/English links and clear source scope.
7. Test exam categories/details, scholarship/internship/support filters and preparation checklists.
8. Test blank/invalid/valid enquiry inputs. Valid input must not claim real submission or booking.
9. Careers: verify empty live state, opt-in fictional samples, filters and Contact destinations.
10. Confirm image requests load under the configured base path and captions match the actual photograph.

## 12. Deployment workflow

1. Verify the intended hosting subdirectory and keep Vite `base` and Router `basename` consistent.
2. Run `npm.cmd run build`.
3. Run `npm.cmd run preview` and inspect the printed preview URL under `/global-study-abroad/`.
4. Publish the generated `dist/` directory using the chosen host's process.
5. Configure an SPA fallback so direct requests such as `/global-study-abroad/services/counselling` serve the application's HTML while actual asset files remain served normally.
6. Test deep links, refreshes, images, external sources and form disclosures on the deployed origin.

The project does not establish a hosting provider, production domain, CI/CD deployment or GitHub Pages rewrite setup. A static host may require a separate fallback solution. Running `npm run build` does not publish the site. For root-domain hosting, change the configured base deliberately and re-test all URLs/assets rather than hardcoding path replacements.

No submission environment variables are needed for the current frontend. When adding a backend, never put private credentials in client-side `VITE_*` variables: those values are exposed in the built browser code.

## 13. Maintenance and future integration

### Content maintenance

- Verify legacy branding, contact details, offices, testimonials, statistics and service-availability statements before publishing them as GlobalPath facts.
- Recheck university data at program/degree/intake level. Preserve official links, currency, academic year and fee/English scope; do not turn illustrative estimates into guarantees.
- Preserve the distinction between the real-name main directory and the fictional service-discovery dataset.
- Add confirmed jobs only to the live careers dataset with approved application destinations. Keep samples separate.
- Replace sample scholarship/internship records only with verified opportunities and clear sources.
- Check external image availability/rights and maintain credits when changing photography.
- Some existing files display encoding artifacts or placeholder wording; inspect and correct them deliberately as content work, not silently as part of unrelated features.

### Adding a page or service

Create the dedicated page component, register its route, update the appropriate navigation/data metadata and connect only valid CTA targets. Shared service navigation is generated from `services.js`, but adding metadata alone does not register a page route. Reuse components where appropriate while preserving page-specific layouts.

### Adding real submissions later

This is future work, not an implemented feature:

1. Agree on the receiving organization, approved contact destination and data/privacy requirements.
2. Implement a server endpoint and server-side validation, with suitable abuse protection and delivery/storage handling.
3. Connect the frontend request with pending, failure and confirmed-success states.
4. Keep user input available on failure; never manufacture booking IDs or success responses.
5. Test delivery, retries, errors and access to personal data before enabling production submission.

Other future work may include consistent metadata/SEO, an accessibility review, currency-aware comparison and performance/code-splitting improvements. Existing page effects set titles/descriptions on several newer routes, but there is no uniform site-wide SEO or prerendering system.

## 14. Existing detailed documentation

| Document | Read it for |
| --- | --- |
| [Reference analysis](reference-analysis.md) | Reference inspection and access limitations |
| [Services project guide](globalpath-services.md) | Original shared service architecture and draft-form design |
| [Counselling Phase 1](counselling-phase-1.md) | Counselling page decisions and original verification |
| [Test Preparation Phase 2](test-preparation-phase-2.md) | Exam page implementation |
| [University Selection Phase 3](university-selection-phase-3.md) | Fictional discovery data, filters and dedicated page |
| [University fees and requirements audit](university-fees-requirements-audit.md) | Official sources, reviewed records and unverified fee/English cases |
| [Careers page guide](careers-page.md) | Live versus sample jobs and application limitations |
| [IIAM image audit](iiam-image-audit.md) | Official photo sources, permissions, mapping and image checks |
| [Current IIAM asset manifest](iiam-asset-manifest.md) | Expanded About/Counselling/Test Preparation imagery, all ten photo sources and current validation |

Read phase documents as historical records. For the current route map and active component/data relationships, use `App.jsx`, the imported components and this guide together.
