export type Project = {
  id: string
  title: string
  category: 'commercial' | 'pet-project' | 'personal' | 'open-source'
  description: string
  tags: string[]
  imageSrc?: string
  link?: string
}
