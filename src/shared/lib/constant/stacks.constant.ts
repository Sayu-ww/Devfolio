import type { TechnologyEntity } from 'entities'

export const STACKS: TechnologyEntity.Model.Types.Stack[] = [
  {
    group: 'frontend',
    technologies: [
      { name: 'React', iconName: 'react', category: 'framework', group: 'frontend' },
      { name: 'TypeScript', iconName: 'typescript', category: 'language', group: 'frontend' },
      { name: 'JavaScript', iconName: 'javascript', category: 'language', group: 'frontend' },
      { name: 'TanStack Query', iconName: 'reactquery', category: 'library', group: 'frontend' },
      { name: 'Zustand', iconName: 'zustand', category: 'library', group: 'frontend' },
      { name: 'React Router', iconName: 'react-router', category: 'library', group: 'frontend' },
      { name: 'Tailwind CSS', iconName: 'tailwindcss', category: 'styling', group: 'frontend' },
      { name: 'Bootstrap 5', iconName: 'bootstrap5', category: 'styling', group: 'frontend' },
      { name: 'Vite', iconName: 'vitejs', category: 'tool', group: 'frontend' },
      { name: 'i18next', iconName: 'i18next', category: 'library', group: 'frontend' },
    ],
  },
  {
    group: 'backend',
    technologies: [
      { name: 'Node.js', iconName: 'nodejs', category: 'framework', group: 'backend' },
      { name: 'NestJS', iconName: 'nestjs', category: 'framework', group: 'backend' },
      { name: 'Express', iconName: 'expressjs', category: 'framework', group: 'backend' },
      { name: 'Zod', iconName: 'zod', category: 'library', group: 'backend' },
      { name: 'Drizzle', iconName: 'drizzle', category: 'library', group: 'backend' },
      { name: 'PostgreSQL', iconName: 'postgresql', category: 'database', group: 'backend' },
      { name: 'Stripe', iconName: 'stripe', category: 'integration', group: 'backend' },
    ],
  },
  {
    group: 'general',
    technologies: [
      { name: 'Docker', iconName: 'docker', category: 'devops', group: 'general' },
      { name: 'Git', iconName: 'git', category: 'tool', group: 'general' },
      { name: 'npm', iconName: 'npm', category: 'tool', group: 'general' },
      { name: 'ESLint', iconName: 'eslint', category: 'tool', group: 'general' },
      { name: 'Prettier', iconName: 'prettier', category: 'tool', group: 'general' },
      { name: 'Jest', iconName: 'jest', category: 'tool', group: 'general' },
      { name: 'Figma', iconName: 'figma', category: 'tool', group: 'general' },
      { name: 'Postman', iconName: 'postman', category: 'tool', group: 'general' },
      { name: 'Insomnia', iconName: 'insomnia', category: 'tool', group: 'general' },
      { name: 'GitHub Copilot', iconName: 'github-copilot', category: 'tool', group: 'general' },
      { name: 'Claude', iconName: 'claude', category: 'tool', group: 'general' },
    ],
  },
]
	