import { Github } from 'lucide-react'

const links = [
  {
    title: 'Product',
    items: [
      { label: 'Features', href: '#features' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Changelog', href: '#' },
    ],
  },
  {
    title: 'Community',
    items: [
      {
        label: 'GitHub',
        href: 'https://github.com/axislabs-dev/crewcmd',
      },
      { label: 'Discord', href: '#' },
      { label: 'Twitter', href: '#' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'Axislabs', href: 'https://axislabs.dev' },
      { label: 'Docs', href: '#' },
      { label: 'Blog', href: '#' },
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
              The AI-native workspace where humans and AI agents work side by
              side.
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
            Built with Next.js, Payload CMS, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
