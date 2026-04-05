import {
  Rocket,
  Bot,
  Inbox,
  Store,
  Shield,
  LayoutGrid,
  GitBranch,
  DollarSign,
  Mic,
  Sparkles,
} from 'lucide-react'

const features = [
  {
    icon: Rocket,
    title: 'One-Click Team Deploy',
    description:
      'Pre-built blueprints get your human+agent team running in minutes, not days.',
  },
  {
    icon: Bot,
    title: 'Bring Your Own Agents',
    description:
      'Claude Code, Codex, Gemini, Cursor, OpenCode — use whatever agents you already love.',
  },
  {
    icon: Inbox,
    title: 'Agent Inbox',
    description:
      'Centralized comms hub. Every agent message, every human reply, one place.',
  },
  {
    icon: Store,
    title: 'Skills Marketplace',
    description:
      'Browse ClawHub, skills.sh, and GitHub for plug-and-play agent capabilities.',
  },
  {
    icon: Shield,
    title: 'Access Control',
    description:
      'Private, shared, or team-wide agents. You decide who sees and controls what.',
  },
  {
    icon: LayoutGrid,
    title: 'Shared Task Board',
    description:
      'Humans and agents on the same board. See who is doing what at a glance.',
  },
  {
    icon: GitBranch,
    title: 'Visual Org Chart',
    description:
      'Map your team structure — humans and agents — and see the hierarchy.',
  },
  {
    icon: DollarSign,
    title: 'Budgets & Guardrails',
    description:
      'Set spending limits and behavioral guardrails for every agent.',
  },
  {
    icon: Mic,
    title: 'Voice Chat',
    description:
      'Talk to your agents naturally. Voice in, structured actions out.',
  },
  {
    icon: Sparkles,
    title: 'Simple & Pro Modes',
    description:
      'Simple mode for quick tasks. Pro mode for full control and customization.',
  },
]

export function Features() {
  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Everything your crew needs
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            A complete workspace for humans and AI agents working together.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-xl border border-[var(--color-surface-300)] bg-[var(--color-surface-100)] p-6 transition hover:border-cyan-500/30 hover:bg-[var(--color-surface-200)]"
            >
              <div className="mb-4 inline-flex rounded-lg bg-cyan-500/10 p-2.5 text-cyan-400 transition group-hover:bg-cyan-500/20">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-white">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
