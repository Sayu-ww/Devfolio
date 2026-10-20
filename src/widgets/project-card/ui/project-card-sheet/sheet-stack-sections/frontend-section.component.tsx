import { SharedLib, SharedUi } from '@shared'
import type { ProjectEntity } from 'entities'

type Props = {
  project: ProjectEntity.Model.Types.Project
}

export function FrontendSection(props: Props) {
  const { project } = props

  const frontendTags = SharedLib.Constants.PROJECT_TECHNOLOGIES.filter(
    (technology) => technology.projectIds.includes(project.id) && technology.group === 'frontend',
  )

  return (
    <section className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto overscroll-contain px-3 sm:px-4">
      <h1 className="text-xl font-semibold">Frontend</h1>
      {frontendTags.length > 0 && (
        <div className="flex flex-wrap gap-2" aria-label="Frontend technologies">
          {frontendTags.map((technology) => (
            <SharedUi.Badge key={technology.id}>{technology.name}</SharedUi.Badge>
          ))}
        </div>
      )}
      <div className="flex flex-col gap-4">
        {project.images.map((imageObj, index) => (
          <figure
            className="border-border bg-muted/20 flex flex-col gap-3 rounded-lg border p-3 sm:p-4"
            key={imageObj.src}
          >
            <SharedUi.Image
              src={imageObj.src}
              alt={imageObj.description}
              className="h-auto max-h-64 w-full rounded-md border border-gray-200 object-contain! sm:max-h-80 dark:dark:border-gray-500/20"
            />
            <figcaption className="flex items-start gap-3">
              <span className="text-muted-foreground shrink-0 font-mono text-xs">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-sm leading-relaxed">{imageObj.description}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
