export interface Project {
  id: string
  title: string
  category: 'commercial' | 'pet-project' | 'personal' | 'open-source'
  description: string
  tags: string[]
  images: ProjectImage[]
  link?: string
}

export type ProjectImage = {
  src: string
  description: string
}
