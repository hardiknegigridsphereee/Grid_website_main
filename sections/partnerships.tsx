'use client'

import { partners } from '@/data/content'

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const items = [...partners, ...partners]
  return (
    <div className="flex overflow-hidden">
      <div
        className="flex shrink-0 items-center gap-14 pr-14 animate-marquee"
        style={{
          ['--marquee-duration' as string]: '38s',
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {items.map((partner, i) => (
          <span
            key={`${partner}-${i}`}
            className="whitespace-nowrap font-display text-2xl font-medium text-muted-foreground/70 transition-colors hover:text-foreground sm:text-3xl"
          >
            {partner}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Partnerships() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto mb-12 max-w-7xl px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-jade" />
          <span className="text-xs font-medium uppercase tracking-[0.28em] text-jade-bright">
            Partnerships
          </span>
        </div>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          Trusted by teams and powered by the platforms shaping the future of software.
        </p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent sm:w-40" />
        <div className="flex flex-col gap-8">
          <MarqueeRow />
          <MarqueeRow reverse />
        </div>
      </div>
    </section>
  )
}
