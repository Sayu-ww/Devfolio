export type PortfolioProject = {
  title: string
  type: string
  description: string
  tags: string[]
  href: string
  number: string
}

export type PortfolioExpertise = {
  number: string
  title: string
  description: string
  icon: string
}

export type PortfolioExperience = {
  company: string
  role: string
  description: string
}

export type PortfolioContact = {
  label: string
  value: string
  href: string
}
