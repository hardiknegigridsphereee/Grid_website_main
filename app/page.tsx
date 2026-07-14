import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Hero } from '@/sections/hero'
import { Metrics } from '@/sections/metrics'
import { Services } from '@/sections/services'
import { Products } from '@/sections/products'
import { Industries } from '@/sections/industries'
import { TechStack } from '@/sections/tech-stack'
import { Partnerships } from '@/sections/partnerships'
import { FeaturedProjects } from '@/sections/featured-projects'
import { FinalCTA } from '@/sections/final-cta'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative bg-background">
        <Hero />
        <Metrics />
        <Services />
        <Products />
        <Industries />
        <TechStack />
        <Partnerships />
        <FeaturedProjects />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
