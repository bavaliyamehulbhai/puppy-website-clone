import React from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, ArrowRight } from 'lucide-react'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import { journeySteps } from '../../data/homeData'

function JourneySection() {
  return (
    <section className="py-16 md:py-24 bg-[#FFFDF8]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <SectionHeading
            eyebrow="simple & joyful"
            title="Your puppy journey"
            description="A premium, step-by-step concierge experience. We make adoption simple, secure, and purely joyful."
            align="left"
            className="mb-0"
          />
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#C2622B] hover:text-[#A85221] group transition"
          >
            <span>Learn how it works</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {journeySteps.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-3xl p-7 border border-[#2A170E]/10 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#FFECC8] text-[#5A301B] font-serif font-bold text-lg flex items-center justify-center mb-6">
                  {item.step}
                </div>

                <h3 className="font-serif text-xl font-bold text-[#2A170E] mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-[#5A3A28] leading-relaxed mb-6">
                  {item.description}
                </p>

                {item.breeds && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.breeds.map((b) => (
                      <Link
                        key={b}
                        to={`/puppies?breed=${b.toLowerCase().replace(' ', '-')}`}
                        className="text-xs px-3 py-1 rounded-full bg-[#FFFDF8] border border-[#2A170E]/15 text-[#5A301B] hover:border-[#C2622B] hover:text-[#C2622B] transition"
                      >
                        {b}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/919898124987?text=Hi%20TeddyPups%2C%20I&#x27;d%20like%20to%20discuss%20adopting%20a%20puppy."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#FFECC8] text-[#5A301B] hover:bg-[#F8DBAE] px-7 py-3 rounded-full text-sm font-semibold transition"
          >
            <MessageCircle className="w-4 h-4 text-[#C2622B]" />
            <span>Say hello on WhatsApp</span>
          </a>
        </div>
      </Container>
    </section>
  )
}

export default JourneySection
