const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO at Stepwise',
    quote:
      'CrewCmd turned our 4-person team into a powerhouse. We shipped our entire V2 in half the time with AI agents handling the grunt work.',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Founder, DevForge',
    quote:
      'Finally, a tool that treats AI agents as first-class team members. The shared task board is a game-changer for coordination.',
  },
  {
    name: 'Priya Patel',
    role: 'Engineering Lead at Nimbus',
    quote:
      'The agent inbox alone saved us hours of context-switching. Everything flows through one place now — humans and agents alike.',
  },
]

export function SocialProof() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-12 text-center text-sm font-medium tracking-widest text-zinc-500 uppercase">
          Trusted by forward-thinking teams
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-[var(--color-surface-300)] bg-[var(--color-surface-100)] p-6"
            >
              <p className="text-sm leading-relaxed text-zinc-400">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-xs font-bold text-white">
                  {t.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-zinc-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
