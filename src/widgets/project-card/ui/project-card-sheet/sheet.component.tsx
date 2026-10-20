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

      <SharedUi.SheetContent
        side="left"
        className={clsx(
          'flex h-dvh w-full min-w-0 flex-col gap-0 p-0 sm:max-w-3xl',
          'data-[side=left]:!w-full data-[side=left]:max-w-none sm:data-[side=left]:max-w-3xl',
          className,
        )}
      >
        <SharedUi.SheetHeader className="border-border shrink-0 gap-3 border-b px-4 py-4 sm:px-6 sm:py-5">
          <span className="text-muted-foreground text-2xs tracking-banner-tight font-mono">
            PROJECT / TECHNICAL OVERVIEW
          </span>

          <SharedUi.SheetTitle className="text-xl leading-tight tracking-tight break-words sm:text-2xl">
            {project.title}
          </SharedUi.SheetTitle>

          <SharedUi.SheetDescription className="text-sm leading-relaxed">
            {project.description}
          </SharedUi.SheetDescription>

          {project.backendCodeSnippets !== undefined && (
            <ProjectCardUi.ProjectCardSheet.SheetNavbar setState={setState} state={state} />
          )}
        </SharedUi.SheetHeader>

        <div className="min-h-0 flex-1 overflow-hidden py-4 sm:py-5">
          {state === 'frontend' && (
            <ProjectCardUi.ProjectCardSheet.SheetStackSections.FrontendSection project={project} />
          )}

          {state === 'backend' && project.backendCodeSnippets !== undefined && (
            <ProjectCardUi.ProjectCardSheet.SheetStackSections.BackendSection project={project} />
          )}
        </div>

        <SharedUi.SheetFooter className="border-border shrink-0 border-t px-4 py-3 sm:px-6 sm:py-4">
          <SharedUi.SheetClose
            render={
              <SharedUi.Button variant="outline" className="w-full sm:w-auto">
                Close
              </SharedUi.Button>
            }
          />
        </SharedUi.SheetFooter>
      </SharedUi.SheetContent>
    </SharedUi.Sheet>
  )
}
