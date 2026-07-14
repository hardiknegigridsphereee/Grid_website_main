'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { products } from '@/data/content'
import { SectionHeading } from '@/components/section-heading'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function Products() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      // Horizontal pinned scroll on larger screens only.
      mm.add('(min-width: 768px)', () => {
        const getScrollAmount = () => track.scrollWidth - window.innerWidth + 96

        const tween = gsap.to(track, {
          x: () => -getScrollAmount(),
          ease: 'none',
        })

        ScrollTrigger.create({
          trigger: section,
          start: 'top top',
          end: () => `+=${getScrollAmount()}`,
          pin: true,
          scrub: 1,
          animation: tween,
          invalidateOnRefresh: true,
        })
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section id="products" ref={sectionRef} className="relative overflow-hidden py-28 sm:py-0 md:min-h-screen md:py-0">
      <div className="mx-auto max-w-7xl px-6 pt-4 md:pt-28 lg:px-8">
        <SectionHeading
          eyebrow="Products"
          title="Platforms built to ship value"
          description="A growing suite of production products powering agriculture, education, logistics and the enterprise."
        />
      </div>

      <div className="mt-14 md:mt-16">
        <div
          ref={trackRef}
          className="flex flex-col gap-8 px-6 md:flex-row md:gap-10 md:px-12"
        >
          {products.map((product, i) => (
            <article
              key={product.name}
              className="group relative flex w-full shrink-0 flex-col overflow-hidden rounded-3xl border border-border bg-card md:w-[34rem]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={product.image || '/placeholder.svg'}
                  alt={`${product.name} interface`}
                  fill
                  sizes="(max-width: 768px) 100vw, 544px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-border bg-background/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm">
                  0{i + 1}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-7">
                <h3 className="text-2xl font-semibold">{product.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={product.link}
                  className="mt-auto inline-flex w-fit items-center gap-1.5 pt-4 text-sm font-medium text-jade-bright transition-colors hover:text-foreground"
                >
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
