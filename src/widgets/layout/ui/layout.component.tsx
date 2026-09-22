import type { SharedTypes } from '@shared'
import { clsx } from 'cn'
import { Footer } from './footer.component'
import { Header } from './header.component'

export function LayoutComponent(props: React.PropsWithChildren & SharedTypes.Ui.PropsWithClassName) {
  const { children, className } = props
  return (
    <div className={clsx('flex min-h-screen flex-col', className)}>
      <Header />
      <main className="flex-grow px-5 md:px-15 flex items-center w-full">{children}</main>
      <Footer />
    </div>
  )
}
