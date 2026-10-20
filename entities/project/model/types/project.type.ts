export interface Project {
  id: string
  title: string
  category: ProjectCategory
  description: string
  preview?: string
  images: ProjectImage[]
  backendCodeSnippets?: ProjectCodeSnippet[]
  linkToDeployProject?: string
  linkToGithub?: string
}

export type ProjectCategory = 'commercial' | 'pet-project' | 'personal' | 'open-source'

export type ProjectImage = {
  src: string
  description: string
}

export type ProjectCodeSnippet = {
  title: string
  language: string
  code: string
}
