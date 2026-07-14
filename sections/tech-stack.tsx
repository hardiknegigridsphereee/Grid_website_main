'use client'

import { motion } from 'framer-motion'
import { technologies } from '@/data/content'
import { SectionHeading } from '@/components/section-heading'
import { staggerContainer, scaleIn } from '@/animations/variants'

export function TechStack() {
  return (
    <section className="relative border-y border-border bg-card/30 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Technology"
          title="A modern, battle-tested stack"
          description="We build on proven, scalable technologies chosen to keep your systems fast, secure and maintainable."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech}
              variants={scaleIn}
              whileHover={{ scale: 1.04 }}
              className="flex items-center justify-center rounded-2xl border border-border bg-background px-4 py-8 text-center transition-colors hover:border-jade/50"
            >
              <span className="font-display text-lg font-medium text-foreground/90">
                {tech}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
