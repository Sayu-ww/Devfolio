import { SharedLib } from '@shared'

import type { IconName } from '@shared/ui/icon/icon.component'

import { useState } from 'react'

import { BannerLib } from '@widgets/banner'
import { FloatingTechnologyComponent } from './floating-technology.component'

type ActiveTechnology = {
  id: string
  iconName: IconName
  positionX: number
  positionY: number
  duration: number
}

const ACTIVE_COUNT = 10

export function StackSlideComponent() {
  const technologies = SharedLib.Constants.STACKS.flatMap((stack) => stack.technologies)

  const [nextIndex, setNextIndex] = useState(ACTIVE_COUNT)

  const [activeTechnologies, setActiveTechnologies] = useState<ActiveTechnology[]>(() =>
    technologies.slice(0, ACTIVE_COUNT).map((technology) => {
      const { positionX, positionY, duration } = BannerLib.Utils.GetRandomFloatingStats()

      return {
        id: crypto.randomUUID(),
        iconName: technology.iconName,
        positionX,
        positionY,
        duration,
      }
    }),
  )

  const handleTechnologyFinish = (id: string) => {
    setActiveTechnologies((current) =>
      current.map((technology) => {
        if (technology.id !== id) {
          return technology
        }

        const nextTechnology = technologies[nextIndex % technologies.length]

        const { positionX, positionY, duration } = BannerLib.Utils.GetRandomFloatingStats()

        return {
          id: crypto.randomUUID(),
          iconName: nextTechnology.iconName,
          positionX,
          positionY,
          duration,
        }
      }),
    )

    setNextIndex((current) => current + 1)
  }

  return (
    <article className="relative flex size-full items-center justify-center p-10">
      <div className="absolute inset-0">
        {activeTechnologies.map((technology) => (
          <FloatingTechnologyComponent
            key={technology.id}
            iconName={technology.iconName}
            positionX={technology.positionX}
            positionY={technology.positionY}
            duration={technology.duration}
            onFinish={() => handleTechnologyFinish(technology.id)}
          />
        ))}
      </div>

      <div className="z-20 flex size-90 items-center justify-center rounded-lg border border-black/50 dark:border-white/50">
        <h1 className="w-60 text-center font-semibold uppercase">I build things for the web.</h1>
      </div>
    </article>
  )
}
