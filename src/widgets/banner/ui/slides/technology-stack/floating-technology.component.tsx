import { SharedUi } from '@shared'
import type { IconName } from '@shared/ui/icon/icon.component'

import { clsx } from 'cn'
import { useEffect, useState } from 'react'

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

  const handleTransitionEnd = (event: React.TransitionEvent<SVGSVGElement>) => {
    const isScaleTransition = event.propertyName === 'scale' || event.propertyName === 'transform'

    if (event.target !== event.currentTarget || !isScaleTransition || isVisible) {
      return
    }

    onFinish()
  }

  return (
    <SharedUi.Icon
      name={iconName}
      onTransitionEnd={handleTransitionEnd}
      style={{
        top: `${positionY}%`,
        left: `${positionX}%`,
      }}
      className={clsx(
        'absolute size-12 transition-transform duration-500',
        isVisible ? 'scale-100' : 'scale-0',
      )}
    />
  )
}
