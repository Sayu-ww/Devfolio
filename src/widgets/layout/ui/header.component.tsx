import { SharedUi } from '@shared'
import { NAVIGATION_MENU_ITEMS } from '../constants'

export function Header() {
  return (
    <header className="flex justify-between gap-2 p-2 not-md:justify-center">
      <SharedUi.Badge variant="secondary" className="m-2 text-sm not-md:hidden">
        Sayu-ww&apos;s Personal Portfolio
      </SharedUi.Badge>
      <SharedUi.NavigationMenu>
        <SharedUi.NavigationMenuList className="gap-3">
          {NAVIGATION_MENU_ITEMS.map((item, index) => (
            <SharedUi.NavigationMenuItem key={index}>
              <SharedUi.NavigationMenuLink
                className={SharedUi.navigationMenuTriggerStyle()}
                render={<a href={item.href}>{item.title}</a>}
              />
            </SharedUi.NavigationMenuItem>
          ))}
        </SharedUi.NavigationMenuList>
      </SharedUi.NavigationMenu>
    </header>
  )
}
