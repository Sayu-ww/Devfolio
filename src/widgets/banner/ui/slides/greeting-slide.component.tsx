import type { SharedTypes } from '@shared'
import { clsx } from 'cn'

type Props = SharedTypes.Ui.PropsWithClassName

export function GreetingSlideComponent(props: Props) {
  const { className } = props

  return (
    <article
      className={clsx(
        'relative isolate flex size-full min-h-0 flex-col',
        'justify-between overflow-hidden p-5 sm:p-8 lg:p-10',
        'transition-all duration-500 select-none',
        'cursor-pointer',
        className,
      )}
    >
      {/* Glow */}
      <div aria-hidden="true" className="banner-glow-top pointer-events-none absolute inset-0 -z-10" />

      {/* Grid */}
      <div
        aria-hidden="true"
        className="banner-grid-32 sm:banner-grid-40 pointer-events-none absolute inset-0 -z-10"
      />

      {/* Top metadata */}
      <header className="border-border flex flex-wrap items-center justify-between gap-3 border-b pb-4">
        <div className="flex items-center gap-3">
          <span className="bg-foreground size-2 animate-pulse rounded-full" />

          <span className="text-muted-foreground text-2xs tracking-extra-wide font-mono uppercase sm:text-xs">
            Sayu-ww / Portfolio
          </span>
        </div>

        <span className="text-muted-foreground text-2xs font-mono sm:text-xs">INTRODUCTION / 001</span>
      </header>

      {/* Main content */}
      <div className="lg:greeting-columns grid flex-1 content-center gap-6 py-8 lg:items-end">
        <div>
          <p className="text-muted-foreground text-2xs tracking-banner-ultra-wide mb-4 font-mono uppercase sm:text-xs">
            Fullstack Developer
          </p>

          <h1 className="leading-display-tight text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            Hello, <span className="text-muted-foreground">world.</span>
          </h1>

          <p className="text-muted-foreground mt-6 max-w-lg text-sm leading-6 sm:text-base sm:leading-7">
            Welcome to my personal space on the web. I build digital products with React, TypeScript, Node.js
            and NestJS.
          </p>
        </div>

        {/* Decorative index */}
        <div className="hidden lg:flex lg:flex-col lg:items-end lg:gap-2">
          <span className="text-muted-foreground/30 font-mono text-6xl font-light tracking-tighter xl:text-8xl">
            01
          </span>

          <span className="text-muted-foreground text-2xs tracking-extra-wide font-mono uppercase">
            Think. Build. Ship.
          </span>
        </div>
      </div>

      {/* Bottom interaction hint */}
      <footer className="border-border flex items-center justify-between gap-4 border-t pt-4">
        <div className="flex items-center gap-3">
          <span className="border-border group-hover:bg-foreground group-hover:text-background flex size-8 items-center justify-center rounded-full border transition-colors duration-300">
            <span aria-hidden="true" className="text-lg leading-none">
              ↗
            </span>
          </span>

          <span className="text-muted-foreground text-xs sm:text-sm">Explore my portfolio</span>
        </div>

        <span className="text-muted-foreground text-2xs font-mono tracking-wider sm:text-xs">
          CLICK TO CONTINUE
        </span>
      </footer>
    </article>
  )
}
