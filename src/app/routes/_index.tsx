import { BannerUi } from '@widgets/banner'
import { LayoutUi } from '@widgets/layout'

export default function IndexRoute() {
  return (
    <LayoutUi.Layout>
      <section className="flex size-full flex-col gap-4">
        <h1 className="font-semibold">Quick info</h1>
        <BannerUi.Banner />
      </section>
    </LayoutUi.Layout>
  )
}
