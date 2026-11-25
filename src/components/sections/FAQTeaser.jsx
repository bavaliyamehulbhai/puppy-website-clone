import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowRight } from 'lucide-react'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import { faqData } from '../../data/faqData'

function FAQTeaser() {
  const [openId, setOpenId] = useState('1')
  const previewFaqs = faqData.slice(0, 5)

  return (
    <section className="py-16 md:py-24 bg-[#FDF8EF]/60 border-t border-[#2A170E]/5">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <SectionHeading
            eyebrow="clear answers"
            title="Questions, answered"
            description="Everything you need to know about adopting your teacup puppy in Dubai."
            align="left"
            className="mb-0"
          />
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#C2622B] hover:text-[#A85221] group transition"
          >
            <span>Read all questions</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {previewFaqs.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#2A170E]/10 overflow-hidden shadow-sm transition"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#2A170E]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C2622B] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm sm:text-base text-[#5A3A28] leading-relaxed border-t border-[#2A170E]/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default FAQTeaser
