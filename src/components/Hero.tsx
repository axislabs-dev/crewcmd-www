'use client'

import { Github, Terminal, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export function Hero() {
  const [copied, setCopied] = useState(false)

  const copyCommand = () => {
    navigator.clipboard.writeText(
      'git clone https://github.com/axislabs-dev/crewcmd.git && cd crewcmd && pnpm install && pnpm dev:https',
    )
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-24">
      {/* Gradient background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--color-surface-300)] bg-[var(--color-surface-100)] px-4 py-1.5 text-sm text-zinc-400">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          Open Source &middot; BSL-1.1
        </div>

        {/* Headline */}
        <h1 className="text-5xl leading-tight font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Your team of 3,
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            operating like 30.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
          The AI-native workspace where humans and AI agents work side by side.
          Same task board, same org chart, same inbox.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://github.com/axislabs-dev/crewcmd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
          >
            <Github className="h-4 w-4" />
            Star on GitHub
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-surface-300)] px-6 py-3 text-sm font-semibold text-zinc-300 transition hover:border-zinc-500 hover:text-white"
          >
            See Features
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Terminal Quick Start */}
        <div className="mx-auto mt-16 max-w-2xl">
          <div className="rounded-xl border border-[var(--color-surface-300)] bg-[var(--color-surface-100)] shadow-2xl">
            {/* Terminal header */}
            <div className="flex items-center gap-2 border-b border-[var(--color-surface-300)] px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500/70" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
              <div className="h-3 w-3 rounded-full bg-green-500/70" />
              <span className="ml-2 flex items-center gap-1.5 text-xs text-zinc-500">
                <Terminal className="h-3 w-3" />
                terminal
              </span>
            </div>
            {/* Terminal body */}
            <div className="p-5 text-left font-[family-name:var(--font-mono)] text-sm">
              <button
                onClick={copyCommand}
                className="group w-full cursor-pointer text-left"
                title="Click to copy"
              >
                <div className="text-zinc-500">
                  <span className="text-cyan-400">$</span> git clone
                  https://github.com/axislabs-dev/crewcmd.git
                </div>
                <div className="text-zinc-500">
                  <span className="text-cyan-400">$</span> cd crewcmd
                </div>
                <div className="text-zinc-500">
                  <span className="text-cyan-400">$</span> pnpm install
                </div>
                <div className="text-zinc-500">
                  <span className="text-cyan-400">$</span> pnpm dev:https
                </div>
                <div className="mt-2 text-xs text-zinc-600 transition group-hover:text-zinc-400">
                  {copied ? '✓ Copied!' : 'Click to copy'}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
