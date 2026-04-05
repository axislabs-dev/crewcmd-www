import { Hero } from '@/components/Hero'
import { SocialProof } from '@/components/SocialProof'
import { Features } from '@/components/Features'
import { HowItWorks } from '@/components/HowItWorks'
import { Comparison } from '@/components/Comparison'
import { FAQSection } from '@/components/FAQSection'
import { CTA } from '@/components/CTA'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
      <Comparison />
      <FAQSection />
      <CTA />
      <Footer />
    </main>
  )
}
