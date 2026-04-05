import { Github } from 'lucide-react'

const links = [
  {
    title: 'Product',
    items: [
      { label: 'Features', href: '#features' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Community',
    items: [
      {
        label: 'GitHub',
        href: 'https://github.com/axislabs-dev/crewcmd',
      },
      {
        label: 'Twitter',
        href: 'https://x.com/roger_creator',
      },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'Axislabs', href: 'https://axislabs.dev' },
      {
        label: 'OpenClaw',
        href: 'https://github.com/openclaw/openclaw',
      },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-surface-300)] px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                <Github className="h-4 w-4" />
              </div>
              <span className="text-lg font-bold text-white">CrewCmd</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-zinc-500">
              The AI-native workspace for managing your OpenClaw agent team.
            </p>
          </div>

          {/* Link columns */}
          {links.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-sm font-semibold text-zinc-300">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm text-zinc-500 transition hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-surface-300)] pt-8 sm:flex-row">
          <p className="text-sm text-zinc-600">
            &copy; {new Date().getFullYear()} Axislabs. BSL-1.1 License.
          </p>
          <p className="text-sm text-zinc-600">
            Built by{' '}
            <a
              href="https://rogerchappel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              Roger Chappel
            </a>{' '}
            &amp; Community.
          </p>
        </div>
      </div>
    </footer>
  )
}
