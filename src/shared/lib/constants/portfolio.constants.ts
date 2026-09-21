import type {
  PortfolioContact,
  PortfolioExperience,
  PortfolioExpertise,
  PortfolioProject,
} from '@shared/types/portfolio'

export const PORTFOLIO_STACK = [
  'React',
  'TypeScript',
  'Node.js',
  'NestJS',
  'PostgreSQL',
  'TanStack Query',
  'Tailwind CSS',
  'Docker',
]

export const PORTFOLIO_NAVIGATION = [
  { label: 'Проекты', href: '#projects' },
  { label: 'Подход', href: '#expertise' },
  { label: 'Контакты', href: '#contact' },
]

export const PORTFOLIO_CONTACTS: PortfolioContact[] = [
  { label: 'Телефон', value: '+7 993 958-04-63', href: 'tel:+79939580463' },
  { label: 'Email', value: 'allio.all.in.one@gmail.com', href: 'mailto:allio.all.in.one@gmail.com' },
  { label: 'Telegram', value: '@MrMergeConflict', href: 'https://t.me/MrMergeConflict' },
]

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    title: 'Cash Flow',
    type: 'Pet project · Fullstack',
    description:
      'Приложение для личных финансов: транзакции, бюджеты, аналитика и автоматизация ежемесячного планирования.',
    tags: ['React', 'NestJS', 'PostgreSQL'],
    href: 'https://github.com/Sayu-ww/cash-flow-frontend',
    number: '01',
  },
  {
    title: 'GETTBOT.IO',
    type: 'Commercial · Frontend',
    description:
      'SaaS-платформа: развитие функциональных модулей, работа с большими списками, фильтрами, URL-state и локализацией.',
    tags: ['React', 'i18next', 'TanStack Query'],
    href: 'https://gettbot.io/',
    number: '02',
  },
  {
    title: 'AVA Security',
    type: 'Commercial · Frontend',
    description:
      'Интерфейс AI-системы видеоаналитики, реализованный по дизайну с вниманием к адаптивности и деталям.',
    tags: ['TypeScript', 'Tailwind CSS', 'Figma'],
    href: 'https://ava-security.services/',
    number: '03',
  },
]

export const PORTFOLIO_EXPERTISE: PortfolioExpertise[] = [
  {
    number: '01',
    title: 'Интерфейсы',
    description: 'Адаптивные React-интерфейсы, где состояние, данные и UX собраны в цельную систему.',
    icon: '</>',
  },
  {
    number: '02',
    title: 'Backend',
    description:
      'REST API, NestJS-модули, PostgreSQL, авторизация и понятные контракты между клиентом и сервером.',
    icon: '[]',
  },
  {
    number: '03',
    title: 'AI в работе',
    description:
      'Использую нейросети как инструмент: для исследования, ускорения рутины и проверки решений — с инженерной валидацией результата.',
    icon: '✦',
  },
]

export const PORTFOLIO_EXPERIENCE: PortfolioExperience[] = [
  {
    company: 'NYST',
    role: 'Fullstack Developer · 2026',
    description: 'Административная панель, права доступа, JWT-аутентификация, REST API и интеграция Stripe.',
  },
  {
    company: 'GETTBOT.IO',
    role: 'Frontend Developer · 2025–2026',
    description:
      'Развитие коммерческой SaaS-платформы: списки, поиск, фильтры, локализация и интеграции с API.',
  },
  {
    company: 'DeFuture',
    role: 'Frontend Developer · 2025',
    description: 'Telegram Mini App с профилем, заданиями, рейтингом, балансами и реферальной механикой.',
  },
]
