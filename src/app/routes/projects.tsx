import { SharedLib } from '@shared'
import { LayoutUi } from '@widgets/layout'
import { ProjectCardUi } from '@widgets/project-card'
import { clsx } from 'cn'

export default function Projects() {
  return (
    <LayoutUi.Layout>
      <section
        className={clsx(
          'grid size-full grid-cols-3 items-center gap-4 transition-opacity duration-500 select-none not-md:text-center',
        )}
      >
        {SharedLib.Constants.PROJECTS.map((project) => (
          <ProjectCardUi.ProjectCard project={project} key={project.id} />
        ))}
      </section>
    </LayoutUi.Layout>
  )
}
