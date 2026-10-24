import type { Metadata } from 'next'
import { SiteHeader } from '@/components/landing/site-header'
import { Hero } from '@/components/landing/hero'
import {
  GraduatesSection,
  HowSection,
  NestSection,
  OpenSection,
  PartnersSection,
  PillarsSection,
  ProblemSection,
} from '@/components/landing/sections'
import { PartnerSection } from '@/components/landing/partner-form'
import { SiteFooter } from '@/components/landing/site-footer'

export const metadata: Metadata = {
  title: 'Kestrel Collective: experience you can verify, outcomes you can measure',
  description:
    'Kestrel turns real digital and technology challenges from universities and organisations into structured, supported projects. Graduates build verified evidence of what they can do. Partners get work delivered.',
}

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:rounded-md focus:bg-sidebar focus:px-4 focus:py-2 focus:text-sidebar-foreground"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main" className="scroll-smooth">
        <Hero />
        <ProblemSection />
        <HowSection />
        <PillarsSection />
        <PartnersSection />
        <GraduatesSection />
        <NestSection />
        <OpenSection />
        <PartnerSection />
      </main>
      <SiteFooter />
    </>
  )
}
