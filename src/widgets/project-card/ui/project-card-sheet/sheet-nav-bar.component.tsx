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
    <article>
      <SharedUi.NavigationMenu>
        <SharedUi.NavigationMenuList className="border-secondary gap-1 rounded-lg border-2">
          {ProjectCardLib.Constants.SHEET_NAV_LINK.map((item, index) => (
            <SharedUi.NavigationMenuItem key={index}>
              <SharedUi.NavigationMenuLink
                className={SharedUi.navigationMenuTriggerStyle()}
                render={
                  <SharedUi.Button
                    className="rounded-lg"
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
