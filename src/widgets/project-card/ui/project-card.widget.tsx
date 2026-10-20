import { SharedLib, SharedUi, type SharedTypes } from '@shared'
import { clsx } from 'cn'
import type { ProjectEntity } from 'entities'
import { SheetComponent } from './project-card-sheet/sheet.component'

type Props = SharedTypes.Ui.PropsWithClassName<{
  project: ProjectEntity.Model.Types.Project
}>

export function ProjectCard(props: Props) {
  const { className, project } = props
  const { title, description, category } = project

  const projectTechnologies = SharedLib.Constants.PROJECT_TECHNOLOGIES.filter((technology) =>
    technology.projectIds.includes(project.id),
  )

  const preview = project.preview || project.images[0]?.src

  return (
    <article
      onClick={(event) => event.stopPropagation()}
      className={clsx(
        'group relative flex h-full min-w-0 flex-col overflow-hidden',
        'border-border bg-card rounded-xl border',
        'hover:border-foreground/25 transition-colors duration-300',
        className,
      )}
    >
      {/* Project metadata */}
      <header className="flex items-center justify-between gap-2 px-4 pt-4 sm:gap-3 sm:px-5 sm:pt-5">
        <span className="text-muted-foreground font-mono text-[10px] tracking-[0.18em]">
          PROJECT / {project.id}
        </span>

        <SharedUi.Badge variant="outline">{category}</SharedUi.Badge>
      </header>

      {/* Preview */}
      <div className="border-border bg-muted/30 relative mx-4 mt-4 overflow-hidden rounded-lg border sm:mx-5">
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/15 to-transparent opacity-60" />

        {preview ? (
          <SharedUi.Image
            src={preview}
            alt={`Превью проекта ${title}`}
            className={clsx(
              'aspect-[16/10] h-auto w-full object-cover',
              'transition-transform duration-500 ease-out',
              'group-hover:scale-[1.03]',
            )}
          />
        ) : (
          <div className="flex aspect-[16/10] items-center justify-center">
            <span className="text-muted-foreground font-mono text-xs">PREVIEW UNAVAILABLE</span>
          </div>
        )}

        <span className="absolute bottom-3 left-3 z-20 font-mono text-[10px] tracking-widest text-white/80">
          CASE STUDY
        </span>
      </div>

      {/* Project information */}
      <div className="flex flex-1 flex-col gap-4 p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{title}</h2>

          <SharedUi.Icon
            name="nodejs"
            className="text-muted-foreground group-hover:text-foreground mt-1 size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>

        <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">{description}</p>

        {/* Technology tags */}
        <div className="flex flex-wrap gap-1.5">
          {projectTechnologies.map((technology) => (
            <SharedUi.Badge
              key={technology.id}
              variant="secondary"
              className="font-mono text-[10px] font-normal"
            >
              {technology.name}
            </SharedUi.Badge>
          ))}
        </div>

        <div className="border-border mt-auto flex flex-wrap items-center justify-between gap-3 border-t pt-4">
          <span className="text-muted-foreground text-2xs font-mono tracking-wider">VIEW DETAILS</span>

          <div className="ml-auto flex flex-wrap items-center justify-end gap-2">
            {project.linkToDeployProject && (
              <SharedUi.Link
                variant="color:primary"
                to={project.linkToDeployProject}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open live demo for ${title}`}
                className="border-border hover:bg-muted inline-flex items-center gap-2 rounded-md border px-2.5 py-2 text-xs transition-colors sm:px-3 sm:text-sm"
              >
                Live demo <span aria-hidden="true">↗</span>
              </SharedUi.Link>
            )}

            <SheetComponent project={project} />
          </div>
        </div>
      </div>
    </article>
  )
}
