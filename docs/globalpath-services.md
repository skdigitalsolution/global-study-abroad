# GlobalPath services ? project guide

Existing React + Vite project hi extend kiya gaya hai. Tailwind theme aur Vite base `/global-study-abroad/` preserve hain. Koi new dependency add nahi hui.

## Files ka role

- `src/data/services.js`: nine services ka original English copy, slug, title, benefits, process, FAQs, illustration path aur layout variant. Content change karna ho to pehle yahan dekho.
- `src/pages/services/`: har route ka separate page component. Ye apni metadata shared layout ko pass karta hai; page-specific sections future mein yahan add kar sakte ho.
- `src/components/services/`: ServiceHero, ServiceBenefits, ServiceFocus, ProcessSteps, ServiceFAQ, EnquiryCTA aur ServicePageLayout. Hero direction, card layout aur section order `variant` se change hote hain.
- `src/data/navigationData.js`: Services dropdown metadata se generate hota hai. New service add karte waqt route aur page bhi add karna hai.
- `src/components/common/NavigationItems.jsx`: desktop/mobile ke shared links; native details/summary keyboard interaction, outside-click close aur Escape support.
- `src/components/common/MobileMenu.jsx`: mobile drawer, focus trap, focus return aur scroll lock.
- `src/components/common/Footer.jsx`: GlobalPath footer, nine services aur existing working site routes.
- `src/App.jsx`: all nine explicit routes; existing home, destinations, universities, about, contact and booking routes preserved. Auto-opening legacy enquiry modal is replaced by a link to the truthful enquiry draft form.
- `public/images/services/`: nine original hand-authored SVG illustrations; external photo hosts par dependency nahi hai. All SVGs created for this project; no reference brand assets used.

## Form behaviour

Naya enquiry form name, email, optional phone, question aur acknowledgement validate karta hai. Submit par sirf screen par draft banta hai, clipboard copy optional hai. Koi network request, database save, booking, email delivery ya fake reference ID nahi hota. Route change par draft clear hota hai. Existing booking/contact/newsletter forms ke simulated success handlers bhi remove kiye hain; valid input par honestly batate hain ki submission connected nahi hai. Existing contact details are retained from the project, not independently verified as GlobalPath contacts.

Real sending ke liye future mein backend endpoint, server validation, storage/privacy policy aur delivery handling implement karna hoga. Success sirf confirmed backend response ke baad show karna.

## Verify kaise karein

1. `npm.cmd run dev` (PowerShell execution policy npm.ps1 block kare to npm.cmd use karo).
2. Terminal ka actual URL open karo, e.g. `http://localhost:5173/global-study-abroad/services/counselling`.
3. Services dropdown se nine pages kholo. Direct reload bhi check karo. Production hosting ko SPA fallback chahiye; GitHub Pages jaise static hosts par deep-link rewrites separately configure karne honge.
4. Keyboard se Tab, Enter/Space aur Escape check karo. Mobile width (375px/768px) par menu open/close, focus trapping aur page overflow check karo.
5. FAQ expand karo. Enquiry form mein empty fields, invalid email, short phone/message aur valid data try karo. Valid data se unsent draft banta hai; success submission nahi dikhna chahiye.
6. `npm.cmd run build` aur `node scripts/verify-services.mjs` run karo.

Automated validation: production build, targeted ESLint, nine-page server rendering, route/navigation matching, local asset existence and SVG XML validity. Browser screenshots and interactive end-to-end form/keyboard checks were not available in this session, so the manual steps above remain useful.

## Scope

Existing home/destination/university/about page content is retained, including legacy Imperial branding and sample data within those pages. Shared navigation/footer and all newly built service pages use GlobalPath. Do not treat inherited statistics, university sample entries, testimonials or old institutional statements as verified GlobalPath claims; audit these before publishing a full-site rebrand. New service pages avoid these claims, and explicitly distinguish planning guides from unverified service availability.
