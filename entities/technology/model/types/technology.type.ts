import type { IconName } from '@shared/ui/icon/icon.component'

export type TechnologyCategory =
  | 'language' // TypeScript, JavaScript
  | 'framework' // React, NestJS, Express
  | 'library' // TanStack Query, Zustand, Axios, React Router, i18next, Zod, MikroORM
  | 'styling' // Tailwind CSS, HTML/CSS
  | 'database' // PostgreSQL
  | 'devops' // Docker, Docker Compose
  | 'tool' // Git, ESLint, Prettier, Figma
  | 'integration' // Stripe, Telegram Mini Apps, Telegram WebApp API

export type TechnologyGroup = 'frontend' | 'backend' | 'general'

export interface Technology {
  name: string
  category: TechnologyCategory
  group: TechnologyGroup
  iconName: IconName
}
