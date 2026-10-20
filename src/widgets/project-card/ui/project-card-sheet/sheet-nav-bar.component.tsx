import { SharedUi } from '@shared'
import { ProjectCardLib, ProjectCardTypes } from '@widgets/project-card'

type Props = {
  setState: React.Dispatch<React.SetStateAction<ProjectCardTypes.Ui.SheetNavState>>
  state: ProjectCardTypes.Ui.SheetNavState
}

export function SheetNavbar(props: Props) {
  const { setState, state } = props

  const handleClick = (state: ProjectCardTypes.Ui.SheetNavState) => {
    setState(state)
  }

  return (
    <article className="w-full">
      <SharedUi.NavigationMenu>
        <SharedUi.NavigationMenuList className="border-secondary w-full flex-wrap justify-start gap-1 rounded-lg border-2 p-1">
          {ProjectCardLib.Constants.SHEET_NAV_LINK.map((item, index) => (
            <SharedUi.NavigationMenuItem key={index}>
              <SharedUi.NavigationMenuLink
                className={SharedUi.navigationMenuTriggerStyle()}
                render={
                  <SharedUi.Button
                    className="h-8 rounded-lg px-2 text-xs sm:px-3 sm:text-sm"
                    variant={state === item.state ? 'outline' : 'ghost'}
                    onClick={() => handleClick(item.state)}
                  >
                    {item.label}
                  </SharedUi.Button>
                }
              />
            </SharedUi.NavigationMenuItem>
          ))}
        </SharedUi.NavigationMenuList>
      </SharedUi.NavigationMenu>
    </article>
  )
}
