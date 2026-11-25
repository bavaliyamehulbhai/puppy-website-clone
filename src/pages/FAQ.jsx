import React, { useState, useMemo } from 'react'
import { Search, ChevronDown, MessageCircle, HelpCircle } from 'lucide-react'
import Container from '../components/common/Container'
import { faqData } from '../data/faqData'

function FAQ() {
  const [searchTerm, setSearchTerm] = useState('')
  const [openIds, setOpenIds] = useState({ '1': true, '2': true })

  const toggleAccordion = (id) => {
    setOpenIds(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const filteredFaqs = useMemo(() => {
    if (!searchTerm.trim()) return faqData
    const term = searchTerm.toLowerCase()
    return faqData.filter(
      f => f.question.toLowerCase().includes(term) || f.answer.toLowerCase().includes(term)
    )
  }, [searchTerm])

  return (
    <div className="py-12 md:py-20 bg-[#FFFDF8] min-h-screen">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-script text-base text-[#C2622B] mb-2 block">
            sniff out a question
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2A170E] tracking-tight mb-4">
            Questions & Answers
          </h1>
          <p className="text-base text-[#5A3A28] leading-relaxed">
            Can't find what you're looking for? Message us on WhatsApp — our adoption team is available 24/7.
          </p>

          {/* Search Input */}
          <div className="mt-8 max-w-lg mx-auto relative">
            <Search className="w-5 h-5 text-[#8C7364] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Sniff out a question (e.g. vaccinated, showroom, import)..."
              className="w-full pl-12 pr-4 py-3 rounded-full border border-[#2A170E]/15 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C2622B] shadow-sm"
            />
          </div>
          <div className="mt-3 text-xs text-[#8C7364]">
            {filteredFaqs.length} questions on the board
          </div>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3.5 mb-14">
          {filteredFaqs.map((faq) => {
            const isOpen = !!openIds[faq.id]
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#2A170E]/10 overflow-hidden shadow-sm transition"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
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
                  <div className="px-6 pb-6 text-sm text-[#5A3A28] leading-relaxed border-t border-[#2A170E]/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Ask your own question card */}
        <div className="bg-[#FFECC8]/50 border border-[#F2BE6B]/40 rounded-3xl p-8 max-w-xl mx-auto text-center shadow-sm">
          <HelpCircle className="w-10 h-10 text-[#C2622B] mx-auto mb-3" />
          <h3 className="font-serif text-xl font-bold text-[#2A170E] mb-2">
            Ask Your Own Question
          </h3>
          <p className="text-xs text-[#5A3A28] mb-6">
            Have a specific requirement or want to know about our next puppy arrivals? Chat with us instantly.
          </p>
          <a
            href="https://wa.me/919898124987?text=Hi%20TeddyPups%2C%20I%20have%20a%20question%20about%20your%20puppies."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#C2622B] text-white px-7 py-3 rounded-full text-xs font-semibold hover:bg-[#A85221] shadow transition"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp (24/7)</span>
          </a>
        </div>
      </Container>
    </div>
  )
}

export default FAQ
