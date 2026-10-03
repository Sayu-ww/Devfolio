import type { SharedTypes } from '@shared'
import { clsx } from 'cn'

type Props = SharedTypes.Ui.PropsWithClassName

export function GreetingSlideComponent(props: Props) {
  const { className } = props
  return (
    <article
      className={clsx(
        'flex flex-col items-center gap-4 transition-all duration-500 select-none not-md:text-center',
        className,
      )}
    >
      <h1 className="text-4xl font-bold">Welcome to Sayu-ww&apos;s portfolio</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400">
        This is a personal portfolio website built with React, TypeScript, and Tailwind CSS.
      </p>
      <span className="text-lg font-semibold">Click</span>
    </article>
  )
}
