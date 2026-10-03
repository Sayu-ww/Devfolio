import { SharedUi } from '@shared'
import type { ProjectEntity } from 'entities'

type Props = {
  project: ProjectEntity.Model.Types.Project
}

export function BackendSection(props: Props) {
  const { project } = props

  const backendTags = project.tags.filter((tag) => tag.group === 'backend')

  return (
    <section className="flex flex-1 flex-col gap-6 overflow-y-auto px-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold">Backend</h1>
        <p>{project.description}</p>
        {backendTags.length > 0 && (
          <div className="flex flex-wrap gap-2" aria-label="Backend technologies">
            {backendTags.map((tag) => (
              <SharedUi.Badge key={tag.name}>{tag.name}</SharedUi.Badge>
            ))}
          </div>
        )}
      </div>

      {project.backendCodeSnippets?.length ? (
        <div className="flex flex-col gap-4">
          {project.backendCodeSnippets.map((snippet) => (
            <article
              className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-500/20"
              key={snippet.title}
            >
              <header className="flex items-center justify-between gap-3 border-b border-gray-200 px-4 py-3 dark:border-gray-500/20">
                <h2 className="font-medium">{snippet.title}</h2>
                <span className="text-muted-foreground text-xs uppercase">{snippet.language}</span>
              </header>
              <pre className="max-h-96 overflow-auto bg-black/5 p-4 text-sm leading-relaxed dark:bg-white/5">
                <code>{snippet.code}</code>
              </pre>
            </article>
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">Code examples are not available for this project yet.</p>
      )}
    </section>
  )
}
