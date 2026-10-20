import { SharedUi } from '@shared'
import type { IconName } from '@shared/ui/icon/icon.component'

import { clsx } from 'cn'
import { useEffect, useState, type TransitionEvent } from 'react'

type Props = {
  iconName: IconName
  positionX: number
  positionY: number
  duration: number
  onFinish: () => void
}

export function FloatingTechnologyComponent(props: Props) {
  const { iconName, positionX, positionY, duration, onFinish } = props

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setIsVisible(true)
    })

    const timeout = setTimeout(() => {
      setIsVisible(false)
    }, duration)

    return () => {
      cancelAnimationFrame(frame)
      clearTimeout(timeout)
    }
  }, [duration])

  const handleTransitionEnd = (event: TransitionEvent<SVGSVGElement>) => {
    const isScaleTransition = event.propertyName === 'scale' || event.propertyName === 'transform'

    if (event.target !== event.currentTarget || !isScaleTransition || isVisible) {
      return
    }

    onFinish()
  }

  return (
    <SharedUi.Icon
      name={iconName}
      aria-hidden="true"
      onTransitionEnd={handleTransitionEnd}
      style={{
        top: `${positionY}%`,
        left: `${positionX}%`,
      }}
      className={clsx(
        'text-muted-foreground/60 absolute size-8 sm:size-10 lg:size-12',
        'transition-transform-opacity duration-500 ease-out',
        isVisible ? 'scale-100 opacity-70' : 'scale-0 opacity-0',
      )}
    />
  )
}
