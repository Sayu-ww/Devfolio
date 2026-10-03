export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-2 py-4 text-sm text-gray-500 dark:text-gray-400">
      <p>© {new Date().getFullYear()} Sayu-ww. All rights reserved.</p>
      <p>
        Built with ❤️ by{' '}
        <a href="https://github.com/Sayu-ww" target="_blank" rel="noopener noreferrer">
          Sayu-ww
        </a>
      </p>
    </footer>
  )
}
