import { SharedUi } from '@shared'
import { useTheme } from 'next-themes'
import { NAVIGATION_MENU_ITEMS } from '../lib/constant'

export function Header() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <header className="flex justify-between gap-2 p-2 not-md:justify-center">
      <SharedUi.Badge variant="secondary" className="m-2 text-sm not-md:hidden">
        Sayu-ww&apos;s Personal Portfolio
      </SharedUi.Badge>
      <SharedUi.NavigationMenu>
        <SharedUi.NavigationMenuList className="gap-3">
          <SharedUi.Switch
            checked={resolvedTheme === 'dark'}
            onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
            aria-label="Toggle theme"
						size='sm'
          />
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
