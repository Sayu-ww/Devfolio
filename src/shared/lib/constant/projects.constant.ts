import type { ProjectEntity } from 'entities'

export const PROJECTS: ProjectEntity.Model.Types.Project[] = [
  {
    id: 'nyst',
    title: 'NYST',
    category: 'commercial',
    description: 'Fullstack-приложение с административной панелью, авторизацией и системой прав доступа.',
    tags: ['React', 'TypeScript', 'NestJS', 'Node.js', 'TanStack Query', 'Zustand', 'JWT', 'Stripe'],
    images: [
      {
        src: '/images/projects/commercial/ava-security-services.png',
        description: 'Banner',
      },
    ],
  },
  {
    id: 'gettbot',
    title: 'GETTBOT.IO',
    category: 'commercial',
    description:
      'SaaS-платформа: бесконечная лента, cursor pagination, фильтрация, поиск в URL и мультиязычность.',
    tags: ['React', 'TypeScript', 'TanStack Query', 'Axios', 'i18next', 'Tailwind CSS', 'REST API'],
    images: [
      {
        src: '/images/projects/commercial/ava-security-services.png',
        description: 'Banner',
      },
    ],
    link: 'https://gettbot.io/',
  },
  {
    id: 'ava-security',
    title: 'AVA Security',
    category: 'commercial',
    description:
      'Интерфейс AI-системы видеонаблюдения и видеоаналитики, реализованный по дизайну с адаптивной и кроссбраузерной вёрсткой.',
    tags: ['HTML', 'TypeScript', 'Tailwind CSS', 'Figma', 'Responsive Design'],
    images: [
      {
        src: '/images/projects/commercial/ava-security-services.png',
        description: 'Banner',
      },
    ],
    link: 'https://ava-security.services/',
  },
  {
    id: 'defuture',
    title: 'DeFuture',
    category: 'commercial',
    description:
      'Telegram Mini App с профилем, заданиями, рейтингом, балансами, реферальной системой и интеграцией с backend API.',
    tags: [
      'React',
      'TypeScript',
      'Telegram Mini Apps',
      'Telegram WebApp API',
      'Node.js',
      'NestJS',
      'REST API',
    ],
    images: [
      {
        src: '/images/projects/commercial/ava-security-services.png',
        description: 'Banner',
      },
    ],
  },
  {
    id: 'cash-flow',
    title: 'Cash Flow',
    category: 'pet-project',
    description:
      'Fullstack-приложение для личных финансов: доходы и расходы, категории, бюджеты, фильтрация и пагинация транзакций.',
    tags: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'MikroORM', 'TanStack Query', 'Zustand', 'Docker'],
    images: [
      {
        src: '/images/projects/commercial/ava-security-services.png',
        description: 'Banner',
      },
    ],
  },
  {
    id: 'a-birds-chat',
    title: 'A Birds Chat',
    category: 'commercial',
    description: 'Приложение для создания временных приватных чатов без регистрации.',
    tags: ['Web App', 'Private Chats'],
    images: [
      {
        src: '/images/projects/commercial/ava-security-services.png',
        description: 'Banner',
      },
    ],
    link: 'https://abirdschat.uk/',
  },
  {
    id: 'ubc',
    title: 'UBC',
    category: 'commercial',
    description: 'Сайт проектного офиса, занимающегося разработкой web-, mobile- и desktop-приложений.',
    tags: ['Web Development'],
    images: [
      {
        src: '/images/projects/commercial/ava-security-services.png',
        description: 'Banner',
      },
    ],
    link: 'https://ubc.one/',
  },
  {
    id: 'nestjs-backend-project',
    title: 'NestJS Backend Project',
    category: 'personal',
    description: 'Backend-приложение с REST API и JWT-аутентификацией.',
    tags: ['Node.js', 'NestJS', 'REST API', 'JWT', 'PostgreSQL'],
    images: [
      {
        src: '/images/projects/commercial/ava-security-services.png',
        description: 'Banner',
      },
    ],
  },
]
