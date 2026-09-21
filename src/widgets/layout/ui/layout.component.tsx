import { Footer } from './footer.component'
import { Header } from './header.component'

export function Layout(props: React.PropsWithChildren) {
  const { children } = props
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}
