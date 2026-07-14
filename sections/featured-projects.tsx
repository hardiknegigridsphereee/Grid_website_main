'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/data/content'
import { SectionHeading } from '@/components/section-heading'
import { staggerContainer, fadeUp } from '@/animations/variants'

export function FeaturedProjects() {
  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured work"
          title="Projects that moved the needle"
          description="A selection of case studies where engineering translated directly into measurable outcomes."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 grid gap-6 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 640px"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-jade-bright">
                      {project.category}
                    </span>
                    <h3 className="mt-1 text-2xl font-semibold">{project.title}</h3>
                  </div>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-jade-bright transition-all duration-300 group-hover:border-jade/60 group-hover:bg-jade group-hover:text-jade-foreground">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
