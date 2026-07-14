'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { MagneticButton } from '@/components/magnetic-button'
import { staggerContainer, fadeUp } from '@/animations/variants'

export function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-32 sm:py-44">
      <div className="absolute inset-0 grid-lines opacity-50" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-jade/15 blur-[130px]"
        aria-hidden="true"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center lg:px-8"
      >
        <motion.span
          variants={fadeUp}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs tracking-wide text-muted-foreground backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-jade-bright" />
          Let&apos;s talk
        </motion.span>

        <motion.h2
          variants={fadeUp}
          className="text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl"
        >
          Let&apos;s Build The <span className="text-gradient-jade">Future</span> Together
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-xl text-lg text-muted-foreground"
        >
          Have a product to build or a system to modernize? Our team is ready to
          engineer your next digital ecosystem.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href="mailto:hello@gridsphere.in">
            Start a project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </MagneticButton>
          <MagneticButton href="#products" variant="ghost">
            Explore our work
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  )
}
