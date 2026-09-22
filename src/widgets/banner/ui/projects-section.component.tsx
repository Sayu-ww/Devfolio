import { SharedLib, SharedUi, type SharedTypes } from '@shared'
import { clsx } from 'cn'

type Props = SharedTypes.Ui.PropsWithClassName

export function ProjectsSectionComponent(props: Props) {
  const { className } = props

  return (
    <article
      className={clsx(
        'grid size-full grid-cols-3 items-center gap-4 transition-opacity duration-500 select-none not-md:text-center',
        className,
      )}
    >
      {SharedLib.Constants.PROJECTS.map((project) => (
        <SharedUi.ProjectCard project={project} key={project.id} />
      ))}
    </article>
  )
}
