import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Plane, ShieldCheck, Truck, CheckCircle2, MessageCircle } from 'lucide-react'
import Container from '../components/common/Container'
import Button from '../components/common/Button'

function HowItWorks() {
  const [activeTab, setActiveTab] = useState('twoWays')

  const tabs = [
    { id: 'twoWays', label: '1 Two ways home' },
    { id: 'promise', label: '2 Our puppy promise' },
    { id: 'delivery', label: '3 Delivery & collection' },
    { id: 'whyUs', label: '4 Why choose us' }
  ]

  return (
    <div className="py-12 md:py-20 bg-[#FFFDF8] min-h-screen">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-script text-base text-[#C2622B] mb-2 block">
            concierge adoption experience
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2A170E] tracking-tight mb-4">
            How It Works
          </h1>
          <p className="text-base text-[#5A3A28] leading-relaxed">
            Whether you choose to visit our Bandra West, Mumbai showroom or order a rare miniature teacup breed from certified overseas breeders, TeddyPups India is here to make your experience unforgettable.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition ${
                activeTab === tab.id
                  ? 'bg-[#C2622B] text-white shadow-md'
                  : 'bg-white border border-[#2A170E]/15 text-[#5A301B] hover:bg-[#FBE9CC]/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Two Ways Home */}
        {activeTab === 'twoWays' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Showroom Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#2A170E]/10 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 text-[#C2622B]">
                  <MapPin className="w-5 h-5" />
                  <span className="font-script font-semibold text-sm">Bandra West, Mumbai</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#2A170E] mb-3">
                  In Mumbai: Meet in Person
                </h3>
                <p className="text-sm text-[#5A3A28] leading-relaxed mb-6">
                  Step into our Bandra West, Mumbai showroom and experience the joy of meeting and choosing your puppy face-to-face. We source healthy, well-socialized puppies with veterinary checks.
                </p>
                <ul className="space-y-3 text-xs text-[#5A301B]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5F8F4A]" />
                    <span>Step 1: Explore our available puppies online</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5F8F4A]" />
                    <span>Step 2: Book an appointment to visit our showroom</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5F8F4A]" />
                    <span>Step 3: Bond and fall in love with your new family member</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5F8F4A]" />
                    <span>Step 4: Take home same-day or request doorstep delivery</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <Link
                  to="/puppies?origin=local"
                  className="inline-flex items-center justify-center w-full py-3 bg-[#FFECC8] text-[#5A301B] hover:bg-[#F8DBAE] rounded-full text-sm font-semibold transition"
                >
                  View Showroom Puppies
                </Link>
              </div>
            </div>

            {/* Imported Card */}
            <div className="bg-[#FFFDF8] rounded-3xl p-8 sm:p-10 border border-[#2A170E]/10 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 text-[#2F6E9E]">
                  <Plane className="w-5 h-5" />
                  <span className="font-script font-semibold text-sm">Korea / Europe → India</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#2A170E] mb-3">
                  Imported: Order Upon Request
                </h3>
                <p className="text-sm text-[#5A3A28] leading-relaxed mb-6">
                  Looking for an ultra-rare micro teacup Maltipoo or Korean Pomeranian? We collaborate directly with premier, certified international breeders and handle every document, health exam, and flight.
                </p>
                <ul className="space-y-3 text-xs text-[#5A301B]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2F6E9E]" />
                    <span>Step 1: Tell us your dream breed, gender, and color preference</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2F6E9E]" />
                    <span>Step 2: Review HD videos, medical tests, and vet certifications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2F6E9E]" />
                    <span>Step 3: Safe, temperature-controlled flight with travel nanny</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2F6E9E]" />
                    <span>Step 4: Arrives in Dubai happy, healthy, and certified</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <Link
                  to="/puppies?origin=imported"
                  className="inline-flex items-center justify-center w-full py-3 bg-[#C2622B] text-white hover:bg-[#A85221] rounded-full text-sm font-semibold transition shadow"
                >
                  View Imported Breeds
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Puppy Promise */}
        {activeTab === 'promise' && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#2A170E]/10 max-w-4xl mx-auto shadow-sm space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#2A170E]">Our Premium Puppy Promise</h3>
            <p className="text-sm text-[#5A3A28] leading-relaxed">
              We hold the highest ethical and veterinary standards in the UAE. Every single puppy entrusted to a family undergoes extensive veterinary screening:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#FFFDF8] border border-[#2A170E]/10">
                <h4 className="font-bold text-sm text-[#2A170E] mb-1">Vaccinated & Dewormed</h4>
                <p className="text-xs text-[#5A3A28]">Up to date on all core vaccinations, parasite treatments, and microchip registered.</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#FFFDF8] border border-[#2A170E]/10">
                <h4 className="font-bold text-sm text-[#2A170E] mb-1">Veterinary Health Certificate</h4>
                <p className="text-xs text-[#5A3A28]">Complete medical passport and stamped certificates from authorized government veterinarians.</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#FFFDF8] border border-[#2A170E]/10">
                <h4 className="font-bold text-sm text-[#2A170E] mb-1">Congenital Health Guarantee</h4>
                <p className="text-xs text-[#5A3A28]">Written warranty against genetic and congenital conditions for peace of mind.</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#FFFDF8] border border-[#2A170E]/10">
                <h4 className="font-bold text-sm text-[#2A170E] mb-1">24/7 Lifelong Advisory</h4>
                <p className="text-xs text-[#5A3A28]">Direct WhatsApp line to our dog behaviorists, nutritionists, and support specialists.</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Delivery & Collection */}
        {activeTab === 'delivery' && (
          <div id="delivery" className="bg-white rounded-3xl p-8 sm:p-12 border border-[#2A170E]/10 max-w-4xl mx-auto shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <Truck className="w-8 h-8 text-[#C2622B]" />
              <h3 className="font-serif text-2xl font-bold text-[#2A170E]">Delivery & Collection across India</h3>
            </div>
            <p className="text-sm text-[#5A3A28] leading-relaxed">
              We offer two convenient ways to receive your new family member across all major Indian cities with full pet-safe flight transit:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="p-6 rounded-2xl bg-[#FFECC8]/40 border border-[#F2BE6B]/40">
                <h4 className="font-serif text-lg font-bold text-[#2A170E] mb-2">Showroom Pick-Up</h4>
                <p className="text-xs text-[#5A3A28] leading-relaxed">
                  Collect your puppy directly from our showroom in Bandra West, Mumbai. Enjoy a relaxing handover session where we demonstrate feeding, grooming, and puppy care basics.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-[#FFFDF8] border border-[#2A170E]/10">
                <h4 className="font-serif text-lg font-bold text-[#2A170E] mb-2">Climate-Controlled Home Delivery</h4>
                <p className="text-xs text-[#5A3A28] leading-relaxed">
                  Our private chauffeur delivers your puppy directly to your doorstep anywhere in Mumbai, Delhi NCR, Bengaluru, Pune, Ahmedabad or any Indian metro in a temperature-controlled pet vehicle accompanied by a care specialist.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Why Choose Us */}
        {activeTab === 'whyUs' && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#2A170E]/10 max-w-4xl mx-auto shadow-sm space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#2A170E]">Why Discerning Families Choose TeddyPups India</h3>
            <p className="text-sm text-[#5A3A28] leading-relaxed">
              Adopting a teacup companion requires extreme attention to genetics, ethical breeding, and health standards. Here is why families repeatedly recommend us:
            </p>
            <div className="space-y-3 pt-2 text-xs text-[#5A3A28]">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FFFDF8] border border-[#2A170E]/5">
                <span className="font-bold text-[#C2622B] text-sm">01</span>
                <div>
                  <strong className="text-[#2A170E]">Zero Puppy Mills:</strong> We only partner with certified, loving family breeders in Korea and Europe who prioritize maternal health and early social exposure.
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FFFDF8] border border-[#2A170E]/5">
                <span className="font-bold text-[#C2622B] text-sm">02</span>
                <div>
                  <strong className="text-[#2A170E]">True Teacup & Miniature Proportions:</strong> Our puppies feature authentic teddy doll faces, compact frames, and hypoallergenic coats that stay miniature into adulthood.
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FFFDF8] border border-[#2A170E]/5">
                <span className="font-bold text-[#C2622B] text-sm">03</span>
                <div>
                  <strong className="text-[#2A170E]">100% Transparency:</strong> Video calls before adoption, transparent health charts, and direct contact with our veterinary partners.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <a
            href="https://wa.me/919898124987?text=Hi%20TeddyPups%2C%20I&#x27;d%20like%20to%20learn%20more%20about%20the%20adoption%20process."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#C2622B] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#A85221] shadow transition"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat with an Adoption Concierge</span>
          </a>
        </div>
      </Container>
    </div>
  )
}

export default HowItWorks
