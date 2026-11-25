import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

function FAQItem({ question, answer, defaultOpen = false, id }) {
  const [open, setOpen] = useState(defaultOpen)
  const contentId = `faq-content-${id || Math.random().toString(36).substr(2, 9)}`

  return (
    <div className="bg-white rounded-2xl border border-[#2A170E]/10 overflow-hidden shadow-sm transition-all duration-200">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={contentId}
        className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 focus-visible:outline-2 focus-visible:outline-[#C2622B]"
      >
        <span className="font-serif text-base sm:text-lg font-bold text-[#2A170E] leading-snug">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#C2622B] shrink-0 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {open && (
        <div
          id={contentId}
          className="px-6 pb-6 text-sm sm:text-base text-[#5A3A28] leading-relaxed border-t border-[#2A170E]/5 pt-4 animate-fadeIn"
        >
          {answer}
        </div>
      )}
    </div>
  )
}

export default FAQItem
