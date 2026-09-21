import {
  PORTFOLIO_CONTACTS,
  PORTFOLIO_EXPERIENCE,
  PORTFOLIO_EXPERTISE,
  PORTFOLIO_NAVIGATION,
  PORTFOLIO_PROJECTS,
  PORTFOLIO_STACK,
} from '@shared/lib'
import type { PortfolioExperience } from '@shared/types/portfolio'
import { Button } from '@shared/ui'

export default function IndexRoute() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0d10] text-[#f1f2f4]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_78%_8%,rgba(110,255,193,0.09),transparent_23%),radial-gradient(circle_at_10%_50%,rgba(93,125,255,0.07),transparent_27%)]" />
      <div className="relative mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10">
        <header className="flex h-20 items-center justify-between border-b border-white/10 md:h-24">
          <a className="font-mono text-sm tracking-[-0.04em]" href="#top">
            a.ivanov<span className="text-[#9dffba]">/</span>
          </a>
          <nav className="hidden items-center gap-8 text-xs text-white/55 md:flex">
            {PORTFOLIO_NAVIGATION.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <Button
            className="hidden md:inline-flex"
            variant="ghost"
            size="sm"
            nativeButton={false}
            render={<a href="https://github.com/Sayu-ww" target="_blank" rel="noreferrer" />}
          >
            GitHub ↗
          </Button>
          <Button className="md:hidden" variant="ghost" size="icon" aria-label="Открыть меню">
            ☰
          </Button>
        </header>
        <section
          id="top"
          className="grid min-h-[calc(100vh-5rem)] items-end gap-10 border-b border-white/10 py-16 md:min-h-[calc(100vh-6rem)] md:grid-cols-12 md:py-20"
        >
          <div className="md:col-span-9">
            <div className="mb-7 flex items-center gap-3 font-mono text-[10px] tracking-[0.16em] text-[#9dffba] uppercase">
              <span className="size-2 animate-pulse rounded-full bg-[#9dffba]" /> Available for opportunities
            </div>
            <h1 className="max-w-5xl text-[clamp(3.25rem,7.1vw,7.25rem)] leading-[0.9] font-medium tracking-[-0.075em]">
              Строю цифровые
              <br />
              продукты <span className="text-white/30">от идеи</span>
              <br />
              до результата.
            </h1>
          </div>
          <div className="space-y-6 md:col-span-3 md:pb-2">
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              Алексей, Fullstack Developer. Создаю веб-приложения, SaaS-платформы и Telegram Mini Apps на
              React, TypeScript и NestJS.
            </p>
            <Button
              className="group rounded-full bg-[#9dffba] px-4 text-sm text-black hover:bg-[#b9ffce]"
              nativeButton={false}
              render={<a href="#projects" />}
            >
              Смотреть работы{' '}
              <span className="text-lg leading-none transition group-hover:translate-y-0.5">↓</span>
            </Button>
          </div>
        </section>
        <section className="grid gap-8 border-b border-white/10 py-8 md:grid-cols-12 md:py-10">
          <p className="font-mono text-[10px] tracking-[0.16em] text-white/35 uppercase md:col-span-2">
            Core stack
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-3 md:col-span-10">
            {PORTFOLIO_STACK.map((item) => (
              <span className="text-sm text-white/70" key={item}>
                {item}
              </span>
            ))}
          </div>
        </section>
        <section id="projects" className="py-16 md:py-24">
          <SectionTitle eyebrow="Selected work" title="Выбранные проекты" />
          <div className="border-t border-white/10">
            {PORTFOLIO_PROJECTS.map((project) => (
              <a
                className="group grid gap-5 border-b border-white/10 py-7 transition hover:bg-white/[0.035] md:grid-cols-12 md:items-center md:px-5 md:py-9"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                key={project.title}
              >
                <span className="font-mono text-xs text-white/30 md:col-span-1">{project.number}</span>
                <div className="md:col-span-4">
                  <h3 className="flex items-center gap-2 text-2xl tracking-[-0.05em] md:text-3xl">
                    {project.title}
                    <span className="opacity-0 transition group-hover:opacity-100">↗</span>
                  </h3>
                  <p className="mt-1 font-mono text-[10px] tracking-[0.12em] text-[#9dffba] uppercase">
                    {project.type}
                  </p>
                </div>
                <p className="max-w-sm text-base leading-relaxed text-white/55 md:col-span-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 md:col-span-3 md:justify-end">
                  {project.tags.map((tag) => (
                    <span
                      className="rounded-full border border-white/15 px-3 py-1 font-mono text-[10px] text-white/50"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>
        <section id="expertise" className="border-y border-white/10 py-16 md:py-24">
          <SectionTitle eyebrow="How I work" title="Код — не финальная цель. Важен работающий продукт." />
          <div className="grid gap-px bg-white/10 md:grid-cols-3">
            {PORTFOLIO_EXPERTISE.map((item) => (
              <article className="bg-[#0b0d10] p-6 md:min-h-64 md:p-8" key={item.title}>
                <div className="mb-12 flex items-center justify-between font-mono text-[10px] text-white/35">
                  <span>{item.number}</span>
                  <span className="text-lg text-[#9dffba]">{item.icon}</span>
                </div>
                <h3 className="mb-3 text-xl tracking-[-0.04em]">{item.title}</h3>
                <p className="max-w-xs text-sm leading-relaxed text-white/50">{item.description}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="grid gap-10 py-16 md:grid-cols-12 md:py-24">
          <p className="font-mono text-[10px] tracking-[0.16em] text-white/35 uppercase md:col-span-3">
            Experience
          </p>
          <div className="space-y-8 md:col-span-9">
            {PORTFOLIO_EXPERIENCE.map((item, index) => (
              <Experience {...item} last={index === PORTFOLIO_EXPERIENCE.length - 1} key={item.company} />
            ))}
          </div>
        </section>
        <section
          id="contact"
          className="mb-5 overflow-hidden rounded-2xl bg-[#9dffba] px-6 py-10 text-[#0b0d10] md:mb-10 md:px-10 md:py-12"
        >
          <span className="mb-12 block text-2xl md:mb-20">✦</span>
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <h2 className="text-4xl leading-[0.9] tracking-[-0.075em] md:col-span-9 md:text-7xl">
              Есть идея?
              <br />
              Давайте обсудим.
            </h2>
            <div className="space-y-1 md:col-span-3">
              {PORTFOLIO_CONTACTS.map((contact) => (
                <Button
                  className="flex h-auto w-full justify-between rounded-none border-b border-black/30 px-0 py-2 text-left text-sm font-medium hover:bg-transparent"
                  variant="ghost"
                  nativeButton={false}
                  render={
                    <a
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                    />
                  }
                  key={contact.href}
                >
                  <span>
                    <span className="mr-3 text-black/50">{contact.label}</span>
                    {contact.value}
                  </span>
                  <span>↗</span>
                </Button>
              ))}
            </div>
          </div>
        </section>
        <footer className="flex flex-col gap-2 pb-7 font-mono text-[10px] tracking-[0.12em] text-white/30 uppercase md:flex-row md:justify-between">
          <span>© 2026 Алексей</span>
          <span>Designed & built with React</span>
        </footer>
      </div>
    </main>
  )
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12 md:mb-16">
      <p className="mb-3 font-mono text-[10px] tracking-[0.16em] text-[#9dffba] uppercase">{eyebrow}</p>
      <h2 className="max-w-3xl text-4xl leading-[0.95] tracking-[-0.065em] md:text-6xl">{title}</h2>
    </div>
  )
}
function Experience({ company, role, description, last = false }: PortfolioExperience & { last?: boolean }) {
  return (
    <div className={`grid gap-3 ${last ? '' : 'border-b border-white/10 pb-7'} md:grid-cols-[1.2fr_1fr_2fr]`}>
      <h3 className="text-2xl tracking-[-0.05em]">{company}</h3>
      <span className="text-base text-white/50">{role}</span>
      <p className="text-base leading-relaxed text-white/55">{description}</p>
    </div>
  )
}
