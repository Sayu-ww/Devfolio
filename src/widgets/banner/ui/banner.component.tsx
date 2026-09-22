import { SharedUi, type SharedTypes } from '@shared'
import { clsx } from 'cn'
import { useState } from 'react'
import { BannerUi, type BannerType } from '..'

type Props = SharedTypes.Ui.PropsWithClassName

export function BannerComponent(props: Props) {
  const { className } = props
  const [stage, setStage] = useState<BannerType.Ui.BannerStage>('greeting')

  const handleClickUpdateBannerStage = () => {
    setStage((prevStage) => {
      switch (prevStage) {
        case 'greeting':
          return 'projects'
        case 'projects':
          return 'stack'
        case 'stack':
          return 'contacts'
        case 'contacts':
          return 'greeting'
      }
    })
  }

  return (
    <SharedUi.Paper
      onClick={handleClickUpdateBannerStage}
      className={clsx(
        'relative flex h-180 w-full flex-col gap-6 rounded-lg p-8',
        stage === 'greeting' && 'cursor-pointer',
        className,
      )}
    >
      <div className="relative flex size-full flex-col items-center overflow-scroll md:justify-center">
        <SharedUi.Fade show={stage === 'greeting'}>
          <BannerUi.GreetingMessageComponent />
        </SharedUi.Fade>

        <SharedUi.Fade show={stage === 'projects'}>
          <BannerUi.ProjectsSectionComponent />
        </SharedUi.Fade>

        <SharedUi.Fade show={stage === 'stack'}>
          <article className="flex flex-col items-center gap-4 select-none not-md:text-center">
            <h1 className="text-4xl font-bold">Tech Stack</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              I have experience with a variety of technologies and frameworks, including React, TypeScript,
              Tailwind CSS, and more.
            </p>
          </article>
        </SharedUi.Fade>

        <SharedUi.Fade show={stage === 'contacts'}>
          <article className="flex flex-col items-center gap-4 select-none not-md:text-center">
            <h1 className="text-4xl font-bold">Contact Me</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              If you would like to get in touch, please feel free to reach out via email or connect with me on
              LinkedIn.
            </p>
          </article>
        </SharedUi.Fade>
      </div>
    </SharedUi.Paper>
  )
}
