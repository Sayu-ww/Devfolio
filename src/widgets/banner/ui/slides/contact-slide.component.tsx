import { SharedLib, SharedUi } from '@shared'

export function ContactSlideComponent() {
  return (
    <article className="relative isolate flex size-full min-h-0 flex-col justify-between overflow-hidden p-4 transition-all duration-500 sm:p-8 lg:p-10">
      {/* Glow */}
      <div aria-hidden="true" className="banner-glow-right pointer-events-none absolute inset-0 -z-10" />

      {/* Grid */}
      <div
        aria-hidden="true"
        className="banner-grid-32 sm:banner-grid-40 pointer-events-none absolute inset-0 -z-10"
      />

      {/* Header */}
      <header className="border-border flex items-center justify-between gap-3 border-b pb-3 sm:pb-4">
        <span className="text-muted-foreground text-2xs tracking-extra-wide font-mono uppercase sm:text-xs">
          Get in touch
        </span>

        <span className="text-muted-foreground text-2xs font-mono sm:text-xs">CONTACTS / 004</span>
      </header>

      {/* Main */}
      <div className="py-4 sm:py-8">
        <p className="text-muted-foreground text-2xs tracking-extra-wide mb-3 font-mono uppercase sm:text-xs">
          Open to opportunities
        </p>

        <h2 className="text-3xl font-semibold tracking-tight sm:text-6xl">
          Let&apos;s
          <br />
          <span className="text-muted-foreground">connect.</span>
        </h2>

        <p className="text-muted-foreground mt-4 max-w-md text-sm leading-6 sm:text-base">
          Have a project in mind or want to discuss an opportunity? Find me here.
        </p>
      </div>

      {/* Contact links */}
      <div
        className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3"
        onClick={(event) => event.stopPropagation()}
      >
        {SharedLib.Constants.CONTACTS.map((contact, index) => (
          <SharedUi.Link
            key={contact.link}
            to={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group border-border hover:bg-foreground hover:text-background flex min-w-0 flex-col gap-3 border p-3 transition-all duration-300 sm:gap-5 sm:p-5"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-muted-foreground group-hover:text-background/60 text-2xs font-mono transition-colors">
                {String(index + 1).padStart(2, '0')}
              </span>

              <span
                aria-hidden="true"
                className="text-lg transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </div>

            <div className="flex items-center gap-3">
              <SharedUi.Icon
                name={contact.iconName}
                className="size-7 shrink-0 transition-transform duration-300 group-hover:scale-110 sm:size-8"
              />

              <span className="min-w-0 truncate text-sm font-medium">{contact.iconName}</span>
            </div>
          </SharedUi.Link>
        ))}
      </div>

      {/* Footer */}
      <footer className="border-border mt-3 flex flex-wrap items-center justify-between gap-2 border-t pt-3 sm:mt-6 sm:gap-3 sm:pt-4">
        <span className="text-muted-foreground text-2xs font-mono sm:text-xs">RESPONSE / OPEN</span>

        <span className="text-muted-foreground text-2xs font-mono sm:text-xs">SAYU-WW © 2026</span>
      </footer>
    </article>
  )
}
