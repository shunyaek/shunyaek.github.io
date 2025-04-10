import { HeroSection } from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { CtaSection } from "@/components/cta-section"
import { BlogSection } from "@/components/blog-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      {/* <CaseStudiesSection /> */}
      {/* <BlogSection /> */}
      <TestimonialSection />
      <CtaSection />
    </>
  )
}

