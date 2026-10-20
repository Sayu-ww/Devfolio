import { SharedLib, SharedUi } from '@shared'
import type { IconName } from '@shared/ui/icon/icon.component'

import { clsx } from 'cn'

type Technology = {
  id: string
  iconName: IconName
}

export function StackSlideComponent() {
  const technologies: Technology[] = SharedLib.Constants.STACKS.flatMap((stack) =>
    stack.technologies.map((technology, index) => ({
      id: `${technology.iconName}-${index}`,
      iconName: technology.iconName,
    })),
  )

  const frontend = technologies.filter((_, index) => index % 2 === 0)
  const backend = technologies.filter((_, index) => index % 2 !== 0)

  const renderTrack = (items: Technology[], reverse = false) => {
    if (items.length === 0) return null

    // Дублируем последовательность для бесшовной анимации.
    const repeatedItems = [...items, ...items]

    return (
      <div className="group relative overflow-hidden">
        {/* Линия */}
        <div aria-hidden="true" className="bg-border absolute inset-x-0 top-1/2 h-px -translate-y-1/2" />

        {/* Движущиеся технологии */}
        <div
          className={clsx(
            'flex w-max items-center',
            'animate-[stack-marquee_32s_linear_infinite]',
            'group-hover:[animation-play-state:paused]',
            reverse && '[animation-direction:reverse]',
          )}
        >
          {repeatedItems.map((technology, index) => (
            <div
              key={`${technology.id}-${index}`}
              className="border-border/70 bg-background/90 relative flex size-16 shrink-0 items-center justify-center border-r sm:size-20"
            >
              <SharedUi.Icon
                name={technology.iconName}
                aria-hidden="true"
                className="text-muted-foreground hover:text-foreground size-7 transition-colors duration-300 sm:size-8"
              />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <article className="bg-background text-foreground relative isolate flex size-full min-h-0 flex-col justify-between overflow-hidden py-4 sm:py-8">
      {/* Свечение */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_45%,var(--glow-color),transparent_65%)]"
      />

      {/* Сетка */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(var(--grid-color)_1px,transparent_1px),linear-gradient(90deg,var(--grid-color)_1px,transparent_1px)] bg-[size:40px_40px]"
      />

      {/* Верхняя строка */}
      <header className="flex items-center justify-between gap-3 px-4 sm:px-8">
        <span className="text-muted-foreground font-mono text-[10px] tracking-[0.2em] uppercase sm:text-xs">
          Technology stack
        </span>

        <span className="text-muted-foreground font-mono text-[10px] sm:text-xs">SYSTEM / 002</span>
      </header>

      {/* Центральная композиция */}
      <div className="my-auto flex flex-col gap-4 py-4 sm:gap-9 sm:py-10">
        {/* Первая линия */}
        <div className="relative">
          <div className="mb-2 flex items-center justify-between px-4 sm:px-8">
            <span className="text-muted-foreground font-mono text-[9px] tracking-[0.2em] uppercase sm:text-[10px]">
              01 / Frontend
            </span>

            <span className="text-muted-foreground font-mono text-[9px] sm:text-[10px]">UI LAYER</span>
          </div>

          {renderTrack(frontend)}
        </div>

        {/* Заголовок */}
        <div className="relative z-10 px-4 text-center sm:px-8">
          <p className="text-muted-foreground mb-3 font-mono text-[9px] tracking-[0.25em] uppercase sm:text-xs">
            Engineering digital products
          </p>

          <h2 className="leading-display-tight text-3xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            I build things
            <br />
            <span className="text-muted-foreground">for the web.</span>
          </h2>

          <p className="text-muted-foreground mx-auto mt-4 max-w-md text-xs leading-5 sm:text-sm sm:leading-6">
            React, TypeScript, Node.js and everything that connects the interface to the system.
          </p>
        </div>

        {/* Вторая линия */}
        <div className="relative">
          <div className="mb-2 flex items-center justify-between px-4 sm:px-8">
            <span className="text-muted-foreground font-mono text-[9px] tracking-[0.2em] uppercase sm:text-[10px]">
              02 / Backend
            </span>

            <span className="text-muted-foreground font-mono text-[9px] sm:text-[10px]">SERVER LAYER</span>
          </div>

          {renderTrack(backend, true)}
        </div>
      </div>

      {/* Нижняя строка */}
      <footer className="border-border flex flex-wrap items-center justify-between gap-3 border-t px-4 pt-4 sm:px-8">
        <span className="text-muted-foreground font-mono text-[9px] sm:text-[10px]">
          FROM INTERFACE TO INFRASTRUCTURE
        </span>

        <span className="text-muted-foreground flex items-center gap-2 font-mono text-[9px] sm:text-[10px]">
          <span className="bg-foreground size-1.5 animate-pulse rounded-full" />
          SYSTEM ACTIVE
        </span>
      </footer>
    </article>
  )
}
