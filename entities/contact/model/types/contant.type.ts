import type { IconName } from '@shared/ui/icon/icon.component'

export interface Contact {
  group: ContactGroup
  link: string
  iconName: IconName
}

export type ContactGroup = 'github' | 'telegram' | 'phone' | 'email'
