import React from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, ArrowRight, Sparkles, Heart } from 'lucide-react'
import Container from '../common/Container'
import Button from '../common/Button'
import { puppyData } from '../../data/puppyData'

function HeroSection() {
  const featured = puppyData.slice(0, 3)

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 bg-[#FFFDF8]">
      {/* Subtle organic background gradient circles */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#FFECC8]/35 rounded-full blur-3xl pointer-events-none -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFECC8] text-[#5A301B] text-xs font-semibold tracking-wide border border-[#F2BE6B]/40">
              <Sparkles className="w-3.5 h-3.5 text-[#C2622B]" />
              <span className="font-script text-sm">every puppy is family</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#2A170E] tracking-tight leading-[1.1]">
              Premium teacup <br className="hidden sm:inline" />
              puppies in Dubai
            </h1>

            <p className="text-base sm:text-lg text-[#5A3A28] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Meet your new best friend in our Dubai showroom, or order a rare miniature breed from trusted breeders worldwide.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button to="/puppies" variant="primary" className="w-full sm:w-auto px-8 py-3.5 text-base">
                <span>View available puppies</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                href="https://wa.me/919898124987?text=Hi%20TeddyPups%2C%20I&#x27;d%20like%20to%20enquire%20about%20a%20puppy."
                variant="outline"
                className="w-full sm:w-auto px-7 py-3.5 text-base"
              >
                <MessageCircle className="w-4 h-4 mr-2 text-[#C2622B]" />
                <span>Enquire on WhatsApp</span>
              </Button>
            </div>

            {/* Micro proof row */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-[#8C7364]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#5F8F4A]" />
                <span>Downtown Dubai Showroom</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#C2622B]" />
                <span>Verified Vet Health Passports</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Feature Puppy Card */}
              <div className="bg-white rounded-3xl p-4 shadow-xl border border-[#2A170E]/10 transition-transform hover:scale-[1.01]">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#FBE9CC]/30 mb-4">
                  <img
                    src={featured[0]?.image || '/assets/puppies/maltipoo-max-male.webp'}
                    alt="Featured Puppy Max"
                    fetchPriority="high"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-3 left-3 bg-[#EBF5E9] text-[#5F8F4A] text-xs font-semibold px-2.5 py-1 rounded-full border border-[#5F8F4A]/20">
                    Available in Dubai
                  </div>
                  <div className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm text-[#C2622B]">
                    <Heart className="w-4 h-4 fill-current" />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#2A170E]">Max</h3>
                    <p className="text-xs text-[#5A3A28]">Maltipoo · boy · 3 months</p>
                  </div>
                  <Link
                    to={`/puppies/${featured[0]?.slug}`}
                    className="text-xs font-semibold bg-[#FFECC8] text-[#5A301B] hover:bg-[#F8DBAE] px-3.5 py-2 rounded-full transition"
                  >
                    Meet Max →
                  </Link>
                </div>
              </div>

              {/* Overlapping Mini Card 1 */}
              <div className="hidden sm:flex items-center gap-3 absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-[#2A170E]/10">
                <img
                  src={featured[1]?.image || '/assets/puppies/korean-teacup-maltipoo-female.webp'}
                  alt="Teacup Puppy"
                  className="w-12 h-12 rounded-xl object-cover"
                />
                <div className="text-left pr-2">
                  <p className="text-xs font-bold text-[#2A170E]">Korean Teacup</p>
                  <p className="text-[11px] text-[#8C7364]">Order upon request</p>
                </div>
              </div>

              {/* Overlapping Badge 2 */}
              <div className="hidden sm:block absolute -top-4 -right-4 bg-[#C2622B] text-white text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-md font-script rotate-3">
                100% hypoallergenic coats
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
