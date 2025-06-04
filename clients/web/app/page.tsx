import { HeroSection } from "@/components/sections/hero-section"
import { FeatureSection } from "@/components/sections/feature-section"
import { TestimonialSection } from "@/components/sections/testimonial-section"
import { CaseStudiesSection } from "@/components/sections/case-studies-section"
import { CtaSection } from "@/components/sections/cta-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <CaseStudiesSection />
      <TestimonialSection />
      <CtaSection />
    </>
  )
}

