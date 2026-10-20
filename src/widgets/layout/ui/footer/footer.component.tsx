export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-2 px-4 py-5 text-center text-xs text-gray-500 sm:text-sm dark:text-gray-400">
      <p>© {new Date().getFullYear()} Sayu-ww. All rights reserved.</p>
      <p className="max-w-full">
        Built with ❤️ by{' '}
        <a href="https://github.com/Sayu-ww" target="_blank" rel="noopener noreferrer">
          Sayu-ww
        </a>
      </p>
    </footer>
  )
}
