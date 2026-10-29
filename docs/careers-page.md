# GlobalPath Careers

URL: `/global-study-abroad/careers`. Run `npm.cmd run dev`, then use the actual terminal port, for example `http://localhost:5173/global-study-abroad/careers`.

## Reference and scope

The public text at https://www.studies-overseas.com/careers was inspected on 29 October 2026. Its observable hierarchy includes company introduction/history, candidate profile, values, perks/culture, and openings with location/department controls. Exact photo placement and mobile rendering could not be inspected in the text browser. Only the broad hierarchy informed this original GlobalPath page; reference branding, statistics, employee claims and benefit promises were not copied.

Only Careers and its navigation connections were implemented. Existing routes, shared header/footer structure, Tailwind theme, Vite base and dependencies were retained.

## Files

- Created `src/pages/CareersPage.jsx`: all nine requested sections, breadcrumb, title/description metadata, local professional photograph, honest cultural aspirations and working CTA links.
- Created `src/components/careers/CareerOpportunities.jsx`: shared listing UI, keyword search, department/location/employment-type filters, reset and empty states. Uses existing Button and SectionTitle components.
- Created `src/data/careers.js`: empty confirmed jobs array, separately labelled sample data and pure filtering function.
- Modified `src/App.jsx`: `/careers` route inside the existing BrowserRouter/base path.
- Modified `src/data/navigationData.js`: Company > Careers link; desktop/mobile navigation consume this same data.
- Modified `src/components/common/Footer.jsx`: Careers link in the existing explore list.
- Created this guide.

## Jobs and application behaviour

Project inspection found no confirmed vacancies or hiring API. The internship page's illustrative listings are not employee vacancies and were not reused as real jobs. `jobs` is empty, so the default state is **No current openings listed**. This does not claim the company has no vacancies elsewhere; none have been supplied to the website.

The opt-in sample preview starts disabled. It shows three explicitly fictional roles, locations and employment types for development. Each card says it is not a vacancy. Sample Apply Now opens the existing Contact page only, not an application endpoint. Changing preview mode resets filters. No fake application, upload, email or submission success exists.

The required Send Your Resume CTA also goes to `/contact`, with an explanation to ask how resumes can be shared. The existing contact form has no delivery backend; this limitation is disclosed on Careers. No hiring inbox or company email was invented. Hero and closing Explore Open Positions links point to `#open-positions`.

## Beginner-friendly implementation notes

`jobs` array mein sirf confirmed vacancy add karo: unique id, title, department, location, employmentType, description aur approved applicationUrl. Internal routes use React Router Link; HTTPS application destinations use normal links. Missing destination falls back to Contact Us.

`useState` keyword aur three filter selections rakhta hai. `.filter()` active conditions ko AND se combine karta hai; `.includes()` case-insensitive partial keyword matching karta hai. Dropdown options current dataset se bante hain. Empty live dataset mein only All choices hain; labelled sample preview mein every control test kar sakte ho.

Tailwind base styles mobile ke liye hain. `sm:grid-cols-2`, `lg:grid-cols-4` aur `xl:grid-cols-3` wider screens par columns add karte hain. Hero mobile par stacks; text/images use flexible widths. Existing navy/gold tokens, font stack and common components keep the brand consistent.

## Imagery and company claims

Reused local `public/images/services/counselling-conversation.jpg`, an illustrative professional conversation photographed by Antoni Shkraba: https://www.pexels.com/photo/a-professor-talking-to-her-student-5306437/. License: https://www.pexels.com/license/. It is not presented as actual GlobalPath staff or an employee endorsement; credit and disclosure appear under the photo.

The culture sections describe aspirations. No employee testimonials, office counts, years of operation, partnerships, salary, insurance, bonus, leave or working-arrangement benefits are asserted.

Still needed from the company: approved vacancies/descriptions, real locations and employment terms, confirmed application destinations/hiring contact, approved hiring process, and any verified benefits or employee stories it wants published.

## Checks

Production build and targeted ESLint passed. Automated checks covered route registration, navigation data, hero image/base path, default empty rendering, CTA targets, each filter, keyword case/whitespace, combined filters, no-match and reset baseline. The existing bundle-size advisory remains; it is not a build failure.

Manual browser follow-up: at desktop/tablet/375px widths, check menu > Company > Careers, heading wrapping, filter grid and keyboard navigation. Enable sample preview; try Operations + Demo office A (no match), then reset. Confirm all sample applications lead only to Contact Us. No interactive browser/screenshot tool was available, so viewport appearance and actual DOM click/focus behaviour have not been visually verified.
