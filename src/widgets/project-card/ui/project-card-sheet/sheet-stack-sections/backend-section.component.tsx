import { SharedLib, SharedUi } from '@shared'
import type { ProjectEntity } from 'entities'

type Props = {
  project: ProjectEntity.Model.Types.Project
}

export function BackendSection(props: Props) {
  const { project } = props

  const backendTags = SharedLib.Constants.PROJECT_TECHNOLOGIES.filter(
    (technology) => technology.projectIds.includes(project.id) && technology.group === 'backend',
  )

  return (
    <section className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto overscroll-contain px-3 sm:gap-8 sm:px-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold">Backend</h1>
        {backendTags.length > 0 && (
          <div className="flex flex-wrap gap-2" aria-label="Backend technologies">
            {backendTags.map((technology) => (
              <SharedUi.Badge key={technology.id}>{technology.name}</SharedUi.Badge>
            ))}
          </div>
        )}
      </div>

      {project.backendCodeSnippets?.length ? (
        <div className="flex flex-col gap-4">
          {project.backendCodeSnippets.map((snippet) => (
            <article
              className="min-w-0 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-500/20"
              key={snippet.title}
            >
              <header className="flex items-start justify-between gap-3 border-b border-gray-200 px-4 py-3 sm:items-center sm:px-5 dark:border-gray-500/20">
                <h2 className="min-w-0 font-medium break-words">{snippet.title}</h2>
                <span className="text-muted-foreground font-mono text-xs tracking-wide uppercase">
                  {snippet.language}
                </span>
              </header>
              <pre
                tabIndex={0}
                className="max-h-96 max-w-full overflow-auto overscroll-contain bg-black/5 p-4 font-mono text-xs leading-relaxed sm:p-5 sm:text-sm dark:bg-white/5"
              >
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
