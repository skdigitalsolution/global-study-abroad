import { getService } from './services';
import { iiamPhotos } from './iiamPhotos';

// Keep Phase 2 content independent of the other service pages.
export const testPreparation = {
  ...getService('test-preparation'),
  description: 'Choose your exam with context, build a realistic study routine and make every practice session count.',
  photo: {
    ...iiamPhotos.classroom,
    file: iiamPhotos.classroom.path,
    caption: 'IIAM classroom photograph; not a claim of an available test-preparation batch.',
    credit: 'Source: IIAM College',
    source: 'https://www.iiamedu.com/',
  },
  faqs: [
    {
      question: 'How do I know which exam to prepare for?',
      answer: 'Start with the official admissions pages of your shortlisted programmes. Record the accepted test, required version, minimum overall and component scores, and any exemptions. Requirements depend on the university, programme and destination.',
    },
    {
      question: 'Is an English proficiency test the same as an academic admission test?',
      answer: 'No. English proficiency tests assess language skills. Academic admission tests assess other skills relevant to an application. A programme may require one, both or neither; do not assume one replaces the other.',
    },
    {
      question: 'Does GlobalPath run official exams or confirmed coaching batches?',
      answer: 'No official exam administration, authorised test-centre status or live coaching schedule is claimed here. This page is a preparation guide. Confirm any support availability and fees separately before committing.',
    },
    {
      question: 'How long should my preparation plan be?',
      answer: 'That depends on your starting point, the skills you need to develop and the time you can consistently spend studying. Use a diagnostic exercise to set priorities, then adjust your plan as you review your work.',
    },
    {
      question: 'Can a preparation plan guarantee my target score?',
      answer: 'No. A plan helps you use your study time deliberately, but no score or admission outcome is guaranteed. Review patterns in your practice rather than relying on one good attempt.',
    },
    {
      question: 'Where should I check test fees, formats and booking details?',
      answer: 'Follow the official provider link in each exam card. Check current information with that provider and confirm your institution accepts the test before booking. GlobalPath does not collect exam fees or registrations on this page.',
    },
  ],
};

export const examCategories = [
  {
    id: 'english',
    name: 'English proficiency',
    description: 'Explore language tests in the context of your chosen programme. Check the exact test version and score requirements before deciding.',
    icon: 'Languages',
  },
  {
    id: 'admission',
    name: 'Academic admission tests',
    description: 'Explore tests that may form part of an undergraduate or graduate application. Requirements and test-optional policies vary by programme.',
    icon: 'GraduationCap',
  },
];

export const exams = [
  {
    id: 'ielts', name: 'IELTS', category: 'english', context: 'Explore IELTS Academic',
    description: 'Build familiarity with academic English tasks and a balanced language-practice routine.',
    focus: ['Listening and reading practice', 'Clear, structured writing', 'Spoken responses and self-review'],
    question: 'Which IELTS test type does my programme accept?',
    officialUrl: 'https://ielts.org/take-a-test/test-types/ielts-academic-test',
  },
  {
    id: 'toefl', name: 'TOEFL', category: 'english', context: 'Explore TOEFL iBT',
    description: 'Approach academic language practice with focused exercises and a record of what needs work.',
    focus: ['Understanding academic language', 'Organising written and spoken ideas', 'Using official practice to identify gaps'],
    question: 'Which TOEFL version and scores does my institution require?',
    officialUrl: 'https://www.ets.org/toefl.html',
  },
  {
    id: 'pte', name: 'PTE', category: 'english', context: 'Explore PTE Academic',
    description: 'Get comfortable with computer-based English practice while improving clarity and consistency.',
    focus: ['Working with on-screen prompts', 'Listening and responding carefully', 'Reviewing accuracy and communication'],
    question: 'Is PTE Academic accepted for my intended course and destination?',
    officialUrl: 'https://www.pearsonpte.com/pte-academic/',
  },
  {
    id: 'gre', name: 'GRE', category: 'admission', context: 'Graduate study research',
    description: 'Explore whether a GRE requirement fits your graduate application before investing in preparation.',
    focus: ['Verbal reasoning practice', 'Quantitative problem-solving', 'Analytical writing and review'],
    question: 'Does my programme request the General Test, a Subject Test or no GRE?',
    officialUrl: 'https://www.ets.org/gre.html',
  },
  {
    id: 'gmat', name: 'GMAT', category: 'admission', context: 'Graduate business study research',
    description: 'Investigate business-school requirements and plan practice around reasoning and interpretation.',
    focus: ['Quantitative reasoning', 'Verbal reasoning', 'Interpreting and evaluating data'],
    question: 'What is the current test policy for my chosen business programme?',
    officialUrl: 'https://www.mba.com/exams/gmat-exam',
  },
  {
    id: 'sat', name: 'SAT', category: 'admission', context: 'Undergraduate study research',
    description: 'Check undergraduate testing policies, then prepare with a purposeful reading, writing and maths routine.',
    focus: ['Reading closely and using evidence', 'Writing and language practice', 'Mathematical reasoning and review'],
    question: 'Is an SAT result required, optional or considered by my university?',
    officialUrl: 'https://satsuite.collegeboard.org/sat',
  },
];

export const preparationSteps = [
  { title: 'Assess your starting point', label: 'Find your baseline', description: 'Try an official sample exercise. Note the tasks that feel comfortable and the ones that need a closer look.' },
  { title: 'Design a realistic plan', label: 'Make space to study', description: 'Choose specific study goals and a repeatable schedule that fits your commitments. Keep time for revision.' },
  { title: 'Practise with intention', label: 'Work on the right things', description: 'Combine focused skill exercises with timed practice. Keep a log of mistakes and the reasoning behind them.' },
  { title: 'Review and recalibrate', label: 'Let evidence guide you', description: 'Look for recurring gaps, revisit difficult concepts and adjust the next week of practice. Readiness develops over time.' },
];
