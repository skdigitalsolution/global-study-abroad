# IIAM image replacement audit

> **Expanded implementation:** the report below records the initial replacement pass. The subsequent imagery task adds About learning/training/student-life sections, varies Counselling photography and improves Test Preparation framing. See the [current asset manifest and implementation report](iiam-asset-manifest.md) for all ten assets, exact sources, changes, permission basis and validation. Statements below about absent About photo slots and unverified candidates describe the earlier pass, not the current page.

Date: 29 October 2026. Workspace: existing `global-study-abroad` React/Vite/Tailwind application. This is the GlobalPath site, not a separate IIAM college codebase. User explicitly confirmed permission to reuse official IIAM photographs in this GlobalPath website during this task. No open/public licence is asserted for the IIAM photographs; reuse relies on that confirmation.

## Inspection before replacements

Reviewed the official homepage https://www.iiamedu.com/, About https://www.iiamedu.com/Aboutus.aspx, Activities https://www.iiamedu.com/Activity_Main.aspx, Life at IIAM https://www.iiamedu.com/Activity_Page.aspx, aviation/hospitality https://www.iiamedu.com/AviationHospitalityM.aspx and placement https://www.iiamedu.com/Placement.aspx. Official image links were followed, not guessed. The web reader returned cache misses for direct image URLs; standard direct downloads succeeded without bypassing access restrictions. Downloaded candidates were visually inspected before use.

Current homepage hero is CSS gradients/search UI, not an AI photo. About and Contact have no photograph slots. Testimonials use text rather than employee/student photographs. Foreign destination and university cards need destination/institution imagery, not IIAM campus photos. No independent campus, mock-aircraft, hospitality, faculty or placements image section exists in this workspace. No layout or page-content additions were made to force those photographs into the site.

## Actual replacements

| Page/section | Previous asset | Replacement | Official source |
| --- | --- | --- | --- |
| `/services/counselling`: hero | `images/services/counselling-conversation.jpg`, licensed Pexels one-to-one discussion | `images/iiam/iiam-career-counselling.jpg`, speaker at the event labelled Career Counselling Session by IIAM | [Official homepage: Career Counselling Session](https://www.iiamedu.com/) / [Original asset](https://www.iiamedu.com/Images/Document/3342CAREER-COUNSELLING-SESSION-min.jpg) |
| `/services/counselling`: academic/benefits image | `images/services/counselling-planning.jpg`, licensed Pexels teacher/student | `images/iiam/iiam-classroom-web.jpg`, actual students in an IIAM classroom | [Official homepage: Air Conditioned Class Rooms](https://www.iiamedu.com/) / [Original asset](https://www.iiamedu.com/Images/Document/3305DSC00739.JPG) |
| `/services/test-preparation`: academic hero | `images/services/test-preparation-study.jpg`, licensed Pexels study scene | `images/iiam/iiam-classroom-web.jpg`, same authentic classroom | [Official homepage: Air Conditioned Class Rooms](https://www.iiamedu.com/) / [Original asset](https://www.iiamedu.com/Images/Document/3305DSC00739.JPG) |

The speaker is not described as a named faculty member or a one-to-one adviser. Classroom captions do not claim a specific exam, batch or coaching availability. Test Preparation explicitly says the classroom image is not evidence of an available test-preparation batch. Real photographs are credited to IIAM rather than retaining the old Pexels credits. Logos remain unchanged.

## Image accuracy findings and retained originals

- The official link labelled Wi-Fi Enabled Class Rooms actually depicts students in a corridor. It was not presented as a classroom. The downloaded candidate is preserved as `docs/iiam-originals/iiam-students-campus.jpg`; [source](https://www.iiamedu.com/Images/Document/215wi-fi%20enabled%20campus.jpg).
- The counselling image shows a speaker at an event, not a private counselling meeting. Alt text and caption describe that actual subject.
- The classroom original is 6000 x 4000 and is preserved in `docs/iiam-originals/iiam-classroom.jpg`. A 1400 x 933 JPEG web copy is served. Only conventional resize/recompression was used; no AI transformation or invented visual content.
- Original Pexels assets were not overwritten, since other pages still reuse them.

## Requested sections without an appropriate replacement slot

| Requested section | Existing workspace finding | Decision |
| --- | --- | --- |
| Homepage hero/banner | CSS/search layout; no photograph | No new slot or redesign |
| About the college | About page text/cards, no photograph slot | No insertion; official About photo source identified below for future use |
| Campus/facilities | No dedicated facilities gallery | Corridor candidate kept as a candidate only |
| Classrooms/academic environment | Matching academic image slots on Counselling/Test Preparation | Updated, accurate classroom caption |
| Aviation training/mock aircraft | No aviation facility photo slot in current React app | Official candidates identified, not substituted into unrelated content |
| Hotel/hospitality training | No matching training photo slot | Official candidate identified, not forced into a generic service |
| Activities/industrial visits | No matching activity gallery in current app | Official Activities page inspected; no unrelated replacement |
| Faculty/staff | No verified named faculty-photo slot | No speaker identity invented |
| Placements/achievements | No matching placement-photo cards | Do not attach official student headshots to existing text testimonials |
| Contact | No photograph slot | Unchanged |

Official future candidates (not approved for a random section by mere availability):

- [About/campus image linked by official About page](https://www.iiamedu.com/assets/img/Home/college%20ground%20edited%202.jpg). Not downloaded/visually verified, so not asserted to be a building photograph.
- [Mock aircraft](https://www.iiamedu.com/Images/Document/7301MOCK-AIRCRAFT-min.jpg), [aviation practical](https://www.iiamedu.com/Images/Document/6710IMG_20220131_112235.jpg), [hotel training](https://www.iiamedu.com/Images/Document/5680HOTEL-TRAINING-min.jpg), [industrial visit](https://www.iiamedu.com/Images/Document/5402IMG_8143%202.jpg). These are links associated with those headings on the official homepage; no claim of visual verification or download is made for them.

## Generic imagery retained deliberately

Destination imagery in Home DestinationSection, DestinationsPage, CountryDetailPage, DestinationGuidePage, CountryUniversitySelection and university directories remains destination/institution-related. IIAM photographs would misrepresent those foreign locations. Local country images and their sources are documented in the prior discovery/destination guides.

Careers retains its explicitly illustrative professional workplace photo, not actual IIAM faculty/employees. Applications/Admission retains document/planning illustrations, and Scholarships, Education Loan, Visa Processing, Allied Services and Internship retain their existing relevant illustrative assets where the subject is not an IIAM course/facility. Their visible image slots are inventoried below. Pexels stock photos are not AI-generated; origin cannot be inferred from appearance alone. Stored SVG assets are original code-authored illustrations, not campus photographs; unused stored assets were not automatically treated as current page imagery.

## Image markup inventory

This covers all JSX image declarations found during the audit, including shared components and legacy components that may not currently be mounted. Dynamic sources resolve through the referenced data files. It is a source inventory, not a claim that every declaration is visible on the homepage.

| Component/location | Source expression | Alt expression |
| --- | --- | --- |
| `src/components/common/EnquiryModal.jsx:153` | `{`${import.meta.env.BASE_URL}` | `"Imperial Study Abroad"` |
| `src/components/counselling/CounsellingPrimitives.jsx:11` | `{`${import.meta.env.BASE_URL}` | `{photo.alt}` |
| `src/components/destinations/DestinationGuidePage.jsx:32` | `{guide.image}` | `{guide.imageAlt}` |
| `src/components/discovery/UniversityDirectory.jsx:55` | `{`${import.meta.env.BASE_URL}` | `{destination.alt}` |
| `src/components/home/DestinationSection.jsx:34` | `{dest.image}` | `{`Study in ${dest.name}` |
| `src/components/services/ServiceHero.jsx:24` | `{`${import.meta.env.BASE_URL}` | `{`Original illustration about ${service.name.toLowerCase()}` |
| `src/components/test-preparation/TestPreparationHero.jsx:38` | `{`${import.meta.env.BASE_URL}` | `{service.photo.alt}` |
| `src/pages/CareersPage.jsx:45` | `{`${import.meta.env.BASE_URL}` | `"Two professionals engaged in a thoughtful one-to-one discussion"` |
| `src/pages/CountryDetailPage.jsx:51` | `{country.image}` | `{country.name}` |
| `src/pages/DestinationsPage.jsx:73` | `{dest.image}` | `{`Study in ${dest.name}` |
| `src/pages/services/AlliedServicesPage.jsx:213` | `{`${import.meta.env.BASE_URL}` | `"A student talking with an adviser while planning for study abroad"` |
| `src/pages/services/AlliedServicesPage.jsx:292` | `{`${import.meta.env.BASE_URL}` | `"Sydney Harbour and city skyline as an example study destination"` |
| `src/pages/services/AlliedServicesPage.jsx:398` | `{`${import.meta.env.BASE_URL}` | `"A student getting ready for study in an international classroom"` |
| `src/pages/services/ApplicationsAdmission.jsx:173` | `{`${import.meta.env.BASE_URL}` | `"A student and adviser reviewing study documents together"` |
| `src/pages/services/ApplicationsAdmission.jsx:311` | `{`${import.meta.env.BASE_URL}` | `"A student working carefully at a laptop in a study space"` |
| `src/pages/services/ApplicationsAdmission.jsx:331` | `{`${import.meta.env.BASE_URL}` | `"A student discussing study plans with an adviser"` |
| `src/pages/services/CountryUniversitySelection.jsx:44` | `{`${import.meta.env.BASE_URL}` | `"Tower Bridge and the River Thames in London, an example study destination"` |
| `src/pages/services/CountryUniversitySelection.jsx:74` | `{`${import.meta.env.BASE_URL}` | `{destination.alt}` |
| `src/pages/services/EducationLoanPage.jsx:178` | `{`${import.meta.env.BASE_URL}` | `"A student and adviser reviewing study costs and documents"` |
| `src/pages/services/EducationLoanPage.jsx:261` | `{`${import.meta.env.BASE_URL}` | `"A student discussing education plans and funding questions with an adviser"` |
| `src/pages/services/InternshipPage.jsx:202` | `{`${import.meta.env.BASE_URL}` | `"A student developing digital skills at a laptop in a shared study space"` |
| `src/pages/services/InternshipPage.jsx:367` | `{`${import.meta.env.BASE_URL}` | `"A student discussing study and career plans with an adviser"` |
| `src/pages/services/ScholarshipsPage.jsx:234` | `{`${import.meta.env.BASE_URL}` | `"A student and adviser reviewing study plans and documents"` |
| `src/pages/services/ScholarshipsPage.jsx:353` | `{`${import.meta.env.BASE_URL}` | `"A student focused on study at a laptop"` |
| `src/pages/services/VisaProcessingPage.jsx:183` | `{`${import.meta.env.BASE_URL}` | `"A student discussing study plans and paperwork with an adviser"` |
| `src/pages/services/VisaProcessingPage.jsx:237` | `{`${import.meta.env.BASE_URL}` | `{destination.alt}` |
| `src/pages/services/VisaProcessingPage.jsx:322` | `{`${import.meta.env.BASE_URL}` | `"A student and adviser reviewing documents together"` |
| `src/pages/UniversitiesPage.jsx:183` | `{uni.image}` | `{uni.imageAlt // `Campus of ${uni.name}` |

## Files changed

- `src/data/counselling.js`: two image records, accurate local paths, dimensions, alt text and IIAM credits.
- `src/components/counselling/CounsellingPrimitives.jsx`: optional image path/dimensions/caption support; existing aspect ratios, object-fit, responsive classes and loading behaviour retained.
- `src/data/testPreparation.js`: hero image metadata and explicit classroom caption.
- `src/components/test-preparation/TestPreparationHero.jsx`: display supplied caption instead of hard-coded stock-photo wording.
- `scripts/verify-services.mjs`: resolve actual image metadata paths for Counselling asset checks.
- Two web assets under `public/images/iiam/`; original classroom and unused corridor candidate under `docs/iiam-originals/`.
- This audit file.

## Validation

Production build and targeted ESLint passed. Image files were visually inspected locally, and optimized classroom copy checked after resize. Scoped rendering checks for Counselling and Test Preparation pass with their local IIAM paths. The existing full verify-services script passes those two pages and discovery, then stops on an unrelated Applications/Admission anchor assertion. That page was not modified by this image-only task; no unrelated assertion or page content was rewritten to hide the failure.

No interactive browser/screenshot tool was available. Existing aspect-ratio/object-cover/position classes are unchanged, but final desktop/tablet/mobile crop appearance still needs visual checking at the actual site. The web build retains its pre-existing bundle-size advisory. No navigation, routes, buttons, forms or unrelated copy changed.
