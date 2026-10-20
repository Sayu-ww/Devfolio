import { BannerUi } from '@widgets/banner'
import { LayoutUi } from '@widgets/layout'

export default function IndexRoute() {
  return (
    <LayoutUi.Layout>
      <section className="flex w-full flex-col gap-4">
        <h1 className="text-xl font-semibold sm:text-2xl">Quick info</h1>
        <BannerUi.Banner />
      </section>
    </LayoutUi.Layout>
  )
}
