'use client'

import { motion } from 'framer-motion'
import { services } from '@/data/content'
import { SectionHeading } from '@/components/section-heading'
import { staggerContainer, fadeUp } from '@/animations/variants'

export function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Full-spectrum engineering, one partner"
          description="From first line of code to production scale, we design and build the systems that run modern businesses."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className="group relative flex flex-col gap-4 bg-card p-8 transition-colors duration-300 hover:bg-muted"
            >
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px scale-x-0 bg-jade-bright transition-transform duration-300 group-hover:scale-x-100" />
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-jade-bright transition-colors group-hover:border-jade/50">
                <service.icon className="h-6 w-6" strokeWidth={1.6} />
              </div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
