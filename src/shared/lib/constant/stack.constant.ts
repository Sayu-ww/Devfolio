import type { StackEntity } from 'entities'

export const STACK: StackEntity.Model.Types.Stack[] = [
  {
    name: 'React',
    iconSrc: '/icons/react.svg',
    description: 'A JavaScript library for building user interfaces',
    projectIds: ['project-1', 'project-3', 'project-5'],
  },
  {
    name: 'Vue.js',
    iconSrc: '/icons/vue.svg',
    description: 'A progressive JavaScript framework',
    projectIds: ['project-2', 'project-4', 'project-6'],
  },
]
