import React, { useState } from 'react'
import { X, CheckCircle2, MessageCircle } from 'lucide-react'

function EnquiryModal({ puppy, isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Mumbai',
    preferredDate: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  if (!isOpen) return null

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = 'Please provide your name'
    if (!formData.phone.trim()) errs.phone = 'Please provide your phone number'
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

  const whatsappMessage = encodeURIComponent(
    `Hi TeddyPups, I'm interested in adopting ${puppy ? puppy.name : 'a puppy'}. My name is ${formData.name || 'a future parent'} and my phone is ${formData.phone || ''}.`
  )

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-[#FFFDF8] w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#2A170E]/10 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#5A3A28] hover:bg-[#FBE9CC]/60 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle2 className="w-16 h-16 text-[#5F8F4A] mx-auto mb-4" />
            <h3 className="font-serif text-2xl font-bold text-[#2A170E] mb-2">
              Enquiry Received!
            </h3>
            <p className="text-[#5A3A28] text-sm leading-relaxed mb-6">
              Thank you for inquiring about <strong>{puppy ? puppy.name : 'our puppy'}</strong>. Our adoption concierge team will reach out to you within a few hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/919898124987?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#C2622B] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#A85221]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Continue on WhatsApp</span>
              </a>
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-full border border-[#2A170E]/20 text-[#2A170E] text-sm font-medium hover:bg-[#FBE9CC]/40"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="font-script text-sm text-[#C2622B]">welcome to the family</span>
              <h3 className="font-serif text-2xl font-bold text-[#2A170E] mt-1">
                Enquire about {puppy ? puppy.name : 'Puppy'}
              </h3>
              <p className="text-xs text-[#5A3A28] mt-1">
                {puppy ? `${puppy.breed} · ${puppy.gender} · ${puppy.originLabel}` : 'Mumbai Showroom · Safe Pan-India Delivery'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#2A170E] mb-1">Your Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Mansoor"
                  className={`w-full px-4 py-2.5 rounded-xl border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C2622B] ${
                    errors.name ? 'border-red-500' : 'border-[#2A170E]/20'
                  }`}
                />
                {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#2A170E] mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+971 50 000 0000"
                    className={`w-full px-4 py-2.5 rounded-xl border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C2622B] ${
                      errors.phone ? 'border-red-500' : 'border-[#2A170E]/20'
                    }`}
                  />
                  {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2A170E] mb-1">Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@example.com"
                    className={`w-full px-4 py-2.5 rounded-xl border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C2622B] ${
                      errors.email ? 'border-red-500' : 'border-[#2A170E]/20'
                    }`}
                  />
                  {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2A170E] mb-1">Location / Emirate</label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#2A170E]/20 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C2622B]"
                >
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi NCR">Delhi NCR</option>
                  <option value="Bengaluru">Bengaluru</option>
                  <option value="Ahmedabad">Ahmedabad</option>
                  <option value="Pune">Pune</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Other Indian City">Other City in India</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2A170E] mb-1">Questions or Message (Optional)</label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Can I schedule a visit to the Downtown showroom?"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#2A170E]/20 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C2622B]"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#C2622B] text-white rounded-full text-sm font-semibold hover:bg-[#A85221] shadow transition"
                >
                  Submit Enquiry
                </button>
                <a
                  href={`https://wa.me/919898124987?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 border border-[#2A170E]/20 text-[#2A170E] rounded-full text-sm font-medium hover:bg-[#FBE9CC]/40 text-center flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4 text-[#C2622B]" />
                  <span>Ask on WhatsApp</span>
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default EnquiryModal
