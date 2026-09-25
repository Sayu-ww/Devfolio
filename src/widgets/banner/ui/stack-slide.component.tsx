import { SharedLib, SharedUi } from '@shared'

export function StackSlideComponent() {
  return (
    <article className="grid size-full grid-cols-3 gap-20 p-10">
      {SharedLib.Constants.STACKS.map((stack, index) => (
        <div
          key={index}
          className="size full group relative flex flex-col items-center justify-center gap-4 overflow-hidden rounded-4xl border border-gray-200 p-8 dark:dark:border-gray-500/20"
        >
          <h2 className="text-4xl font-semibold transition-opacity duration-500 group-hover:opacity-0">
            {stack.group.toUpperCase()}
          </h2>

          <div className="absolute flex flex-wrap size-full items-center justify-center gap-3 bg-gradient-to-bl from-black/50 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100">
            {stack.technologies.map((technology, technologyIndex) => (
              <SharedUi.Icon className='size-16' name={technology.iconName} key={technologyIndex} />
            ))}
          </div>
        </div>
      ))}
    </article>
  )
}
