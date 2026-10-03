import { SharedUi } from '@shared'
import type { ProjectEntity } from 'entities'

type Props = {
  project: ProjectEntity.Model.Types.Project
}

export function FrontendSection(props: Props) {
  const { project } = props
  return (
    <div className="flex flex-1 flex-col gap-2 overflow-y-auto px-4">
      <h1 className="text-xl font-semibold">Frontend</h1>
      <p>{project.description}</p>
      <div className="flex flex-col gap-3">
        {project.images.map((imageObj) => (
          <div className="flex flex-col gap-2 px-6" key={imageObj.src}>
            <SharedUi.Image
              src={imageObj.src}
              className="h-auto max-h-80 w-full rounded-lg border border-gray-200 object-contain! dark:dark:border-gray-500/20"
            />
            <p className="mb-2">{imageObj.description}</p>
          </div>
        ))}
        {project.linkToDeployProject && (
          <SharedUi.Link
            variant="color:primary"
            to={project.linkToDeployProject}
            target="_blank"
            className="text-center hover:underline"
            rel="noopener noreferrer"
          >
            <h2>Ссылка на задеплоиный продукт: {project.title}</h2>
          </SharedUi.Link>
        )}
      </div>
    </div>
  )
}
