# Phase 1: GlobalPath Counselling

Only Counselling was redesigned in this phase. The other eight service pages already existed before this request and were not edited, removed or extended.

## Reference findings

Source: https://www.studies-overseas.com/student-services/steps-to-study-abroad#1

Public text was accessible. It presents a broad study-abroad introduction and enquiry action, provider benefits, a Counselling heading with introductory copy and offerings, and counselling/enquiry links. Further down are a student journey, common questions and a closing counselling CTA. The anchor belongs to a larger multi-service page.

Exact image positions, CSS column proportions, mobile breakpoints, hover behaviour and viewport appearance could not be verified from the text browser. GlobalPath's layout is original, not presented as a reproduction.

## Original page structure

1. Navy split hero with gold emphasis, breadcrumb, two working anchor CTAs and an adviser/student stock photograph.
2. Numbered journey with a connected line and a distinct takeaway per step.
3. Alternating composition: portrait photograph left, icon-led benefits right.
4. Profile preparation section with a local interactive checklist and accessible progress indicator. It is not an eligibility score.
5. Native expandable FAQ answers.
6. Counselling CTA and existing validated enquiry-draft form. No backend requests, booking confirmation or invented success message.

Mobile stacks the hero and image/text compositions. Journey changes from one column to two at md, then four at xl. Typography, padding and gaps increase with sm/lg breakpoints. Browser screenshots and interactive viewport tests were not available; check 375px, 768px and desktop manually.

## Main files: Hinglish explanation

- `src/pages/services/CounsellingPage.jsx`: page ka assembly point. Components ko order mein render karta hai, aur useEffect se title/meta description set karke unmount par restore karta hai.
- `src/data/counselling.js`: sirf Counselling ka copy, journey, photo paths, checklist aur FAQs. Shared services metadata ko spread karke extend karta hai; dusre services ko mutate nahi karta.
- `src/components/counselling/`: hero, journey, benefits aur profile checklist alag components hain. Props se content milta hai. `.map()` repeated steps/checklist ko stable keys ke saath render karta hai.
- `CounsellingPrimitives.jsx`: common SectionHeading aur photo/credit markup reusable hai.
- `ProfileAssessment.jsx`: useState selected topics ko memory mein rakhta hai. Checkbox controlled hai: checked value state se aur onChange toggle function se aata hai. Data send ya persist nahi hota.
- `ServiceFAQ` aur `EnquiryCTA`: existing components reuse hue hain; shared implementations change nahi kiye.
- Tailwind: `grid lg:grid-cols-2` jaise classes desktop split aur mobile stack banate hain. Existing navy/gold theme tokens use hote hain. `sm:`/`lg:` breakpoint ke baad styles apply karte hain; theme/configuration unchanged hai.
- Images: Vite `import.meta.env.BASE_URL` prefix se local images subfolder deployment par bhi sahi URL use karti hain. Fixed aspect ratios image load ke dauran layout jump reduce karte hain; below-fold photo lazy loads.

## Image provenance

Downloaded locally on 28 October 2026; not reference-site assets. Photographs are illustrative and do not identify actual GlobalPath staff or students.

- `public/images/services/counselling-conversation.jpg`: Antoni Shkraba, https://www.pexels.com/photo/a-professor-talking-to-her-student-5306437/
- `public/images/services/counselling-planning.jpg`: Polina Tankilevitch, https://www.pexels.com/photo/teacher-discussing-her-lesson-with-her-student-6929182/
- License: https://www.pexels.com/license/ (free website use, no implied endorsement). Source credits are visible on the page.

## Preview and verification

Run `npm.cmd run dev` in `global-study-abroad`. Use the actual terminal port and open `http://localhost:5173/global-study-abroad/services/counselling`.

Check journey/enquiry anchors, destination link, FAQ keyboard toggles and checklist progress. Try empty/invalid form input and then valid data: it must create an unsent draft only. Reloading clears local state.

Automated checks: `npm.cmd run build`, targeted ESLint, and `node scripts/verify-services.mjs` (updated to verify the new Counselling section order, photos and FAQ count while checking existing routes for regressions).
