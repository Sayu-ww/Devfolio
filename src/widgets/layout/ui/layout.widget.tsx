import type { SharedTypes } from '@shared'
import { clsx } from 'cn'
import { Footer } from './footer/footer.component'
import { Header } from './header/header.component'

export function Layout(props: React.PropsWithChildren & SharedTypes.Ui.PropsWithClassName) {
  const { children, className } = props
  return (
    <div className={clsx('flex min-h-screen flex-col', className)}>
      <Header />
      <main className="flex w-full flex-grow items-center px-4 py-6 sm:px-6 sm:py-8 lg:px-12 xl:px-15">
        {children}
      </main>
      <Footer />
    </div>
  )
}
