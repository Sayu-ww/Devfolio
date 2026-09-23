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
      <SharedUi.SheetTrigger render={<SharedUi.Button variant="secondary">More</SharedUi.Button>} />
      <SharedUi.SheetContent side="left" className={clsx('data-[side=left]:!max-w-[40vw]', className)}>
        <SharedUi.SheetHeader>
          <SharedUi.SheetTitle>{project.title}</SharedUi.SheetTitle>
          <SharedUi.SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SharedUi.SheetDescription>
        </SharedUi.SheetHeader>
        <div className="flex flex-1 flex-col gap-6 overflow-scroll px-4">
          <h1>U can see details of project</h1>
          <p>{project.description}</p>
          <div className="flex flex-col gap-3">
            {project.images.map((imageObj) => (
              <div className="flex flex-col gap-2 px-6" key={project.id}>
                <SharedUi.Image
                  src={imageObj.src}
                  className="w-120 h-67.5 rounded-lg border border-gray-200 dark:dark:border-gray-500/20"
                />
                <p>{imageObj.description}</p>
              </div>
            ))}
            {project.link && (
              <SharedUi.Link
                variant="color:primary"
                to={project.link}
                target="_blank"
                className="text-center hover:underline"
                rel="noopener noreferrer"
              >
                <h2>Ссылка на задеплоиный продукт: {project.title}</h2>
              </SharedUi.Link>
            )}
          </div>
        </div>
        <SharedUi.SheetFooter>
          <SharedUi.SheetClose render={<SharedUi.Button variant="outline">Close</SharedUi.Button>} />
        </SharedUi.SheetFooter>
      </SharedUi.SheetContent>
    </SharedUi.Sheet>
  )
}
