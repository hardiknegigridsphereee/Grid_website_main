'use client'

import { motion, type Variants } from 'framer-motion'
import { fadeUp } from '@/animations/variants'

interface RevealProps {
  children: React.ReactNode
  className?: string
  variants?: Variants
  delay?: number
  once?: boolean
  as?: 'div' | 'section' | 'li' | 'article'
}

export function Reveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  once = true,
  as = 'div',
}: RevealProps) {
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '-80px' }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  )
}
