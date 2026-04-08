const nav = [
  { href: '#product', label: 'Product' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#team', label: 'Team' },
  { href: '#faq', label: 'FAQ' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-[#FAFAFA]/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-zinc-900"
        >
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-[13px] font-bold text-white shadow-sm"
            aria-hidden
          >
            S
          </span>
          Spindle
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14px] font-medium text-zinc-600 transition-colors hover:text-indigo-700"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://spindle-org.github.io/spindle-prototype/"
            className="hidden text-[14px] font-medium text-zinc-600 hover:text-indigo-700 sm:inline"
            target="_blank"
            rel="noreferrer"
          >
            Prototype
          </a>
          <a
            href="#cta"
            className="rounded-lg bg-indigo-600 px-3 py-2 text-[14px] font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 sm:px-4"
          >
            Request access
          </a>
        </div>
      </div>
    </header>
  )
}
