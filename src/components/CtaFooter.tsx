const footerCols: {
  title: string
  links: { label: string; href: string; external?: boolean }[]
}[] = [
  {
    title: 'Product',
    links: [
      { label: 'Overview', href: '#product' },
      { label: 'How it works', href: '#how-it-works' },
      {
        label: 'Prototype',
        href: 'https://spindle-org.github.io/spindle-prototype/',
        external: true,
      },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Team', href: '#team' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Request access', href: '#cta' },
    ],
  },
]

export function CtaFooter() {
  return (
    <footer className="bg-black text-zinc-400">
      <div
        id="cta-form"
        className="scroll-mt-24 mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="text-center">
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.4em] text-zinc-600">
            download the future
          </p>
          <h2 className="font-display mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
            request
            <br />
            <span className="text-zinc-600">early access.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-zinc-500">
            Leave your email for early access, pilots, and design partners.
            Connect this form to your marketing automation or API when ready.
          </p>
          <form
            className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row sm:justify-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              autoComplete="email"
              className="min-h-12 flex-1 rounded-full border border-white/10 bg-white/[0.04] px-5 text-[14px] text-white placeholder:text-zinc-600 focus:border-white/25 focus:outline-none focus:ring-2 focus:ring-white/10 sm:max-w-xs"
            />
            <button
              type="submit"
              className="min-h-12 rounded-full bg-white px-8 text-[12px] font-semibold uppercase tracking-[0.15em] text-black transition-colors hover:bg-zinc-200"
            >
              notify me
            </button>
          </form>
        </div>

        <div className="mt-24 grid gap-10 border-t border-white/[0.08] pt-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="font-display flex items-center gap-2 text-lg font-bold text-white">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-[13px]"
                aria-hidden
              >
                S
              </span>
              spindle
            </div>
            <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-zinc-600">
              Agentic execution for maintenance and frontline operations—governed
              AI, multimodal capture, and traceable decisions.
            </p>
          </div>
          {footerCols.map((col) => (
            <div key={col.title}>
              <p className="font-display text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-600">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[14px] text-zinc-500 transition-colors hover:text-white"
                      {...(link.external
                        ? { target: '_blank' as const, rel: 'noreferrer' }
                        : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-8 text-[12px] text-zinc-600 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Spindle. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <span className="cursor-default">Privacy</span>
            <span className="cursor-default">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
