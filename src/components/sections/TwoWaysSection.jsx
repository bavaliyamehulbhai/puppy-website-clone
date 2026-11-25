import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Plane, ArrowRight } from 'lucide-react'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import { twoWaysData } from '../../data/homeData'

function TwoWaysSection() {
  return (
    <section className="py-16 md:py-24 bg-[#FDF8EF]/60">
      <Container>
        <SectionHeading
          eyebrow="choose your way"
          title="Two ways to meet your puppy"
          description="Whether you wish to fall in love in person in our showroom or order a rare overseas teacup breed, we handle every detail."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {twoWaysData.map((card) => {
            const isLocal = card.id === 'local'
            return (
              <div
                key={card.id}
                className={`rounded-3xl p-8 sm:p-10 border border-[#2A170E]/10 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between ${card.bgTint} bg-white`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-script text-sm font-semibold text-[#C2622B] px-3.5 py-1 rounded-full bg-[#FFECC8]">
                      {card.badge}
                    </span>
                    {isLocal ? (
                      <MapPin className="w-5 h-5 text-[#C2622B]" />
                    ) : (
                      <Plane className="w-5 h-5 text-[#2F6E9E]" />
                    )}
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2A170E] mb-3">
                    {card.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#5A3A28] leading-relaxed mb-8">
                    {card.description}
                  </p>
                </div>

                <div>
                  <Link
                    to={card.link}
                    className="inline-flex items-center gap-2 font-semibold text-sm text-[#2A170E] group hover:text-[#C2622B] transition"
                  >
                    <span>{card.buttonText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default TwoWaysSection
