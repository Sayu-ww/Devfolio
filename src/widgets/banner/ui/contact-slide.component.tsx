import { SharedLib, SharedUi } from '@shared'

export function ContactSlideComponent() {
  return (
    <article
      className="flex h-67.5 w-120 flex-col items-center justify-center gap-6 rounded-xl p-6 shadow-2xl transition-all duration-500 dark:shadow-2xl dark:hover:shadow-white/60"
      onClick={(e) => e.stopPropagation()}
    >
      <h1>Contacts</h1>
      <div className="flex gap-2">
        {SharedLib.Constants.CONTACTS.map((contact, index) => (
          <div
            className="flex w-full gap-2 rounded-2xl border-white/30 px-2 py-1 font-semibold shadow transition-all duration-500 hover:shadow-black/40 dark:hover:shadow-white/40"
            key={index}
          >
            <SharedUi.Link target="_blank" rel="noopener noreferrer" to={contact.link}>
              <SharedUi.Icon
                name={contact.iconName}
                className="size-20 rounded-full text-black dark:text-white"
              />
            </SharedUi.Link>
          </div>
        ))}
      </div>
    </article>
  )
}
