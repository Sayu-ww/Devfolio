import { SharedUi } from '@shared'
import { clsx } from 'cn'
import { useEffect, useState, type TransitionEvent } from 'react'

const getStatus = (progress: number) => {
  if (progress < 35) return 'Initializing interface'
  if (progress < 70) return 'Preparing experience'
  if (progress < 100) return 'Almost ready'
  return 'Portfolio initialized'
}

export function PageLoaderComponent() {
  const [progress, setProgress] = useState(10)
  const [isVisible, setIsVisible] = useState(true)
  const [isRendered, setIsRendered] = useState(true)

  useEffect(() => {
    let hideTimeout: ReturnType<typeof setTimeout> | undefined

    const handleLoad = () => {
      setProgress(100)

      hideTimeout = setTimeout(() => {
        setIsVisible(false)
      }, 500)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad, { once: true })
    }

    return () => {
      window.removeEventListener('load', handleLoad)

      if (hideTimeout) {
        clearTimeout(hideTimeout)
      }
    }
  }, [])

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget && event.propertyName === 'opacity' && !isVisible) {
      setIsRendered(false)
    }
  }

  if (!isRendered) return null

  const status = getStatus(progress)

  return (
    <div
      onTransitionEnd={handleTransitionEnd}
      className={clsx(
        'z-loader fixed inset-0 isolate overflow-hidden',
        'flex flex-col items-center justify-center',
        'bg-background text-foreground',
        'transition-opacity duration-500',
        isVisible ? 'opacity-100' : 'pointer-events-none opacity-0',
      )}
      role="status"
      aria-label="Loading portfolio"
      aria-live="polite"
      aria-atomic="true"
    >
      {/* Background glow */}
      <div aria-hidden="true" className="loader-glow pointer-events-none absolute inset-0 -z-10" />

      {/* Technical grid */}
      <div aria-hidden="true" className="loader-grid pointer-events-none absolute inset-0 -z-10" />

      <div className="w-full max-w-xl px-5 sm:px-6">
        {/* Top label */}
        <div className="mb-8 flex items-center justify-between gap-3 sm:mb-12 sm:gap-4">
          <span className="text-muted-foreground text-2xs tracking-banner-wide font-mono uppercase sm:text-xs">
            Personal Portfolio
          </span>

          <span className="text-muted-foreground text-2xs flex items-center gap-2 font-mono tracking-wider uppercase">
            <span
              className={clsx(
                'size-1.5 rounded-full',
                progress === 100 ? 'bg-foreground' : 'bg-muted-foreground animate-pulse',
              )}
            />
            {progress === 100 ? 'Ready' : 'Initializing'}
          </span>
        </div>

        {/* Main title */}
        <div className="mb-8 sm:mb-10">
          <p className="text-muted-foreground tracking-extra-wide mb-4 font-mono text-xs uppercase">
            System / 001
          </p>

          <h1 className="leading-display-tight text-4xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
            Building
            <br />
            <span className="text-muted-foreground">experience.</span>
          </h1>
        </div>

        {/* Progress header */}
        <div className="mb-3 flex items-end justify-between gap-4">
          <div className="space-y-1">
            <p className="text-sm font-medium">{status}</p>

            <p className="text-muted-foreground text-2xs font-mono">Please wait while the page loads</p>
          </div>

          <span className="font-mono text-3xl font-medium tracking-tight tabular-nums">
            {String(progress).padStart(3, '0')}
            <span className="text-muted-foreground">%</span>
          </span>
        </div>

        {/* Progress bar */}
        <div className="relative">
          <SharedUi.Progress
            value={progress}
            className="bg-muted h-1.5 w-full overflow-hidden rounded-none"
          />
        </div>

        {/* Progress markers */}
        <div className="text-muted-foreground text-3xs mt-3 flex justify-between font-mono tracking-wider">
          <span>START</span>
          <span>LOADING</span>
          <span>COMPLETE</span>
        </div>

        {/* Bottom metadata */}
        <div className="border-border mt-8 flex flex-wrap items-center justify-between gap-2 border-t pt-4 sm:mt-12 sm:gap-4">
          <span className="text-muted-foreground text-2xs font-mono">REACT · TYPESCRIPT · NODE.JS</span>

          <span className="text-muted-foreground text-2xs font-mono">
            {progress === 100 ? '200 / OK' : 'BOOT / IN PROGRESS'}
          </span>
        </div>
      </div>

      {/* Decorative corner markers */}
      <div
        aria-hidden="true"
        className="border-border absolute top-5 left-5 size-4 border-t border-l sm:top-8 sm:left-8"
      />

      <div
        aria-hidden="true"
        className="border-border absolute right-5 bottom-5 size-4 border-r border-b sm:right-8 sm:bottom-8"
      />
    </div>
  )
}
