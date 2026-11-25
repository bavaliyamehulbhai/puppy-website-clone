import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import MeetPupsSection from '../components/sections/MeetPupsSection'
import TwoWaysSection from '../components/sections/TwoWaysSection'
import JourneySection from '../components/sections/JourneySection'
import TrustSection from '../components/sections/TrustSection'
import HappyFamiliesTeaser from '../components/sections/HappyFamiliesTeaser'
import FAQTeaser from '../components/sections/FAQTeaser'
import CTASection from '../components/sections/CTASection'

function Home() {
  return (
    <>
      {/* 01. Hero Section */}
      <HeroSection />

      {/* 02. Meet the Pups (Featured Grid) */}
      <MeetPupsSection />

      {/* 03. Two Ways to Meet Your Puppy */}
      <TwoWaysSection />

      {/* 04. Your Puppy Journey (Concierge Steps) */}
      <JourneySection />

      {/* 05. Why Families Trust TeddyPups (Trust Pillars) */}
      <TrustSection />

      {/* 06. Happy Families & Puppies */}
      <HappyFamiliesTeaser />

      {/* 07. Questions, Answered (FAQ Accordion Teaser) */}
      <FAQTeaser />

      {/* 08. Ready to meet your new best friend? (Final CTA) */}
      <CTASection />
    </>
  )
}

export default Home
