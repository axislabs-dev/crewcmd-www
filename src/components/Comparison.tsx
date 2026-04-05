import { Check, X } from 'lucide-react'

const rows = [
  {
    feature: 'Humans + agents on same task board',
    without: false,
    with: true,
  },
  { feature: 'Centralized agent inbox', without: false, with: true },
  { feature: 'Bring your own AI agents', without: false, with: true },
  { feature: 'Visual team org chart', without: false, with: true },
  { feature: 'Agent budgets & guardrails', without: false, with: true },
  { feature: 'One-click team deployment', without: false, with: true },
  { feature: 'Skills marketplace', without: false, with: true },
  { feature: 'Context-switching between tools', without: true, with: false },
  { feature: 'Manual agent coordination', without: true, with: false },
  { feature: 'Fragmented communication', without: true, with: false },
]

export function Comparison() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            The CrewCmd difference
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Stop juggling tools. Start working as one crew.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-[var(--color-surface-300)]">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--color-surface-300)] bg-[var(--color-surface-100)]">
                <th className="px-6 py-4 text-left text-sm font-medium text-zinc-400">
                  &nbsp;
                </th>
                <th className="px-6 py-4 text-center text-sm font-medium text-zinc-500">
                  Without CrewCmd
                </th>
                <th className="px-6 py-4 text-center text-sm font-medium text-cyan-400">
                  With CrewCmd
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={
                    i % 2 === 0
                      ? 'bg-[var(--color-surface-50)]'
                      : 'bg-[var(--color-surface-100)]'
                  }
                >
                  <td className="px-6 py-3.5 text-sm text-zinc-300">
                    {row.feature}
                  </td>
                  <td className="px-6 py-3.5 text-center">
                    {row.without ? (
                      <Check className="mx-auto h-4 w-4 text-red-400/70" />
                    ) : (
                      <X className="mx-auto h-4 w-4 text-zinc-600" />
                    )}
                  </td>
                  <td className="px-6 py-3.5 text-center">
                    {row.with ? (
                      <Check className="mx-auto h-4 w-4 text-cyan-400" />
                    ) : (
                      <X className="mx-auto h-4 w-4 text-zinc-600" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
