const nav = [
  { href: '#product', label: 'Platform' },
  { href: '#how-it-works', label: 'Execution' },
  { href: '#markets', label: 'Markets' },
  { href: '#team', label: 'Team' },
  { href: '#faq', label: 'FAQ' },
]

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#dadada] bg-[#f9fafb]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="font-display flex items-center gap-2 text-[15px] font-bold tracking-tight text-[#2f4366]"
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2f4366]/20 bg-[#2f4366] text-[13px] text-[#f9fafb]"
            aria-hidden
          >
            S
          </span>
          spindle
        </a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#2f4366]/70 transition-colors hover:text-[#2f4366]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="https://spindle-org.github.io/spindle-prototype/"
            className="hidden text-[11px] font-semibold uppercase tracking-[0.15em] text-[#2f4366]/70 transition-colors hover:text-[#2f4366] md:inline"
            target="_blank"
            rel="noreferrer"
          >
            prototype
          </a>
          <a
            href="#cta"
            className="rounded-full border border-[#2f4366] bg-[#2f4366] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#f9fafb] transition-colors hover:bg-[#1a475c] sm:px-5"
          >
            request access
          </a>
        </div>
      </div>
    </header>
  )
}
