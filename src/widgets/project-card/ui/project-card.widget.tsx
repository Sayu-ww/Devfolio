import { SharedUi, type SharedTypes } from '@shared'
import { clsx } from 'cn'
import type { ProjectEntity } from 'entities'
import { SheetComponent } from './project-card-sheet/sheet.component'

type Props = SharedTypes.Ui.PropsWithClassName<{
  project: ProjectEntity.Model.Types.Project
}>

export function ProjectCard(props: Props) {
  const { className, project } = props
  const { title, description, tags, category } = project

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={clsx(
        'group relative flex size-full flex-col justify-center gap-4 rounded-xl border border-gray-200 px-10 py-8 transition-colors duration-500 dark:dark:border-gray-500/20',
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{title}</h2>
        <SharedUi.Badge variant={'default'}>{category}</SharedUi.Badge>
      </div>

      <SharedUi.Image
        src={
          project.preview === '' || project.preview === undefined ? project.images[0].src : project.preview
        }
        alt={title}
        className="h-auto w-full rounded-lg"
      />

      <div className="absolute inset-0 flex flex-col justify-between gap-4 rounded-xl bg-black/60 p-8 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
        <div className="flex flex-col gap-2">
          <div className="flex w-full justify-between">
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            <SheetComponent project={project} />
          </div>
          <p className="line-clamp-4 text-lg text-white">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <SharedUi.Badge key={tag.name} variant={'default'} className="dark">
              {tag.name}
            </SharedUi.Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
