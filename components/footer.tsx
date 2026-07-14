'use client'

import { Hexagon, Mail, Globe, MessageCircle } from 'lucide-react'
import { navLinks } from '@/data/content'

const socials = [
  { icon: Mail, href: 'mailto:hello@gridsphere.in', label: 'Email' },
  { icon: MessageCircle, href: '#', label: 'Chat' },
  { icon: Globe, href: '#', label: 'Website' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div className="space-y-4">
          <a href="#top" className="flex items-center gap-2">
            <Hexagon className="h-6 w-6 text-jade-bright" strokeWidth={1.6} />
            <span className="font-display text-lg font-semibold">GridSphere</span>
          </a>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Engineering intelligent digital ecosystems — AI products, ERP systems,
            enterprise software and next-generation platforms.
          </p>
          <div className="flex items-center gap-3 pt-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-jade/60 hover:text-jade-bright"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
            Explore
          </h3>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-jade-bright"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <a href="mailto:hello@gridsphere.in" className="transition-colors hover:text-jade-bright">
                hello@gridsphere.in
              </a>
            </li>
            <li>Noida, India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row lg:px-8">
          <span>© {new Date().getFullYear()} GridSphere. All rights reserved.</span>
          <span>Engineering Intelligent Digital Ecosystems</span>
        </div>
      </div>
    </footer>
  )
}
