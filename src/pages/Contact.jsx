import React, { useState } from 'react'
import { MessageCircle, Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react'
import Container from '../components/common/Container'
import { puppyData } from '../data/puppyData'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Mumbai',
    puppyOfInterest: 'any puppy (not sure yet)',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = 'Please write your name'
    if (!formData.phone.trim()) errs.phone = 'Please provide a valid phone or WhatsApp number'
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitted(true)
  }

  return (
    <div className="py-12 md:py-20 bg-[#FFFDF8] min-h-screen">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-script text-base text-[#C2622B] mb-2 block">
            we'd love to meet you
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2A170E] tracking-tight mb-4">
            Visit & Contact
          </h1>
          <p className="text-base text-[#5A3A28] leading-relaxed">
            Have questions about our puppies or adoption process? Fill out the interactive letter below or visit our Downtown Dubai showroom.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: Mad-Libs Letter Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#2A170E]/10 shadow-lg relative">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-[#5F8F4A] mx-auto mb-4" />
                <h3 className="font-serif text-2xl font-bold text-[#2A170E] mb-2">
                  Your Letter Has Been Posted!
                </h3>
                <p className="text-sm text-[#5A3A28] max-w-md mx-auto mb-8 leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>! We have received your note regarding <strong>{formData.puppyOfInterest}</strong>. A dedicated puppy concierge will connect with you via WhatsApp or email promptly.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`https://wa.me/919898124987?text=Hi%20TeddyPups%2C%20I%20just%20posted%20a%20letter%20for%20${encodeURIComponent(formData.puppyOfInterest)}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#C2622B] text-white px-7 py-3 rounded-full text-xs font-semibold hover:bg-[#A85221]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open in WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        city: 'Mumbai',
                        puppyOfInterest: 'any puppy (not sure yet)',
                        message: ''
                      })
                    }}
                    className="px-6 py-3 rounded-full border border-[#2A170E]/20 text-[#2A170E] text-xs font-medium hover:bg-[#FBE9CC]/40"
                  >
                    Write another note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-[#2A170E]/10 pb-4 mb-6">
                  <span className="font-script text-2xl text-[#2A170E]">Dear TeddyPups India,</span>
                </div>

                {/* Mad-Libs Prose Form */}
                <div className="text-base sm:text-lg text-[#2A170E] leading-loose">
                  my name is{' '}
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="your name"
                    className={`inline-block px-3 py-1 bg-[#FFFDF8] border-b-2 font-medium focus:outline-none focus:border-[#C2622B] mx-1 min-w-[140px] text-sm ${
                      errors.name ? 'border-red-500' : 'border-[#2A170E]/30'
                    }`}
                  />
                  {errors.name && <span className="text-red-500 text-xs block">{errors.name}</span>}
                  and you can reach me on{' '}
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98981 24987"
                    className={`inline-block px-3 py-1 bg-[#FFFDF8] border-b-2 font-medium focus:outline-none focus:border-[#C2622B] mx-1 min-w-[160px] text-sm ${
                      errors.phone ? 'border-red-500' : 'border-[#2A170E]/30'
                    }`}
                  />
                  {errors.phone && <span className="text-red-500 text-xs block">{errors.phone}</span>}
                  or by email at{' '}
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    className={`inline-block px-3 py-1 bg-[#FFFDF8] border-b-2 font-medium focus:outline-none focus:border-[#C2622B] mx-1 min-w-[180px] text-sm ${
                      errors.email ? 'border-red-500' : 'border-[#2A170E]/30'
                    }`}
                  />
                  {errors.email && <span className="text-red-500 text-xs block">{errors.email}</span>}
                  . I live in{' '}
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Mumbai / Delhi / Bengaluru"
                    className="inline-block px-3 py-1 bg-[#FFFDF8] border-b-2 border-[#2A170E]/30 font-medium focus:outline-none focus:border-[#C2622B] mx-1 min-w-[100px] text-sm"
                  />
                  , and I'm curious about{' '}
                  <select
                    value={formData.puppyOfInterest}
                    onChange={(e) => setFormData({ ...formData, puppyOfInterest: e.target.value })}
                    className="inline-block px-3 py-1 bg-[#FFFDF8] border-b-2 border-[#2A170E]/30 font-medium focus:outline-none focus:border-[#C2622B] mx-1 text-sm rounded-none"
                  >
                    <option value="any puppy (not sure yet)">any puppy (not sure yet)</option>
                    {puppyData.map((p) => (
                      <option key={p.id} value={`${p.name} (${p.breed})`}>
                        {p.name} ({p.breed}, {p.gender})
                      </option>
                    ))}
                  </select>
                  .
                </div>

                <div className="pt-4">
                  <label className="block text-xs font-semibold text-[#8C7364] mb-2">
                    Your note or questions (optional):
                  </label>
                  <textarea
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="When can we come by to visit the showroom?"
                    className="w-full p-4 rounded-2xl bg-[#FFFDF8] border border-[#2A170E]/15 text-sm focus:outline-none focus:ring-2 focus:ring-[#C2622B]"
                  ></textarea>
                </div>

                <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
                  <span className="font-script text-sm text-[#5A3A28]">
                    with love, a future puppy parent
                  </span>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#C2622B] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#A85221] shadow transition"
                  >
                    <Send className="w-4 h-4" />
                    <span>Post my letter</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Showroom Details & Map Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Showroom Card */}
            <div className="bg-white rounded-3xl p-8 border border-[#2A170E]/10 shadow-sm space-y-5">
              <span className="font-script text-sm text-[#C2622B]">visit us in person</span>
              <h3 className="font-serif text-2xl font-bold text-[#2A170E]">
                Mumbai Boutique Showroom
              </h3>
              <p className="text-sm text-[#5A3A28] leading-relaxed">
                Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face. Showroom visits are by prior appointment to ensure individual bonding time.
              </p>

              <div className="space-y-3 pt-2 text-sm text-[#2A170E]">
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-[#C2622B]" />
                  <a href="https://wa.me/919898124987" target="_blank" rel="noreferrer" className="hover:underline">
                    WhatsApp +91 98981 24987
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#C2622B]" />
                  <a href="tel:+971500000000" className="hover:underline">
                    +91 98981 24987
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#C2622B]" />
                  <a href="mailto:contact@teddypups.ae" className="hover:underline">
                    contact@teddypups.ae
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C2622B] shrink-0 mt-0.5" />
                  <span>Bandra West, Mumbai, Maharashtra 400050</span>
                </div>
              </div>
            </div>

            {/* Interactive Map Card */}
            <div className="bg-[#FFECC8]/40 rounded-3xl p-6 border border-[#F2BE6B]/30 shadow-sm text-center">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-4 bg-neutral-200 border border-[#2A170E]/10">
                <iframe
                  title="Dubai Showroom Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src="https://maps.google.com/maps?q=Bandra+West+Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                ></iframe>
              </div>
              <a
                href="https://maps.google.com/?q=Bandra+West+Mumbai"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C2622B] hover:underline"
              >
                <span>Open in Google Maps →</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Contact
