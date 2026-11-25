import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import PuppyCard from '../common/PuppyCard'
import { puppyData } from '../../data/puppyData'

function MeetPupsSection() {
  const availablePuppies = puppyData.filter(p => p.status === 'Available').slice(0, 6)

  return (
    <section className="py-16 md:py-24 bg-[#FFFDF8] border-t border-[#2A170E]/5">
      <Container>
        {/* Section Header with CTA on right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-4">
          <div>
            <SectionHeading
              eyebrow="available right now"
              title="Meet the pups"
              description="Real puppies, real photos, looking for their families right now."
              align="left"
              className="mb-0"
            />
          </div>
          <div>
            <Link
              to="/puppies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#C2622B] hover:text-[#A85221] group transition"
            >
              <span>See all available puppies</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 6-Puppy Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {availablePuppies.map((puppy) => (
            <PuppyCard key={puppy.id} puppy={puppy} />
          ))}
        </div>

        {/* Bottom Mobile Button */}
        <div className="mt-10 text-center md:hidden">
          <Link
            to="/puppies"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#C2622B] text-white px-6 py-3 rounded-full text-sm font-semibold"
          >
            <span>See all {puppyData.length} available puppies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default MeetPupsSection
