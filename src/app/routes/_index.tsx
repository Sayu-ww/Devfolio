import { SharedUi } from '@shared'
import { LayoutUi } from '@widgets/layout'

export default function IndexRoute() {
  return (
    <LayoutUi.Layout>
      <SharedUi.Paper className="flex flex-col items-center justify-center gap-4 p-8"></SharedUi.Paper>
				<h1 className="text-4xl font-bold">Welcome to Devfolio</h1>
				<p className="text-lg text-gray-600 dark:text-gray-400">
					This is a personal portfolio website built with React, TypeScript, and Tailwind CSS.
				</p>
			</SharedUi.Paper>
    </LayoutUi.Layout>
  )
}
