import { SharedUi } from '@shared'
import { clsx } from 'cn'
import { useEffect, useState } from 'react'

export function PageLoaderComponent() {
  const [progress, setProgress] = useState(10) // Начнем с 10% для видимости
  const [isVisible, setIsVisible] = useState(true)
  const [isRendered, setIsRendered] = useState(true)

  useEffect(() => {
    const handleLoad = () => {
      setProgress(100)

      setTimeout(() => {
        setIsVisible(false)
      }, 300)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  const handleTransitionEnd = (event: React.TransitionEvent) => {
    if (event.target === event.currentTarget && event.propertyName === 'opacity' && !isVisible) {
      setIsRendered(false)
    }
  }

  if (!isRendered) return null

  return (
    <div
      onTransitionEnd={handleTransitionEnd}
      className={clsx(
        'dark:bg-secondary bg-primary-foreground fixed z-1000 flex size-full flex-col items-center justify-center gap-3 transition-opacity duration-500',
        isVisible ? 'opacity-100' : 'pointer-events-none opacity-0',
      )}
    >
      <h2>Wait few seconds...</h2>
      <SharedUi.Progress value={progress} className="w-80" />
    </div>
  )
}
