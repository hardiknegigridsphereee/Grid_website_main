'use client'

import { useRef, type MouseEvent } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MagneticButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'ghost'
  className?: string
  onClick?: () => void
}

export function MagneticButton({
  children,
  href,
  variant = 'primary',
  className,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 250, damping: 18 })
  const springY = useSpring(y, { stiffness: 250, damping: 18 })

  const handleMove = (e: MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    x.set(relX * 0.3)
    y.set(relY * 0.3)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className={cn(
        'group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-colors',
        variant === 'primary'
          ? 'bg-jade text-jade-foreground hover:bg-jade-bright'
          : 'border border-border bg-transparent text-foreground hover:border-jade/60 hover:text-jade-bright',
        className,
      )}
    >
      {children}
    </motion.a>
  )
}
