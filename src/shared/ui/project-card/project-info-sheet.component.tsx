import { SharedUi, type SharedTypes } from '@shared'
import { clsx } from 'cn'
import type { ProjectEntity } from 'entities'

type Props = SharedTypes.Ui.PropsWithClassName<{
  project: ProjectEntity.Model.Types.Project
}>

export function ProjectInfoSheetComponent(props: Props) {
  const { project, className } = props

  return (
    <SharedUi.Sheet>
      <SharedUi.SheetTrigger
        render={
          <SharedUi.Button variant="secondary">
            More
          </SharedUi.Button>
        }
      />
      <SharedUi.SheetContent side="left" className={clsx('data-[side=left]:!max-w-[40vw]', className)}>
        <SharedUi.SheetHeader>
          <SharedUi.SheetTitle>{project.title}</SharedUi.SheetTitle>
          <SharedUi.SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SharedUi.SheetDescription>
        </SharedUi.SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <h1>qq</h1>
        </div>
        <SharedUi.SheetFooter>
          <SharedUi.SheetClose render={<SharedUi.Button variant="outline">Close</SharedUi.Button>} />
        </SharedUi.SheetFooter>
      </SharedUi.SheetContent>
    </SharedUi.Sheet>
  )
}
