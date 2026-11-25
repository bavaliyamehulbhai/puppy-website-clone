import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, ArrowRight } from 'lucide-react'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import { happyMoments, featuredQuote } from '../../data/homeData'

function HappyFamiliesTeaser() {
  const [likes, setLikes] = useState({})

  const toggleLike = (id) => {
    setLikes(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <section className="py-16 md:py-24 bg-[#FFFDF8]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <SectionHeading
            eyebrow="our wall of happy endings"
            title="Happy families & puppies"
            description="We are truly honored to see our puppies become cherished members of loving families across Dubai and the UAE."
            align="left"
            className="mb-0"
          />
          <Link
            to="/happy-families"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#C2622B] hover:text-[#A85221] group transition"
          >
            <span>View all happy moments</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Featured Testimonial Quote */}
        <div className="bg-[#FFECC8]/60 border border-[#F2BE6B]/40 rounded-3xl p-8 sm:p-10 mb-12 max-w-4xl mx-auto shadow-sm">
          <p className="font-serif italic text-lg sm:text-xl text-[#2A170E] leading-relaxed mb-4">
            “{featuredQuote.quote}”
          </p>
          <div className="flex items-center gap-2 text-sm text-[#5A301B] font-semibold">
            <span>{featuredQuote.author}</span>
            <span>·</span>
            <span className="font-normal text-[#8C7364]">{featuredQuote.location}</span>
          </div>
        </div>

        {/* Moments Photo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {happyMoments.map((moment) => (
            <div
              key={moment.id}
              className="group relative bg-white rounded-2xl overflow-hidden border border-[#2A170E]/10 shadow-sm"
            >
              <div className="aspect-square overflow-hidden bg-[#FBE9CC]/20">
                <img
                  src={moment.image}
                  alt={moment.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-3 flex items-center justify-between bg-white text-xs">
                <span className="font-medium text-[#2A170E] truncate mr-2">
                  {moment.title}
                </span>
                <button
                  onClick={() => toggleLike(moment.id)}
                  className={`p-1 transition ${likes[moment.id] ? 'text-red-500' : 'text-[#8C7364] hover:text-red-400'}`}
                  aria-label="Like moment"
                >
                  <Heart className={`w-3.5 h-3.5 ${likes[moment.id] ? 'fill-current' : ''}`} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default HappyFamiliesTeaser
