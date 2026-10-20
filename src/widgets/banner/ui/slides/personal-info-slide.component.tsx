export function PersonalInfoSlideComponent() {
  const stack = [
    ['01', 'React / TypeScript'],
    ['02', 'Node.js / NestJS'],
    ['03', 'PostgreSQL / APIs'],
    ['04', 'SaaS / Integrations'],
  ]

  return (
    <section className="bg-background text-foreground relative isolate flex h-full w-full flex-col overflow-hidden rounded-lg px-4 py-3 sm:px-8 sm:py-7 lg:px-10 lg:py-8">
      {/* Фон: свечение */}
      <div aria-hidden="true" className="banner-glow-top pointer-events-none absolute inset-0 -z-10" />

      {/* Техническая сетка */}
      <div aria-hidden="true" className="banner-grid-40 pointer-events-none absolute inset-0 -z-10" />

      {/* Лёгкое зерно */}
      <div aria-hidden="true" className="opacity-subtle pointer-events-none absolute inset-0 -z-10" />

      {/* Верхняя строка */}
      <header className="border-border flex flex-col items-start gap-1 border-b pb-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:pb-4">
        <span className="text-muted-foreground text-2xs tracking-extra-wide font-mono uppercase sm:text-xs">
          Portfolio / Fullstack Developer
        </span>

        <span className="text-muted-foreground text-2xs font-mono sm:text-xs">
          React · Node.js · TypeScript
        </span>
      </header>

      {/* Основной контент */}
      <div className="md:banner-columns grid flex-1 content-center gap-4 py-2 sm:gap-8 sm:py-8 lg:gap-12 lg:py-10">
        <div className="flex flex-col justify-center">
          <p className="text-muted-foreground mb-2 text-xs sm:mb-4 sm:text-sm">
            Разрабатываю веб-продукты от идеи до реализации
          </p>

          <h2 className="leading-display max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Fullstack
            <br />
            <span className="text-muted-foreground">Developer.</span>
          </h2>

          <p className="text-muted-foreground mt-3 max-w-2xl text-xs leading-5 sm:mt-6 sm:text-base sm:leading-7">
            Создаю веб-приложения на React, TypeScript, Node.js и NestJS. Имею коммерческий опыт разработки
            SaaS-платформ и собственных проектов — от пользовательского интерфейса до серверной логики и
            интеграции внешних сервисов.
          </p>
        </div>

        {/* Стек технологий */}
        <aside className="border-border flex flex-col justify-center border-t pt-3 md:border-t-0 md:border-l md:pt-0 md:pl-6 lg:pl-8">
          <p className="text-muted-foreground text-2xs tracking-extra-wide mb-2 font-mono uppercase sm:mb-4 sm:text-xs">
            Core stack
          </p>

          <ul className="grid grid-cols-2 gap-x-3 gap-y-2 md:grid-cols-1">
            {stack.map(([number, skill]) => (
              <li key={number} className="border-border flex items-center gap-2 border-b pb-2 sm:gap-3">
                <span className="text-muted-foreground text-2xs font-mono">{number}</span>

                <span className="text-sm font-medium sm:text-base">{skill}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {/* Нижняя строка */}
      <footer className="border-border flex flex-wrap items-center justify-between gap-3 border-t pt-3 sm:pt-4">
        <span className="text-muted-foreground text-2xs sm:text-xs">From frontend to backend</span>

        <span className="text-muted-foreground text-2xs font-mono sm:text-xs">
          Design · Development · Integration
        </span>
      </footer>
    </section>
  )
}
