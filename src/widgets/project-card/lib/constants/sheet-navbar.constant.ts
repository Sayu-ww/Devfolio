import type { ProjectCardTypes } from '@widgets/project-card'

export const SHEET_NAV_LINK: ProjectCardTypes.Ui.SheetNavLinkItem[] = [
  {
    to: '/projects/#frontend',
    label: 'frontend',
    state: 'frontend',
  },
  {
    to: '/projects/#backend',
    label: 'backend',
    state: 'backend',
  },
]
