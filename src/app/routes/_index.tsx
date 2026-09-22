import { BannerUi } from '@widgets/banner'
import { LayoutUi } from '@widgets/layout'

export default function IndexRoute() {
  return (
    <LayoutUi.LayoutComponent>
      <section className='size-full flex flex-col gap-4'>
				<h1 className='font-semibold'>Quick info</h1>
        <BannerUi.BannerComponent />
      </section>
    </LayoutUi.LayoutComponent>
  )
}
