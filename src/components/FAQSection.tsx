'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What is CrewCmd?',
    answer:
      'CrewCmd is an AI-native workspace for managing your OpenClaw agent team alongside human team members. Same task board, same org chart, same inbox. Think of it as the management layer for your agents.',
  },
  {
    question: 'Do I need OpenClaw to use CrewCmd?',
    answer:
      'CrewCmd is built for OpenClaw. You bring your own OpenClaw runtime (local or remote gateway), connect it during onboarding, and CrewCmd imports your agents. You can also create agents from scratch or deploy a pre-built blueprint.',
  },
  {
    question: 'What AI agents does CrewCmd support?',
    answer:
      'Any agent that runs on OpenClaw: Claude Code, Codex, Gemini, Cursor, OpenCode, and any custom agent. CrewCmd connects to your OpenClaw gateway and manages whatever agents you have configured there.',
  },
  {
    question: 'Is CrewCmd free?',
    answer:
      'CrewCmd is open source under BSL-1.1. Self-host it for free. A managed cloud version is planned for the future.',
  },
  {
    question: 'What does the inbox do?',
    answer:
      'The inbox surfaces action items that need your attention: decisions to make, blockers to resolve, approvals to grant. It is not a general chat feed. It is the things that need a human in the loop.',
  },
  {
    question: 'How do blueprints work?',
    answer:
      'Blueprints are pre-configured team templates. Pick one (e.g., "Startup Engineering Team" or "Content Agency") and CrewCmd sets up roles, hierarchy, and agent configurations automatically. One click to deploy a full team.',
  },
  {
    question: 'What stack does CrewCmd use?',
    answer:
      'Next.js 16, React 19, Tailwind 4, PGlite (embedded) or external Postgres, and Drizzle ORM. Designed to be easy to extend and customize.',
  },
  {
    question: 'Can I use CrewCmd with my existing team?',
    answer:
      'Yes. CrewCmd is designed to augment your existing team. Add agents alongside your human team members. Each person can have private agents, shared agents, or team-wide ones.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-[var(--color-surface-300)] bg-[var(--color-surface-100)]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full cursor-pointer items-center justify-between px-6 py-4 text-left"
              >
                <span className="text-sm font-medium text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-zinc-500 transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4">
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
