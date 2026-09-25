import { SharedUi, type SharedTypes } from '@shared'
import { clsx } from 'cn'
import { useState } from 'react'

import { BannerUi, type BannerType } from '..'

type Props = SharedTypes.Ui.PropsWithClassName

export function Banner(props: Props) {
  const { className } = props

  const [stage, setStage] = useState<BannerType.Ui.BannerStage>('greeting')

  const [visible, setVisible] = useState(true)

  const handleClickUpdateBannerStage = () => {
    setVisible(false)
  }

  const handleTransitionEnd = () => {
    if (!visible) {
      setStage((prevStage) => {
        switch (prevStage) {
          case 'greeting':
            return 'stack'
          case 'stack':
            return 'personal-info'
          case 'personal-info':
            return 'contacts'
          case 'contacts':
            return 'greeting'
        }
      })

      setVisible(true)
    }
  }

  return (
    <SharedUi.Paper
      onClick={handleClickUpdateBannerStage}
      className={clsx(
        'flex h-180 w-full flex-col gap-6 rounded-lg p-8',
        stage === 'greeting' && 'cursor-pointer',
        className,
      )}
    >
      <div
        className={clsx(
          'inset-0 flex size-full items-center justify-center transition-opacity duration-300',
          visible ? 'opacity-100' : 'opacity-0',
        )}
        onTransitionEnd={handleTransitionEnd}
      >
        {stage === 'greeting' && <BannerUi.GreetingSlideComponent />}

        {stage === 'stack' && <BannerUi.StackSlideComponent />}

        {stage === 'personal-info' && <BannerUi.PersonalInfoSlideComponent />}

        {stage === 'contacts' && <BannerUi.ContactSlideComponent />}
      </div>
    </SharedUi.Paper>
  )
}
