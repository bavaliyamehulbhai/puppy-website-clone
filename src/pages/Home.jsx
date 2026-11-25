import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'

function Home() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-[#FFFDF8] px-4 py-16">
      <div className="max-w-xl w-full rounded-3xl bg-white p-8 md:p-12 shadow-xl border border-[#2A170E]/10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFECC8] text-[#5A301B] text-xs font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#C2622B]" />
          <span>Phase 2 Foundation Ready</span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#2A170E] leading-tight mb-4">
          TeddyPups U.A.E. Clone
        </h1>
        <p className="text-[#5A3A28] text-base md:text-lg mb-8 leading-relaxed">
          React + Vite + Tailwind CSS v4 + React Router + Lucide Icons are fully configured and ready for Phase 3 core implementation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/puppies"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C2622B] text-white px-7 py-3.5 rounded-full font-medium hover:bg-[#A85221] transition shadow-md"
          >
            <span>Explore Puppies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="https://wa.me/919898124987"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-[#2A170E]/20 text-[#2A170E] hover:bg-[#FBE9CC]/40 transition font-medium"
          >
            WhatsApp Support
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home
