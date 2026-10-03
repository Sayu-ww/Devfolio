import { SharedUi, type SharedTypes } from '@shared'
import { ProjectCardTypes, ProjectCardUi } from '@widgets/project-card'
import { clsx } from 'cn'
import type { ProjectEntity } from 'entities'
import { useState } from 'react'

type Props = SharedTypes.Ui.PropsWithClassName<{
  project: ProjectEntity.Model.Types.Project
}>

export function SheetComponent(props: Props) {
  const { project, className } = props

  const [state, setState] = useState<ProjectCardTypes.Ui.SheetNavState>('frontend')

  return (
    <SharedUi.Sheet>
      <SharedUi.SheetTrigger
        render={
          <SharedUi.Button variant="outline" className="cursor-pointer">
            More
          </SharedUi.Button>
        }
      />
      <SharedUi.SheetContent side="left" className={clsx('data-[side=left]:!max-w-[40vw]', className)}>
        <SharedUi.SheetHeader className='gap-3'>
          <SharedUi.SheetTitle>{project.title}</SharedUi.SheetTitle>
          <SharedUi.SheetDescription>{project.description}</SharedUi.SheetDescription>
          <ProjectCardUi.ProjectCardSheet.SheetNavbar setState={setState} state={state} />
        </SharedUi.SheetHeader>
        {state === 'frontend' && (
          <ProjectCardUi.ProjectCardSheet.SheetStackSections.FrontendSection project={project} />
        )}
        {state === 'backend' && (
          <ProjectCardUi.ProjectCardSheet.SheetStackSections.BackendSection project={project} />
        )}
        <SharedUi.SheetFooter>
          <SharedUi.SheetClose render={<SharedUi.Button variant="outline">Close</SharedUi.Button>} />
        </SharedUi.SheetFooter>
      </SharedUi.SheetContent>
    </SharedUi.Sheet>
  )
}
