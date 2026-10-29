# GlobalPath Study Abroad

A responsive study-abroad information and planning website built with React, JSX, Vite and Tailwind CSS. Visitors can explore destinations, browse university information, read nine service guides and prepare questions for counselling.

For the full visitor journey, architecture and maintenance instructions, read the [complete website workflow and technology guide](docs/website-workflow-and-technology-guide.md).

## Quick start

Requirements: Node.js compatible with Vite 8 and npm. The project does not pin a Node version; use a compatible maintained release.

Run these commands from the project folder:

```sh
cd global-study-abroad
npm ci
npm run dev
```

Open the URL printed by Vite, normally:

```text
http://localhost:5173/global-study-abroad/
```

Vite may choose a different port if 5173 is occupied. On Windows PowerShell, use `npm.cmd` or `npx.cmd` if execution policy blocks `npm.ps1` or `npx.ps1`.

## Technology stack

| Technology | Role |
| --- | --- |
| React 19 and React DOM | Components, state, effects and browser rendering |
| JavaScript and JSX | Application logic and component markup |
| React Router 7 | Client-side routes, internal navigation and URL filters |
| Vite 8 and its React plugin | Development server, refresh, build and preview |
| Tailwind CSS 4 and its Vite plugin | Responsive utilities and custom navy/gold theme |
| Lucide React | Interface icons |
| ESLint with React Hooks/Refresh rules | Static code checks |
| Node.js and npm | Dependency management and verification scripts |

See [package.json](package.json) for declared versions and [package-lock.json](package-lock.json) for resolved dependencies. The application source is JavaScript; installed React type definitions do not make it a TypeScript application.

## Features

- Responsive navy, white and gold design with shared Navbar and Footer.
- Destination, Services and Company dropdowns plus a mobile drawer with focus handling and Escape support.
- Destination search and country/regional guides, including New Zealand, Europe and Asia.
- University directory with keyword, destination and study-level filters, sorting, reset, empty states and eligibility details.
- URL-backed main directory filters using `q`, `country` and `degree`.
- Nine dedicated service pages with varied layouts, FAQs, checklists and existing consultation actions.
- Exam discovery for IELTS, TOEFL, PTE, GRE, GMAT and SAT.
- Separate university-selection discovery experience with clearly labelled fictional demo records and working filters.
- Scholarship, internship and allied-support exploration controls over local example/topic data.
- Careers page with an empty confirmed-jobs state and optional fictional sample preview.
- Validated local enquiry-draft preparation and clipboard/manual-copy support.
- Ten credited official IIAM photographs across About, Counselling and Test Preparation, including a student-life gallery and aviation/hospitality imagery.

The navbar dropdowns list individual destinations and services directly. The former “All Destinations” and “All Services” dropdown entries were removed; their overview routes remain available.

## Routes

The browser URL prefixes each route below with `/global-study-abroad`.

| Area | Routes |
| --- | --- |
| Home | `/` |
| Destinations | `/destinations`, `/destinations/:countrySlug` |
| Regional guides | `/destinations/new-zealand`, `/destinations/europe`, `/destinations/asia` |
| University directory | `/universities` |
| Service overview | `/services` |
| Company | `/about`, `/careers` |
| Contact and booking | `/contact`, `/book-counselling` |
| Not found | Unmatched URLs render the fallback page |

Service routes:

```text
/services/counselling
/services/test-preparation
/services/country-university-selection
/services/applications-admission
/services/scholarships
/services/internship
/services/education-loan
/services/visa-processing
/services/allied-services
```

Example: `http://localhost:5173/global-study-abroad/services/counselling`.

## Project structure

```text
src/
  main.jsx                Browser entry point
  App.jsx                 Routes and shared page shell
  index.css               Tailwind import, theme tokens and global styles
  pages/                  Route components, including services/
  components/             Shared and page-specific sections
  data/                   Local content, listing records and filter helpers
  assets/                 Imported assets
public/images/            Directly served images and illustrations
scripts/                  Node/Vite verification scripts
docs/                     Workflow guides, phase notes and source audits
vite.config.js            Vite plugins and deployment base
eslint.config.js          ESLint flat configuration
```

### Key files to edit

- **Routes:** [src/App.jsx](src/App.jsx).
- **Navigation:** [src/data/navigationData.js](src/data/navigationData.js); desktop/mobile share this data.
- **Theme:** [src/index.css](src/index.css); Tailwind v4 colors are declared in `@theme`.
- **Main university directory:** [src/data/universitiesData.js](src/data/universitiesData.js), with regional records from `regionalUniversities.js` and audited fee/English data from `universityFeeRequirements.js`.
- **Fictional discovery data:** [src/data/universities.js](src/data/universities.js); separate from the main directory.
- **Service metadata:** [src/data/services.js](src/data/services.js), plus page-specific metadata/components.
- **Photo metadata:** [src/data/iiamPhotos.js](src/data/iiamPhotos.js); keeps paths, dimensions, alt text, captions and official sources together.

Content is stored locally. Editing it requires a rebuild/redeployment; there is no connected CMS or database.

## Forms and data limitations

This is a frontend application with **no connected submission backend**.

- The shared counselling enquiry form validates input and displays an **unsent draft**. Copying the draft does not submit it.
- Contact, booking and newsletter handlers explain that delivery, appointments and subscriptions are not connected.
- Checklists and normal local form state reset on reload/unmount; they are not saved as user accounts or applications.
- Careers sample roles, internship projects and scholarship examples are not confirmed openings, placements or awards.
- The service discovery directory is fictional demo data. The main university directory contains real institution names, but records are informational rather than verified offers or partnerships.
- Audited fees and English requirements are scoped to their cited courses, levels and years. Eight preserved legacy university records were not recertified by that audit.
- Tuition sorting compares existing numeric values without currency conversion; it is not a common-currency cost comparison.
- Some inherited content retains Imperial/IIAM branding, old intake options, statistics, testimonials or unverified contact/institutional claims. Review these before publication as GlobalPath facts.

No authentication, payment gateway, live application processing or admin dashboard is implemented. Do not display real submission success until an integrated backend confirms receipt.

## Images and credits

Official IIAM images are stored locally in `public/images/iiam/`. The user confirmed permission to reuse them on GlobalPath; public availability is not treated as an open licence. Original files and rejected candidates are retained outside public web assets in `docs/iiam-originals/`.

Other applicable illustrative photographs retain their documented credits. Foreign destination/university images remain relevant to those locations. A photograph is not evidence of a particular exam batch, placement result or partnership.

See the [current IIAM asset manifest](docs/iiam-asset-manifest.md) for exact source URLs, intended use, image dimensions, permissions and optimization details.

## Commands and verification

```sh
npm run dev                          # Development server
npm run build                        # Production output in dist/
npm run preview                      # Local preview of the production build
npm run lint                         # Project ESLint checks
node scripts/verify-iiam-images.mjs   # IIAM asset and static-render smoke checks
node scripts/verify-services.mjs      # Service/data/navigation smoke checks
```

The scripts use assertions, Vite module loading and React static rendering. They do not replace interactive browser tests. No `npm test` command or browser-testing framework is configured.

### Latest recorded status

- Production build passed after the navbar update; the existing JavaScript chunk-size advisory remains.
- Changed-file lint and IIAM image/render checks passed during the imagery update; the navigation component also passed targeted lint after its update.
- The full service script passes Counselling, Test Preparation and University Selection, then fails on an existing Applications/Admission anchor assertion. This has not been hidden or suppressed.
- Full-project lint success and interactive desktop/mobile browser validation have not been established. Check menus, tabs, filters, form disclosures and image crops manually.

These are recorded checks, not a claim that updating this README reran the application tests.

## Build and hosting

```sh
npm run build
npm run preview
```

Publish the generated `dist/` directory through your chosen hosting provider. Building or previewing does not deploy the website.

- Vite uses `base: '/global-study-abroad/'` in [vite.config.js](vite.config.js).
- React Router uses the same base through `import.meta.env.BASE_URL`.
- Configure an SPA fallback so directly opening or refreshing a nested route serves the application HTML while assets are served normally.
- For root-domain hosting, deliberately update the base and verify routes/assets again.
- No production domain, deployment pipeline or hosting-provider configuration is established by this README.
- No backend API keys are required for the current frontend. Never put private credentials into client-exposed `VITE_*` variables.

## Documentation

| Guide | Coverage |
| --- | --- |
| [Complete website workflow](docs/website-workflow-and-technology-guide.md) | Visitor journeys, all routes, architecture, technologies, state, setup and maintenance |
| [Services guide](docs/globalpath-services.md) | Shared service architecture and draft-form behavior |
| [Counselling Phase 1](docs/counselling-phase-1.md) | Counselling page implementation |
| [Test Preparation Phase 2](docs/test-preparation-phase-2.md) | Exam discovery and preparation workflow |
| [University Selection Phase 3](docs/university-selection-phase-3.md) | Fictional discovery dataset and filters |
| [University fee/requirements audit](docs/university-fees-requirements-audit.md) | Official sources, scope and unresolved values |
| [Careers guide](docs/careers-page.md) | Confirmed versus sample jobs and application limitations |
| [Current IIAM asset manifest](docs/iiam-asset-manifest.md) | Photo sources, placement, permissions and validation |
| [Initial IIAM image audit](docs/iiam-image-audit.md) | Historical first replacement pass |
| [Reference analysis](docs/reference-analysis.md) | Reference research and access limitations |

Phase documents record earlier implementation stages. Consult the current route/component code and latest manifests when details differ.
