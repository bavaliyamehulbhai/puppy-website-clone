import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import {
  MessageCircle,
  Play,
  CheckCircle2,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Heart,
  Share2,
  ArrowLeft
} from 'lucide-react'
import Container from '../components/common/Container'
import Button from '../components/common/Button'
import Badge from '../components/common/Badge'
import EnquiryModal from '../components/common/EnquiryModal'
import PuppyCard from '../components/common/PuppyCard'
import { puppyData } from '../data/puppyData'

function PuppyDetails() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const puppy = puppyData.find((p) => p.slug === slug)

  if (!puppy) {
    return (
      <div className="py-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="font-serif text-3xl font-bold text-[#2A170E] mb-4">Puppy not found</h2>
        <p className="text-[#5A3A28] mb-6">This puppy profile may have been updated or adopted.</p>
        <Link to="/puppies" className="px-6 py-3 rounded-full bg-[#C2622B] text-white font-medium">
          Back to all puppies
        </Link>
      </div>
    )
  }

  const gallery = puppy.gallery && puppy.gallery.length > 0 ? puppy.gallery : [puppy.image]

  const nextSlide = () => {
    setActiveImageIndex((prev) => (prev + 1) % gallery.length)
  }

  const prevSlide = () => {
    setActiveImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length)
  }

  const whatsappMessage = encodeURIComponent(
    `Hi TeddyPups, I'm interested in adopting ${puppy.name} (${puppy.breed}, ${puppy.gender}, ${puppy.age}). Is ${puppy.name} currently available?`
  )

  const similarPuppies = puppyData
    .filter((p) => p.slug !== puppy.slug && p.status === 'Available')
    .slice(0, 3)

  return (
    <div className="py-8 md:py-16 bg-[#FFFDF8]">
      <Container>
        {/* Breadcrumb and Back link */}
        <div className="flex items-center justify-between text-xs text-[#8C7364] mb-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1.5 font-medium text-[#2A170E] hover:text-[#C2622B] transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </button>
          <div className="flex items-center gap-2">
            <Link to="/puppies" className="hover:underline">Available puppies</Link>
            <span>/</span>
            <span className="text-[#2A170E] font-semibold">{puppy.name}</span>
          </div>
        </div>

        {}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Interactive Image Carousel */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-square sm:aspect-[4/3] rounded-3xl overflow-hidden bg-white border border-[#2A170E]/10 shadow-lg group">
              <img
                src={gallery[activeImageIndex]}
                alt={`${puppy.name} - slide ${activeImageIndex + 1}`}
                className="w-full h-full object-cover object-center transition-all duration-300"
              />

              {/* Status and Video Badges */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <Badge variant={puppy.status === 'Available' ? 'available' : 'default'}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                  <span>{puppy.status}</span>
                </Badge>
                {puppy.hasVideo && (
                  <button
                    onClick={() => setIsVideoModalOpen(true)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-black/70 text-white backdrop-blur-sm hover:bg-black transition"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Watch video</span>
                  </button>
                )}
              </div>

              {/* Slider Arrows if multiple images */}
              {gallery.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm text-[#2A170E] flex items-center justify-center hover:bg-white shadow transition"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm text-[#2A170E] flex items-center justify-center hover:bg-white shadow transition"
                    aria-label="Next photo"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Counter */}
              <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                ‹ {activeImageIndex + 1} / {gallery.length} ›
              </div>
            </div>

            {}
            {gallery.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-20 h-20 rounded-2xl overflow-hidden border-2 transition shrink-0 ${
                      activeImageIndex === idx ? 'border-[#C2622B] scale-95' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Fact Sheet & CTAs */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-script text-base text-[#C2622B]">hello, it's me</span>
              <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#2A170E] mt-1 mb-2">
                {puppy.name}
              </h1>
              <p className="text-sm text-[#5A3A28] leading-relaxed">
                {puppy.description}
              </p>
            </div>

            {/* Puppy Specs Sheet */}
            <div className="bg-white rounded-3xl p-6 border border-[#2A170E]/10 shadow-sm space-y-3.5 text-sm">
              <div className="flex justify-between py-2 border-b border-[#2A170E]/5">
                <span className="text-[#8C7364]">Breed</span>
                <span className="font-semibold text-[#2A170E]">{puppy.breed}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#2A170E]/5">
                <span className="text-[#8C7364]">Boy or girl</span>
                <span className="font-semibold text-[#2A170E] capitalize">{puppy.gender}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#2A170E]/5">
                <span className="text-[#8C7364]">Age</span>
                <span className="font-semibold text-[#2A170E]">{puppy.age}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#2A170E]/5">
                <span className="text-[#8C7364]">Color</span>
                <span className="font-semibold text-[#2A170E]">{puppy.color}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#2A170E]/5">
                <span className="text-[#8C7364]">Weight / Size</span>
                <span className="font-semibold text-[#2A170E]">{puppy.weight}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-[#8C7364]">Where</span>
                <span className="font-semibold text-[#C2622B]">{puppy.originLabel}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <a
                href={`https://wa.me/919898124987?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#C2622B] text-white py-3.5 rounded-full font-semibold text-base shadow hover:bg-[#A85221] transition"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Ask about {puppy.name} on WhatsApp</span>
              </a>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-3.5 rounded-full border border-[#2A170E]/20 text-[#2A170E] font-medium hover:bg-[#FBE9CC]/40 transition"
              >
                Send an enquiry
              </button>
            </div>

            {/* What comes with puppy */}
            <div className="bg-[#FFECC8]/50 rounded-3xl p-6 border border-[#F2BE6B]/30">
              <h4 className="font-serif text-base font-bold text-[#2A170E] mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#5F8F4A]" />
                <span>Every Teddy Pup comes with:</span>
              </h4>
              <div className="grid grid-cols-2 gap-2.5 text-xs text-[#5A301B]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5F8F4A]" />
                  <span>Vaccinated</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5F8F4A]" />
                  <span>Dewormed</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5F8F4A]" />
                  <span>Verified health cert</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5F8F4A]" />
                  <span>Microchipped</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5F8F4A]" />
                  <span>Health guarantee</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5F8F4A]" />
                  <span>Welcome kit</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Puppies Recommendations */}
        <div className="mt-20 pt-12 border-t border-[#2A170E]/10">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-serif text-2xl font-bold text-[#2A170E]">
              You may also love
            </h3>
            <Link to="/puppies" className="text-sm text-[#C2622B] font-semibold hover:underline">
              See all puppies →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {similarPuppies.map((p) => (
              <PuppyCard key={p.id} puppy={p} />
            ))}
          </div>
        </div>
      </Container>

      {/* Enquiry Modal */}
      <EnquiryModal
        puppy={puppy}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Video Modal Preview */}
      {isVideoModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div 
            className="bg-black rounded-3xl overflow-hidden max-w-xl w-full p-6 text-center text-white relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h4 className="font-serif text-xl mb-4 font-bold">HD Video Preview: {puppy.name}</h4>
            <div className="aspect-[9/16] max-h-[60vh] mx-auto rounded-2xl overflow-hidden bg-neutral-900 flex items-center justify-center relative">
              <img src={puppy.image} alt={puppy.name} className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 p-4">
                <Play className="w-16 h-16 text-white mb-2 animate-pulse" />
                <p className="text-xs text-white/90">Video preview stream ready</p>
                <a
                  href={`https://wa.me/919898124987?text=${whatsappMessage}%20Please%20send%20me%20the%20video%20clip.`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 px-5 py-2 rounded-full bg-[#C2622B] text-white text-xs font-semibold"
                >
                  Receive video in WhatsApp
                </a>
              </div>
            </div>
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="mt-4 text-xs text-white/70 hover:text-white"
            >
              Close preview
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default PuppyDetails
