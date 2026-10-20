import { SharedLib } from '@shared'
import { LayoutUi } from '@widgets/layout'
import { ProjectCardUi } from '@widgets/project-card'
import { clsx } from 'cn'

export default function Projects() {
  return (
    <LayoutUi.Layout>
      <section
        className={clsx(
          'grid w-full grid-cols-1 items-stretch gap-4 transition-opacity duration-500 select-none sm:grid-cols-2 xl:grid-cols-3',
        )}
      >
        {SharedLib.Constants.PROJECTS.map((project) => (
          <ProjectCardUi.ProjectCard project={project} key={project.id} />
        ))}
      </section>
    </LayoutUi.Layout>
  )
}
