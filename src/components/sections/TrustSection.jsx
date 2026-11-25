import React from 'react'
import { ShieldCheck, Plane, HeartHandshake } from 'lucide-react'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import { trustPillars } from '../../data/homeData'

function TrustSection() {
  const iconMap = {
    ShieldCheck: <ShieldCheck className="w-7 h-7 text-[#5F8F4A]" />,
    Plane: <Plane className="w-7 h-7 text-[#2F6E9E]" />,
    HeartHandshake: <HeartHandshake className="w-7 h-7 text-[#C2622B]" />
  }

  return (
    <section className="py-16 md:py-24 bg-[#FBE9CC]/35 border-y border-[#2A170E]/5">
      <Container>
        <SectionHeading
          eyebrow="puppy passport"
          title="Why families trust TeddyPups"
          description="Every detail is managed to ensure health, safety, and an experience full of delight."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {trustPillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white rounded-3xl p-8 border border-[#2A170E]/10 shadow-sm text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#FFFDF8] border border-[#2A170E]/10 flex items-center justify-center mb-5 shadow-inner">
                {iconMap[pillar.iconName]}
              </div>

              <h3 className="font-serif text-xl font-bold text-[#2A170E] mb-3">
                {pillar.title}
              </h3>

              <p className="text-sm text-[#5A3A28] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default TrustSection
