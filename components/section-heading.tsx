'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/animations/variants'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow: string
  title: React.ReactNode
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      <motion.div variants={fadeUp} className="flex items-center gap-3">
        <span className="h-px w-8 bg-jade" />
        <span className="text-xs font-medium uppercase tracking-[0.28em] text-jade-bright">
          {eyebrow}
        </span>
      </motion.div>
      <motion.h2
        variants={fadeUp}
        className="max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className={cn(
            'max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}
