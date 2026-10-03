import { Suspense, lazy } from 'react'

const Icons = {
  favicon: lazy(() => import('@assets/icons/favicon.svg?react')),

  telegram: lazy(() => import('@assets/icons/contact-icons/telegram-icon.svg?react')),
  telephone: lazy(() => import('@assets/icons/contact-icons/mobile-icon.svg?react')),
  email: lazy(() => import('@assets/icons/contact-icons/email-address-icon.svg?react')),
  github: lazy(() => import('@assets/icons/contact-icons/github-icon.svg?react')),
  'theme-toggle': lazy(() => import('@assets/icons/theme-toggle.svg?react')),

  bootstrap5: lazy(() => import('@assets/icons/technologies/bootstrap5.svg?react')),
  claude: lazy(() => import('@assets/icons/technologies/claude.svg?react')),
  docker: lazy(() => import('@assets/icons/technologies/docker.svg?react')),
  drizzle: lazy(() => import('@assets/icons/technologies/drizzle.svg?react')),
  eslint: lazy(() => import('@assets/icons/technologies/eslint.svg?react')),
  expressjs: lazy(() => import('@assets/icons/technologies/expressjs.svg?react')),
  figma: lazy(() => import('@assets/icons/technologies/figma.svg?react')),
  git: lazy(() => import('@assets/icons/technologies/git.svg?react')),
  'github-copilot': lazy(() => import('@assets/icons/technologies/github-copilot.svg?react')),
  i18next: lazy(() => import('@assets/icons/technologies/i18next.svg?react')),
  insomnia: lazy(() => import('@assets/icons/technologies/insomnia.svg?react')),
  javascript: lazy(() => import('@assets/icons/technologies/javascript.svg?react')),
  jest: lazy(() => import('@assets/icons/technologies/jest.svg?react')),
  nestjs: lazy(() => import('@assets/icons/technologies/nestjs.svg?react')),
  nodejs: lazy(() => import('@assets/icons/technologies/nodejs.svg?react')),
  npm: lazy(() => import('@assets/icons/technologies/npm.svg?react')),
  postgresql: lazy(() => import('@assets/icons/technologies/postgresql.svg?react')),
  postman: lazy(() => import('@assets/icons/technologies/postman.svg?react')),
  prettier: lazy(() => import('@assets/icons/technologies/prettier.svg?react')),
  'react-router': lazy(() => import('@assets/icons/technologies/react-router.svg?react')),
  react: lazy(() => import('@assets/icons/technologies/react.svg?react')),
  reactquery: lazy(() => import('@assets/icons/technologies/reactquery.svg?react')),
  stripe: lazy(() => import('@assets/icons/technologies/stripe.svg?react')),
  tailwindcss: lazy(() => import('@assets/icons/technologies/tailwindcss.svg?react')),
  typescript: lazy(() => import('@assets/icons/technologies/typescript.svg?react')),
  vitejs: lazy(() => import('@assets/icons/technologies/vitejs.svg?react')),
  zod: lazy(() => import('@assets/icons/technologies/zod.svg?react')),
  zustand: lazy(() => import('@assets/icons/technologies/zustand.svg?react')),
} as const

export type IconName = keyof typeof Icons

type IconProps = React.SVGAttributes<SVGElement> & {
  name: IconName
}

export function Icon(props: IconProps) {
  const { name, ...restProps } = props

  const Icon = Icons[name] as React.FC<React.SVGProps<SVGSVGElement>>

  return Icon ? (
    <Suspense fallback={null}>
      <Icon role="img" {...restProps} />
    </Suspense>
  ) : null
}
