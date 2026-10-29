import { getService } from './services';
import { iiamPhotos } from './iiamPhotos';

// Phase 1 content stays separate so the other service pages are unaffected.
export const counselling = {
  ...getService('counselling'),
  title: 'Your ambitions. A world of possibilities. A clearer plan.',
  description: 'Explore courses, compare destinations and understand your next steps. Start with a thoughtful conversation about what matters to you.',
  cta: 'Your next chapter starts with a better question.',
  photos: {
    hero: { ...iiamPhotos.counselling, credit: 'Source: IIAM College' },
    planning: { ...iiamPhotos.interaction, credit: 'Source: IIAM College' },
  },
  steps: [
    { title: 'Start with you', description: 'Reflect on your interests, qualifications and the kind of future you want to explore.', takeaway: 'Your priorities, in your words' },
    { title: 'Explore the possibilities', description: 'Compare subjects and destinations through the lens of your goals, budget and preferred learning environment.', takeaway: 'A direction worth researching' },
    { title: 'Check the fit', description: 'Review published course prerequisites and identify questions about grades, language requirements or study gaps.', takeaway: 'A list of eligibility checks' },
    { title: 'Map the next steps', description: 'Bring course research, document preparation and application deadlines into one manageable plan.', takeaway: 'A practical action checklist' },
  ],
  benefits: [
    { icon: 'BookOpen', title: 'Discover a course that makes sense for you', description: 'Look beyond a course title. Explore modules, teaching styles and assessment to understand what you would actually study.' },
    { icon: 'Globe2', title: 'Compare destinations with perspective', description: 'Consider your preferred setting, total study costs and support needs alongside academic opportunities.' },
    { icon: 'ListChecks', title: 'Turn uncertainty into useful next steps', description: 'Identify what you already know, what needs checking and which application tasks deserve your attention first.' },
  ],
  profile: [
    { title: 'Academic background', description: 'A summary of your qualifications, subjects and any relevant experience.' },
    { title: 'Course interests', description: 'Topics you enjoy, courses you are curious about and questions you want to explore.' },
    { title: 'Budget and destination', description: 'A working budget and the places or learning environments you would like to compare.' },
    { title: 'Timing and preparation', description: 'Your preferred start period, available test results and any documents still to gather.' },
  ],
  faqs: [
    { question: 'Can I start if I have not chosen a country or course?', answer: 'Yes. Start with your interests and constraints. A useful first conversation can be about narrowing the questions you need to research rather than selecting a university immediately.' },
    { question: 'How can counselling help me explore my eligibility?', answer: 'It can help you identify the qualifications, subject prerequisites and language requirements to check on official course pages. Only the institution can confirm how it will assess your application.' },
    { question: 'What should I prepare before a counselling conversation?', answer: 'Bring a brief academic summary, your interests, a working budget and a few questions. The profile checklist on this page can help you organise those notes. Do not share identity or financial documents through this form.' },
    { question: 'Can counselling help with an application plan?', answer: 'A planning discussion can help break research, document preparation and deadlines into smaller tasks. Confirm requirements and submission dates directly with each institution.' },
    { question: 'Does counselling guarantee admission or a visa?', answer: 'No. Admission decisions belong to institutions and visa decisions belong to the relevant authorities. No outcome is guaranteed on this website.' },
    { question: 'Will the enquiry form book a real session?', answer: 'No. In this phase the form only prepares an unsent draft on your screen. It does not contact GlobalPath, reserve a time or confirm service availability or fees.' },
  ],
};
