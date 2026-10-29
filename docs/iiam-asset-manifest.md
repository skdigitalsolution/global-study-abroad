# IIAM authentic imagery: asset manifest and implementation report

Reviewed and implemented: **29 October 2026**. Existing GlobalPath React/Vite project only.

## Permission and sourcing

The user explicitly confirmed that they have permission to reuse official IIAM photographs on GlobalPath. That confirmation continues to cover this requested expansion. No additional permission confirmation is pending for the included photos; none is claimed to have an open/public licence. No third-party branding was downloaded as a replacement for the existing site logos.

Inspected the [IIAM homepage](https://www.iiamedu.com/), [Activities](https://www.iiamedu.com/Activity_Main.aspx) and [Placement](https://www.iiamedu.com/Placement.aspx). Links below were exposed by those pages, not guessed. The web reader could inspect text and image links but returned cache misses for the image files. Ordinary direct downloads succeeded through the approved network permission flow. Every included source photo was visually inspected before assignment.

Official photos are attributed to IIAM. Captions describe what is actually visible and the collection context, without inventing names, dates, batches, facilities or outcomes. The placement page was reviewed but its portraits/outcome claims were not repurposed as GlobalPath testimonials or proof of interview training.

## Current asset manifest

Paths below are relative to `public/images/iiam/`. Exact runtime paths, dimensions, alt text, captions, page sources and original URLs are centralized in `src/data/iiamPhotos.js`.

| Local web asset | Dimensions; bytes | Source page / original image | Verified subject and current use |
| --- | --- | --- | --- |
| `iiam-career-counselling.jpg` | 640 x 488; 38,813 | [Home](https://www.iiamedu.com/) / [image](https://www.iiamedu.com/Images/Document/3342CAREER-COUNSELLING-SESSION-min.jpg) | Speaker holding a microphone; Counselling hero. Existing downloaded asset reused. No one-to-one counselling claim. |
| `iiam-classroom-web.jpg` | 1400 x 933; 160,653 | [Home](https://www.iiamedu.com/) / [image](https://www.iiamedu.com/Images/Document/3305DSC00739.JPG) | Students at classroom desks with teacher; Test Preparation hero. Existing optimized asset reused. Not a specific exam batch. |
| `iiam-communication-session-web.jpg` | 1400 x 790; 156,836 | [Home](https://www.iiamedu.com/) / [image](https://www.iiamedu.com/Images/Document/6941Communication%20skills.jpg) | Group discussion in a classroom with teacher/classmates observing; Counselling benefits image. Identified as a classroom discussion rather than a private consultation. |
| `iiam-students-campus-web.jpg` | 1050 x 1400; 255,996 | [Home](https://www.iiamedu.com/) / [image](https://www.iiamedu.com/Images/Document/215wi-fi%20enabled%20campus.jpg) | Three uniformed students together in a corridor; About student-environment split section. Existing original reused, not downloaded again. Official source heading mentions classrooms, but the picture is accurately described as a corridor. |
| `iiam-mock-aircraft-web.jpg` | 1400 x 933; 126,371 | [Home](https://www.iiamedu.com/) / [image](https://www.iiamedu.com/Images/Document/7301MOCK-AIRCRAFT-min.jpg) | Blue seats and aisle in mock-aircraft cabin; About aviation/hospitality tab. Not an operating aircraft or airline partnership. |
| `iiam-aviation-practical-web.jpg` | 1400 x 788; 149,424 | [Home](https://www.iiamedu.com/) / [image](https://www.iiamedu.com/Images/Document/6710IMG_20220131_112235.jpg) | Uniformed students seated in mock cabin; About aviation/hospitality tab. No specific practical task, certification or employment outcome inferred. |
| `iiam-hotel-training-web.jpg` | 404 x 303; 20,076 | [Home](https://www.iiamedu.com/) / [image](https://www.iiamedu.com/Images/Document/5680HOTEL-TRAINING-min.jpg) | Students gathered with instructor beside covered tables; About aviation/hospitality supporting image. Small original retained without artificial enlargement. No hotel identity invented. |
| `iiam-industrial-visit-web.jpg` | 1400 x 1050; 464,923 | [Activities](https://www.iiamedu.com/Activity_Main.aspx) / [image](https://www.iiamedu.com/Activity/1660indust1.JPG) | College group/banner outside visible Verka dairy entrance; About student-life gallery. No partnership or visit date invented. |
| `iiam-student-activity-web.jpg` | 1280 x 960; 81,880 | [Activities](https://www.iiamedu.com/Activity_Main.aspx) / [image](https://www.iiamedu.com/Activity/2160curricular1.jpg) | Student debate with visible Debate Competition slide; About student-life gallery. |
| `iiam-annual-day-web.jpg` | 1280 x 853; 173,591 | [Activities](https://www.iiamedu.com/Activity_Main.aspx) / [image](https://www.iiamedu.com/Activity/4057annualday1.jpeg) | Group on decorated stage with IIAM event banner; About student-life gallery. Official gallery category used, no identities, award or event year asserted. |

Ten distinct web assets are used across the three updated pages; none is repeated between those pages. Eight web copies were added in this expansion, including the corridor image made from an already downloaded original. Existing classroom and counselling assets were reused unchanged.

### Originals and optimization

- Original downloads remain in `docs/iiam-originals/`. New source filenames match the web filenames without `-web`; the existing classroom original is `iiam-classroom.jpg`, and the existing corridor original is `iiam-students-campus.jpg`.
- The existing counselling web JPEG is also the downloaded source copy; it was not fetched a second time.
- New images larger than 1400 pixels on their longest edge were proportionally resized with System.Drawing, bicubic interpolation and JPEG quality 84. No source was enlarged, stretched or AI transformed.
- Small originals (hotel, debate, annual event) were copied without extra recompression. The hotel display additionally caps the image at 404 x 303 pixels inside the consistent grid frame.
- The current public IIAM folder is approximately 1.63 MB across all ten assets. Only the relevant page images load; below-fold photos are lazy-loaded. The industrial visit is the largest new web copy at approximately 465 KB.
- Large originals and rejected candidates stay outside `public/`, so Vite does not automatically publish them as web assets.

### Rejected candidate

`docs/iiam-originals/iiam-interview-workshop.jpg` came from [this homepage image](https://www.iiamedu.com/Images/Document/1630tactics.jpg), associated with Interview Tactic Workshops. Visual inspection showed a generic office meeting, without sufficient IIAM-specific evidence of a real placement/interview session. It is preserved for provenance but **not used or copied into public assets**. No verified placement-preparation photograph was established in this review. No replacement testimonial, student identity, employer outcome or placement section was fabricated.

## Pages and presentation changes

### About: `/global-study-abroad/about`

- Added one student-environment split section immediately after the existing introduction. It uses the verified corridor photo, editorial spacing, navy/gold typography and a functional anchor to the activity gallery.
- Added three practical-learning photographs inside the existing **IIAM Aviation & Management** tab: mock cabin, students in the cabin, and a hotel-training briefing. The tab keeps its current route and state behavior.
- Added a compact three-photo student-life gallery on the same About route: industrial visit, debate and Annual Day. No duplicate campus/activity route was created.
- Photo grids share a 4:3 frame; captions and official-source links remain visible. The hotel image uses contain/capped dimensions instead of stretching a small source.
- Stacked the existing institute-tab buttons on narrow screens to avoid forcing two long labels onto one row.
- Existing institutional text, specializations, contact details, logos and CTA targets were preserved. Five pre-existing unused imports were removed so the touched About component passes lint; behavior is unchanged by that cleanup.

This is the smallest addition within the existing About context that accommodates the requested training and student-life material. It does not make the photographs evidence for every inherited claim elsewhere on About.

### Counselling: `/global-study-abroad/services/counselling`

- Preserved the real career-event speaker hero photograph.
- Replaced the previously repeated classroom photograph in the benefits section with the distinct communication/classroom-discussion photo.
- Used landscape framing suited to the source instead of a tight portrait crop.
- Moved the existing hero text panel below the photograph/caption rather than overlapping them. No faces or source credits are intentionally hidden by that panel.

### Test Preparation: `/global-study-abroad/services/test-preparation`

- Reused the authentic classroom asset with a 3:2 display matching its natural ratio, showing more of the academic environment.
- Kept the explicit disclosure that the classroom is not evidence of an available exam-preparation batch.
- Retained exam controls, preparation steps, FAQs and all CTA targets.

### Other routes

Reviewed existing route/component structure and the prior image inventory. Foreign destinations and international-university photographs remain unchanged. Careers remains explicitly illustrative rather than presenting students as GlobalPath employees. Existing generic service illustrations were not replaced with unrelated aviation/hotel photos. Home has no photographic hero slot; Contact has no suitable photo slot. No forms, navigation data, route registrations or directory datasets were changed.

## New and modified files

New source files:

- `src/data/iiamPhotos.js`: canonical photo metadata and original/source URLs.
- `src/components/common/IIAMPhoto.jsx`: local image path, dimensions, alt text, loading, frame and credit handling.
- `src/components/about/IIAMImageSections.jsx`: student-environment split, practical-photo section and student-life gallery.
- `scripts/verify-iiam-images.mjs`: local JPEG and source metadata checks plus static rendering/asset-path checks.
- `docs/iiam-asset-manifest.md`: this manifest/report.

Modified source files:

- `src/pages/AboutPage.jsx`.
- `src/data/counselling.js`.
- `src/components/counselling/CounsellingPrimitives.jsx`.
- `src/components/counselling/CounsellingHero.jsx`.
- `src/data/testPreparation.js`.
- `src/components/test-preparation/TestPreparationHero.jsx`.
- `docs/iiam-image-audit.md`: marks the previous audit as historical and links this expansion.
- `docs/website-workflow-and-technology-guide.md`: current imagery, component and verification references.

Assets:

- Eight new web JPEGs under `public/images/iiam/` (see manifest).
- Eight newly downloaded original candidates under `docs/iiam-originals/`, including the rejected interview image. The prior classroom/corridor originals were preserved.
- No new package or dependency, routing system or backend.

## Validation and limits

- `npm.cmd run build`: passed; existing large-JavaScript-chunk advisory remains.
- Targeted ESLint over all touched JS/JSX and the new verification script: passed.
- `node scripts/verify-iiam-images.mjs`: passed for About, Counselling, Test Preparation and the separately rendered aviation photo section; ten distinct local JPEG paths, dimensions metadata, official-source hostnames and source credits checked.
- All ten public images decoded successfully with System.Drawing; decoded dimensions match metadata. Original photos were visually reviewed, along with representative optimized output copies.
- Existing `node scripts/verify-services.mjs`: Counselling, Test Preparation and Country/University Selection pass, then the same pre-existing Applications/Admission anchor assertion fails at line 30. No unrelated assertions or page logic were changed to conceal it.
- No interactive browser/viewport preview tool was available. Responsive classes and object-fit/frame logic were inspected in source, not visually certified across screen sizes. The new aviation section was rendered independently in the smoke test because its parent tab is client state; an actual tab click was not simulated.

Manual follow-up: run the dev server, visit About at 375px/768px/desktop, inspect the split/gallery, click **IIAM Aviation & Management**, and check all three training photos. Then inspect Counselling and Test Preparation hero crops and credits. Check the small hotel source for acceptable sharpness; obtain a higher-resolution approved original if it must be used at larger sizes. Publication still requires review of unrelated inherited institutional claims and old content, rather than treating the photographs as their verification.
