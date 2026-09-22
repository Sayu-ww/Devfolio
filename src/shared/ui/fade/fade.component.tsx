import type { SharedTypes } from '@shared'
import { clsx } from 'cn'
import { useEffect, useState } from 'react'
type Props = SharedTypes.Ui.PropsWithClassName & React.PropsWithChildren<{ show: boolean }>

export function Fade(props: Props) {
  const { show, children, className } = props

  const [isMounted, setIsMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (show) {
      setIsMounted(true)
      setIsVisible(false)

      let secondFrame: number | undefined

      const firstFrame = requestAnimationFrame(() => {
        secondFrame = requestAnimationFrame(() => {
          setIsVisible(true)
        })
      })

      return () => {
        cancelAnimationFrame(firstFrame)

        if (secondFrame !== undefined) {
          cancelAnimationFrame(secondFrame)
        }
      }
    }

    setIsVisible(false)
  }, [show])

  if (!isMounted) return null

  return (
    <div
      className={clsx(
        'absolute inset-0 flex items-center justify-center transition-opacity duration-500',
        isVisible ? 'opacity-100' : 'pointer-events-none opacity-0',
        className,
      )}
      onTransitionEnd={(event) => {
        if (event.target === event.currentTarget && event.propertyName === 'opacity' && !isVisible) {
          setIsMounted(false)
        }
      }}
    >
      {children}
    </div>
  )
}
