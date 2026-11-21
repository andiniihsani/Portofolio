export interface MetricItem {
  id: string;
  value: string;
  label: string;
  accent: 'blush' | 'sand';
  icon: 'star' | 'building' | 'users' | 'badge';
}

export interface FocusArea {
  id: string;
  index: string;
  kicker: string;
  titleLines: [string, string];
  summary: string;
  theme: 'blush' | 'sage';
  icon: 'database' | 'palette' | 'globe' | 'clipboard';
  competencies: string[];
  coursework: string[];
  deliverableExample: string;
}

export interface ProjectItem {
  id: string;
  category: 'web' | 'infographics' | 'systems';
  year: string;
  type: string;
  tools: string;
  title: string;
  summary: string;
  highlights: { label: string; detail: string }[];
  liveUrl?: string;
  isFeatured?: boolean;
}

export interface ToolItem {
  id: string;
  badgeText: string;
  name: string;
  category: string;
  level: string;
  description: string;
  bgClass: string;
  textClass: string;
}

export interface EducationItem {
  id: string;
  number: string;
  institution: string;
  period: string;
  roleOrDegree: string;
  description: string;
  tone: 'blush' | 'sand' | 'sage';
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  category: string;
  role: string;
  organization: string;
  summary: string;
  metricLabel: string;
  metricValue: string;
  tone: 'terracotta' | 'olive';
  responsibilities: string[];
}

export const PORTRAIT_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuACLkHIW9DDx-K--g-wCTV53GFcE2S7sg1zYyGdutKQ62OB9SAnmVMfqFX-ualvmBqor-Vun9ZYGXp0Zao_wzg9Uuz2jyi7nI1S1fKtniOGf2xL7ZW64Rn7m8efoTqzoJBiKxeZdthA6dZf5y3aNgXLo3GlhXsCJm1W-nWy_-blctjqrEF4X0nnzdqagJ1m0dfWYhQTXLZBKSoQasZvtdNQ6pa9KgjhPYoz9p9-LuVSDCMoaCW3EW02';

export const PROFILE = {
  monogram: 'AP',
  fullName: 'Andini Putri Ihsani',
  eyebrow: "HI, I'M ANDINI PUTRI IHSANI",
  headlineTop: 'INFORMATION',
  headlineBottom: 'SYSTEMS STUDENT',
  institution: 'Institut Teknologi PLN',
  location: 'Jakarta Barat, Indonesia',
  locationShort: 'JAKARTA, INDONESIA',
  email: 'andiniputriihsani@gmail.com',
  phoneDisplay: '+62 877-2000-1106',
  whatsappUrl: 'https://wa.me/6287720001106',
  wixUrl: 'https://andiniputriihsani.wixsite.com/andinipi',
  quote:
    'Bridging structured logic, database thinking, and aesthetically intentional human interfaces.',
};

export const METRICS: MetricItem[] = [
  {
    id: 'gpa',
    value: '95.84',
    label: 'High School GPA (SMAN 1)',
    accent: 'blush',
    icon: 'star',
  },
  {
    id: 'scholar',
    value: '2026',
    label: 'ITPLN Ikatan Kerja Scholar',
    accent: 'sand',
    icon: 'building',
  },
  {
    id: 'leadership',
    value: '3+',
    label: 'Leadership & Committee Roles',
    accent: 'blush',
    icon: 'users',
  },
  {
    id: 'dedication',
    value: '100%',
    label: 'Dedication to Digital Growth',
    accent: 'sand',
    icon: 'badge',
  },
];

export const FOCUS_AREAS: FocusArea[] = [
  {
    id: 'information-systems',
    index: '01',
    kicker: 'Logic',
    titleLines: ['INFORMATION', 'SYSTEMS'],
    summary:
      'Cultivating fundamental competencies in structured C++ programming, relational database schemas, algorithm design, and enterprise information pipelines.',
    theme: 'blush',
    icon: 'database',
    competencies: [
      'Structured C++ algorithmic problem solving',
      'Entity-Relationship Modeling & normalization basics',
      'Information lifecycle & organizational process mapping',
    ],
    coursework: [
      'Algorithms & Programming (C++)',
      'Introduction to Information Systems',
      'Discrete Mathematics & Logic',
    ],
    deliverableExample:
      'Academic logic modules & structured command-line utilities designed for clean data validation.',
  },
  {
    id: 'ui-ux-infographics',
    index: '02',
    kicker: 'Visual',
    titleLines: ['UI/UX &', 'INFOGRAPHICS'],
    summary:
      'Crafting visual summaries, editorial infographics, and responsive mockups. Distilling complex academic and technical ideas into harmonious visuals.',
    theme: 'sage',
    icon: 'palette',
    competencies: [
      'Editorial layout & typographic hierarchy',
      'Information synthesis into scannable infographics',
      'Accessible warm-neutral color calibration',
    ],
    coursework: [
      'Visual Communication & Presentation Design',
      'Article-to-Infographic Synthesis',
      'User Empathy & Content Flow',
    ],
    deliverableExample:
      'Multi-part infographic series translating cloud database ecosystems for student readers.',
  },
  {
    id: 'web-development',
    index: '03',
    kicker: 'Architecture',
    titleLines: ['WEB', 'DEVELOPMENT'],
    summary:
      'Designing modern web portals, cloud-hosted portfolios, and interactive web elements with semantic architecture and mobile-first responsiveness.',
    theme: 'blush',
    icon: 'globe',
    competencies: [
      'Cloud portfolio publishing & domain structure',
      'Responsive grid layout across desktop & mobile',
      'Version control workflows with GitHub',
    ],
    coursework: [
      'Personal Portfolio Web Architecture',
      'Digital Publishing & Multimedia Integration',
      'Foundational HTML/CSS Structure',
    ],
    deliverableExample:
      'Live Wix Studio personal hub featuring structured essay navigation and responsive reading views.',
  },
  {
    id: 'admin-event-ops',
    index: '04',
    kicker: 'Operations',
    titleLines: ['ADMIN & EVENT', 'OPERATIONS'],
    summary:
      'Proven track record in fiscal administration, cashflow accountability, formal documentation, and end-to-end event rundowns across community programs.',
    theme: 'sage',
    icon: 'clipboard',
    competencies: [
      'Budget planning & transparent cashflow reconciliation',
      'Official correspondence, proposals, and minutes',
      'Cross-division rundown scheduling & logistics',
    ],
    coursework: [
      'Financial Ledger Management (MS Excel)',
      'Formal Secretarial Protocols (MS Word)',
      'Community Committee Leadership',
    ],
    deliverableExample:
      'Zero-discrepancy financial accountability reports and multi-day community event rundowns.',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'wix-portfolio',
    category: 'web',
    year: '2026',
    type: 'Personal Work',
    tools: 'Wix & Canva',
    title: 'Personal Website & Article-Based Infographics',
    summary:
      'A personal web portal showcasing original informational article writing, infographics creation, and multimedia portfolio elements. Engineered with custom visual hierarchy, accessible typography, and intuitive navigation.',
    highlights: [
      {
        label: 'Information Architecture',
        detail: 'Clear categorisation for essays, student bio, and creative deliverables.',
      },
      {
        label: 'Infographic Synthesis',
        detail: 'Visual breakdowns of complex academic topics designed for quick retention.',
      },
      {
        label: 'Color Harmony',
        detail: 'Thoughtfully calibrated soft neutral aesthetics that maximize legibility.',
      },
    ],
    liveUrl: 'https://andiniputriihsani.wixsite.com/andinipi',
    isFeatured: true,
  },
  {
    id: 'digital-ecosystems-infographic',
    category: 'infographics',
    year: '2026',
    type: 'Editorial Visual',
    tools: 'Canva & Research Writing',
    title: 'Digital Ecosystems & Cloud Data Infographic Series',
    summary:
      'Visual research digest distilling foundational cloud storage concepts, client-server flows, and everyday digital literacy into concise graphic panels for undergraduate peers.',
    highlights: [
      {
        label: 'Visual Hierarchy',
        detail: 'Structured 3-step reading flow guiding readers from core concept to real-world use.',
      },
      {
        label: 'Editorial Typography',
        detail: 'Paired serif headlines with high-clarity sans-serif annotations.',
      },
    ],
    liveUrl: 'https://andiniputriihsani.wixsite.com/andinipi',
  },
  {
    id: 'cpp-student-records',
    category: 'systems',
    year: '2026',
    type: 'Academic Lab',
    tools: 'C++ & GitHub',
    title: 'Structured Student Ledger & Logic Exercises',
    summary:
      'First-semester programming exercises implementing modular functions, array-based sorting, and input validation in C++ to model simple administrative record lookups.',
    highlights: [
      {
        label: 'Modular Logic',
        detail: 'Clean separation of data entry, validation, and formatted terminal summary output.',
      },
      {
        label: 'Version Tracking',
        detail: 'Incremental commits and readable documentation maintained on GitHub.',
      },
    ],
  },
  {
    id: 'committee-ops-ledger',
    category: 'systems',
    year: '2025',
    type: 'Operations Toolkit',
    tools: 'MS Excel & MS Word',
    title: 'Committee Cashflow Ledger & Event Rundown System',
    summary:
      'Standardized spreadsheet ledger and formal correspondence pack built for Karang Taruna Mudatama community events to track sponsorship inflows, receipts, and timeline milestones.',
    highlights: [
      {
        label: 'Transparent Accounting',
        detail: 'Automated category totals ensuring 100% post-event audit clarity.',
      },
      {
        label: 'Protocol Templates',
        detail: 'Reusable invitation, sponsorship proposal, and rundown formats.',
      },
    ],
  },
];

export const TOOLS: ToolItem[] = [
  {
    id: 'cpp',
    badgeText: 'C++',
    name: 'C++',
    category: 'Programming',
    level: 'Foundational',
    description:
      'Structured programming, control flow, modular functions, and algorithmic problem solving in first-semester ITPLN coursework.',
    bgClass: 'bg-white text-[#2D2724]',
    textClass: 'text-[#2D2724]',
  },
  {
    id: 'canva',
    badgeText: 'Canva',
    name: 'Canva',
    category: 'Visual Design',
    level: 'Proficient',
    description:
      'Editorial infographics, social event graphics, presentation decks, and cohesive warm-neutral brand systems.',
    bgClass: 'bg-[#00C4CC]/10 text-[#008C92]',
    textClass: 'text-[#008C92]',
  },
  {
    id: 'wix',
    badgeText: 'Wix',
    name: 'Wix Studio',
    category: 'Web Publishing',
    level: 'Proficient',
    description:
      'Responsive personal web portals, article publishing layouts, and visual portfolio curation.',
    bgClass: 'bg-[#2D2724] text-white',
    textClass: 'text-white',
  },
  {
    id: 'word',
    badgeText: 'Word',
    name: 'MS Word',
    category: 'Documentation',
    level: 'Advanced',
    description:
      'Formal administrative letters, organizational proposals, academic reports, and official event archives.',
    bgClass: 'bg-[#2B579A]/10 text-[#2B579A]',
    textClass: 'text-[#2B579A]',
  },
  {
    id: 'excel',
    badgeText: 'Excel',
    name: 'MS Excel',
    category: 'Data & Finance',
    level: 'Proficient',
    description:
      'Event budget spreadsheets, cashflow reconciliation, tabular tracking, and structured financial reporting.',
    bgClass: 'bg-[#217346]/10 text-[#217346]',
    textClass: 'text-[#217346]',
  },
  {
    id: 'ppt',
    badgeText: 'PPT',
    name: 'PowerPoint',
    category: 'Presentations',
    level: 'Proficient',
    description:
      'Academic pitch decks, structured visual storytelling, and clear seminar slide compositions.',
    bgClass: 'bg-[#D24726]/10 text-[#D24726]',
    textClass: 'text-[#D24726]',
  },
  {
    id: 'github',
    badgeText: 'Git',
    name: 'GitHub',
    category: 'Collaboration',
    level: 'Foundational',
    description:
      'Repository organization, version tracking for academic codebases, and collaborative project workflows.',
    bgClass: 'bg-[#2D2724]/10 text-[#2D2724]',
    textClass: 'text-[#2D2724]',
  },
  {
    id: 'wazuh',
    badgeText: 'Wazuh',
    name: 'Security',
    category: 'Cybersecurity',
    level: 'Workshop Certified',
    description:
      'Hands-on exposure to SIEM concepts, endpoint threat monitoring, and telemetry observation via Wazuh.',
    bgClass: 'bg-[#D38B78]/15 text-[#8A4E3E]',
    textClass: 'text-[#8A4E3E]',
  },
];

export const SOFT_SKILLS: { label: string; tone: 'sand' | 'blush' | 'sage' }[] = [
  { label: 'Teamwork & Leadership', tone: 'sand' },
  { label: 'Public Communication', tone: 'blush' },
  { label: 'Time Management', tone: 'sage' },
  { label: 'Adaptability', tone: 'sand' },
  { label: 'Financial Administration', tone: 'blush' },
  { label: 'Problem Solving', tone: 'sage' },
];

export const EDUCATION_TIMELINE: EducationItem[] = [
  {
    id: 'itpln',
    number: '01',
    institution: 'Institut Teknologi PLN (ITPLN)',
    period: '2026 – Present',
    roleOrDegree: 'S1 Information Systems (Sistem Informasi) · Ikatan Kerja Scholar',
    description:
      'Selected for the prestigious Ikatan Kerja corporate pathway. Active focus on database design, discrete structures, and systems analysis.',
    tone: 'blush',
    highlights: [
      'Recipient of the Ikatan Kerja scholarship cohort pathway',
      'Core focus on algorithms, systems thinking, and enterprise data architecture',
    ],
  },
  {
    id: 'sman1',
    number: '02',
    institution: 'SMA Negeri 1 Nogosari',
    period: 'Graduated 2026',
    roleOrDegree: 'High School Diploma · Science & Mathematics Stream',
    description:
      'Graduated with a stellar cumulative GPA of 95.84/100. Recognized for top academic performance and leadership in student committees.',
    tone: 'sand',
    highlights: [
      'Cumulative GPA: 95.84 / 100 across Science & Mathematics',
      'Served as Committee Secretary for major school religious & cultural programs',
    ],
  },
  {
    id: 'seminar-ethics',
    number: '03',
    institution: 'Academic Seminar: IT Innovation & Ethics',
    period: 'Certified 2026',
    roleOrDegree: 'Institut Teknologi PLN',
    description:
      'Exploration of ethical technology deployment, enterprise architecture standards, and data governance best practices.',
    tone: 'sage',
    highlights: [
      'Studied responsible digital governance and human-centered IT standards',
    ],
  },
  {
    id: 'wazuh-workshop',
    number: '04',
    institution: 'Hands-on Cybersecurity Workshop: Wazuh',
    period: 'Workshop 2026',
    roleOrDegree: 'SIEM & Security Threat Monitoring Fundamentals',
    description:
      'Practical immersion in Wazuh open-source security platform, endpoint threat intelligence, and basic telemetry monitoring.',
    tone: 'blush',
    highlights: [
      'Configured basic agent monitoring and reviewed security alert logs',
    ],
  },
  {
    id: 'mtsn1',
    number: '05',
    institution: 'MTs Negeri 1 Karanganyar',
    period: '2020 – 2023',
    roleOrDegree: 'Junior Secondary Education',
    description:
      'Foundation in academic disciplines, logic, and early student organization involvement.',
    tone: 'sand',
    highlights: [
      'Built strong analytical study habits and community teamwork foundations',
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'treasurer-17',
    period: '2023 – 2026',
    category: 'Finance Lead',
    role: 'Bendahara (Treasurer)',
    organization: 'Panitia Semarak 17 Agustus Karang Taruna Mudatama',
    summary:
      'Entrusted with managing end-to-end event budgeting, cash flow reconciliation, sponsorships, and transparent post-event financial reporting for community celebrations.',
    metricLabel: 'Financial Accuracy',
    metricValue: '100% Accounted',
    tone: 'terracotta',
    responsibilities: [
      'Drafted multi-category event budgets and managed daily cash disbursements',
      'Tracked community sponsorship pledges and verified all vendor receipts',
      'Presented transparent post-event financial accountability reports',
    ],
  },
  {
    id: 'secretary-nuzulul',
    period: '2025',
    category: 'Administration',
    role: 'Sekretaris (Secretary)',
    organization: "Panitia Pengajian Nuzulul Qur'an SMAN 1 Nogosari",
    summary:
      'Spearheaded formal administrative letters, protocol proposals, event attendance tracking, speaker coordination, and official archive documentation for the high school program.',
    metricLabel: 'Institutional Comms',
    metricValue: 'Official Liaison',
    tone: 'olive',
    responsibilities: [
      'Authored formal invitation letters, activity proposals, and official minutes',
      'Coordinated speaker schedules and school administration approvals',
      'Maintained structured attendance logs and post-event documentation',
    ],
  },
  {
    id: 'event-ramadhan',
    period: '2025',
    category: 'Operations',
    role: 'Event Division & Secretary',
    organization: 'Panitia Semarak Ramadhan Karang Taruna Mudatama',
    summary:
      'Structured dynamic activity timelines, supervised guest logistics, and authored comprehensive operational rundowns ensuring smooth execution of community festivities.',
    metricLabel: 'Event Operations',
    metricValue: 'Seamless Flow',
    tone: 'terracotta',
    responsibilities: [
      'Designed minute-by-minute event rundowns and division briefing sheets',
      'Managed registration records and coordinated stage transitions',
      'Supported cross-team communication during live community sessions',
    ],
  },
];
