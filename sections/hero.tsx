'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { AnimatedBackground } from '@/components/animated-background'
import { MagneticButton } from '@/components/magnetic-button'
import { staggerContainer, fadeUp } from '@/animations/variants'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 160])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0 grid-lines opacity-60" aria-hidden="true" />
      <AnimatedBackground />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-jade/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent"
        aria-hidden="true"
      />

      <motion.div
        style={{ y, opacity }}
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 lg:px-8"
      >
        <motion.div
          variants={fadeUp}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-jade-bright" />
          <span className="text-xs tracking-wide text-muted-foreground">
            Software · AI · Enterprise Platforms
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="max-w-4xl text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl xl:text-8xl"
        >
          <span className="text-gradient-jade">Engineering</span> Intelligent
          Digital Ecosystems
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          GridSphere builds AI products, ERP systems, enterprise software,
          tracking solutions and next-generation digital platforms.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
          <MagneticButton href="#products">
            Explore Products
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </MagneticButton>
          <MagneticButton href="#projects" variant="ghost">
            View Projects
            <ArrowUpRight className="h-4 w-4" />
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Scroll
        </span>
        <span className="relative h-10 w-px overflow-hidden bg-border">
          <motion.span
            className="absolute inset-x-0 top-0 h-4 bg-jade-bright"
            animate={{ y: [-16, 40] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.div>
    </section>
  )
}
