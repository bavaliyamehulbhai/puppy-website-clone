import React, { useState } from 'react'
import { Heart, MessageCircle, Sparkles } from 'lucide-react'
import Container from '../components/common/Container'
import { happyMoments, featuredQuote } from '../data/homeData'

function HappyFamilies() {
  const [likes, setLikes] = useState({})
  const [selectedMoment, setSelectedMoment] = useState(null)

  const toggleLike = (id, e) => {
    e.stopPropagation()
    setLikes(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="py-12 md:py-20 bg-[#FFFDF8] min-h-screen">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFECC8] text-[#5A301B] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C2622B]" />
            <span>64 moments and counting</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2A170E] tracking-tight mb-4">
            Happy Families
          </h1>
          <p className="text-base text-[#5A3A28] leading-relaxed">
            Nothing makes us happier than seeing our puppies in loving homes! Here are some heartwarming moments shared by our amazing families after welcoming their new furry companion.
          </p>
        </div>

        {/* Featured Testimonial Banner */}
        <div className="bg-[#FFECC8]/60 border border-[#F2BE6B]/40 rounded-3xl p-8 sm:p-12 mb-14 max-w-4xl mx-auto shadow-sm">
          <p className="font-serif italic text-xl sm:text-2xl text-[#2A170E] leading-relaxed mb-6">
            “{featuredQuote.quote}”
          </p>
          <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-[#2A170E]/10">
            <div>
              <p className="font-serif font-bold text-[#2A170E]">{featuredQuote.author}</p>
              <p className="text-xs text-[#8C7364]">{featuredQuote.location}</p>
            </div>
            <span className="font-script text-[#C2622B] text-base">
              proud teacup maltipoo parent
            </span>
          </div>
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {happyMoments.map((moment) => (
            <div
              key={moment.id}
              onClick={() => setSelectedMoment(moment)}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-[#2A170E]/10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden bg-[#FBE9CC]/30 relative">
                <img
                  src={moment.image}
                  alt={moment.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button
                  onClick={(e) => toggleLike(moment.id, e)}
                  className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition ${
                    likes[moment.id] ? 'bg-red-50 text-red-500' : 'bg-white/80 text-[#8C7364] hover:text-red-500'
                  }`}
                  aria-label="Love this moment"
                >
                  <Heart className={`w-4 h-4 ${likes[moment.id] ? 'fill-current' : ''}`} />
                </button>
              </div>

              <div className="p-4 bg-white">
                <h4 className="text-xs sm:text-sm font-semibold text-[#2A170E] truncate">
                  {moment.title}
                </h4>
                <p className="font-script text-[11px] text-[#C2622B] mt-1">
                  every one of them was a Teddy Pup once
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Share your moment CTA */}
        <div className="mt-16 text-center bg-white rounded-3xl p-8 border border-[#2A170E]/10 max-w-xl mx-auto shadow-sm">
          <h3 className="font-serif text-xl font-bold text-[#2A170E] mb-2">
            Are you already a TeddyPups parent?
          </h3>
          <p className="text-xs text-[#5A3A28] mb-6">
            We would love to feature you and your puppy on our happy wall! Send us your photos or videos on WhatsApp.
          </p>
          <a
            href="https://wa.me/919898124987?text=Hi%20TeddyPups%2C%20I&#x27;d%20like%20to%20share%20a%20photo%20of%20my%20puppy!"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#C2622B] text-white px-6 py-3 rounded-full text-xs font-semibold hover:bg-[#A85221] shadow"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Share your puppy story</span>
          </a>
        </div>
      </Container>

      {/* Lightbox Modal */}
      {selectedMoment && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedMoment(null)}
        >
          <div
            className="bg-white rounded-3xl overflow-hidden max-w-lg w-full p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-black">
              <img src={selectedMoment.image} alt={selectedMoment.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center justify-between px-2 pb-2">
              <span className="font-serif font-bold text-lg text-[#2A170E]">{selectedMoment.title}</span>
              <button
                onClick={() => setSelectedMoment(null)}
                className="px-4 py-1.5 rounded-full bg-[#FFECC8] text-[#5A301B] text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HappyFamilies
