'use client'

import { motion } from 'framer-motion'
import { metrics } from '@/data/content'
import { AnimatedCounter } from '@/components/animated-counter'
import { staggerContainer, fadeUp } from '@/animations/variants'

export function Metrics() {
  return (
    <section className="relative border-y border-border bg-card/30 py-20 sm:py-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-12 px-6 lg:grid-cols-4 lg:px-8"
      >
        {metrics.map((metric) => (
          <motion.div key={metric.label} variants={fadeUp} className="flex flex-col gap-2">
            <span className="font-display text-5xl font-semibold text-gradient-jade sm:text-6xl">
              <AnimatedCounter value={metric.value} suffix={metric.suffix} />
            </span>
            <span className="text-sm text-muted-foreground">{metric.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
