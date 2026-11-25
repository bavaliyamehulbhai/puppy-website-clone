import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { footerExploreLinks } from '../../data/navigationData'

function Footer() {
  const [email, setEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState('')

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setNewsletterStatus('Please enter a valid email address.')
      return
    }
    setNewsletterStatus('Welcome to the TeddyPups family! We will notify you when new puppies arrive.')
    setEmail('')
  }

  return (
    <footer className="bg-[#2A170E] text-[#FFFDF8] pt-16 pb-12 border-t border-[#3D2518]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Banner */}
        <div className="mb-14 pb-12 border-b border-white/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 space-y-2">
            <span className="font-script text-base text-[#F2BE6B]">stay in touch</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
              Get notified of new puppy arrivals
            </h3>
            <p className="text-xs sm:text-sm text-[#FBE9CC]/75 leading-relaxed">
              Rare Korean teacup puppies find homes quickly. Join our VIP announcement list for priority showroom visits.
            </p>
          </div>

          <div className="md:col-span-6">
            <form onSubmit={handleNewsletterSubmit} className="space-y-2" noValidate>
              <div className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setNewsletterStatus('')
                  }}
                  placeholder="Enter your email address..."
                  className="w-full px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#C2622B]"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-[#C2622B] text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-[#A85221] shrink-0 transition"
                >
                  <Send className="w-4 h-4" />
                  <span>Subscribe</span>
                </button>
              </div>
              {newsletterStatus && (
                <p className={`text-xs ${newsletterStatus.includes('valid') ? 'text-red-400' : 'text-[#F2BE6B]'} flex items-center gap-1.5 mt-1.5`}>
                  {!newsletterStatus.includes('valid') && <CheckCircle2 className="w-3.5 h-3.5" />}
                  <span>{newsletterStatus}</span>
                </p>
              )}
            </form>
          </div>
        </div>

        {/* 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-14 border-b border-white/10">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/brand/logo.png" 
                alt="TeddyPups" 
                className="w-10 h-10 rounded-full bg-white/10 p-1"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                TeddyPups
              </span>
            </div>
            <p className="text-sm text-[#FBE9CC]/80 leading-relaxed">
              Home, at last. TeddyPups India is a premier brand specializing in miniature puppies, offering premium services and worldwide shipping.
            </p>
            <div className="font-script text-[#F2BE6B] text-sm">
              every puppy is family
            </div>
          </div>

          {/* Explore Col */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm text-[#FBE9CC]/75">
              {footerExploreLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Say Hello Col */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-4">Say hello</h4>
            <ul className="space-y-3 text-sm text-[#FBE9CC]/75">
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#C2622B]" />
                <a 
                  href="https://wa.me/919898124987?text=Hi%20TeddyPups%2C%20I&#x27;d%20like%20to%20enquire%20about%20a%20puppy." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white"
                >
                  WhatsApp +91 98981 24987
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C2622B]" />
                <a href="mailto:contact@teddypups.ae" className="hover:text-white">
                  contact@teddypups.ae
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C2622B] shrink-0 mt-0.5" />
                <span>Bandra West, Mumbai · Pan-India Delivery</span>
              </li>
            </ul>
          </div>

          {/* Socials Col */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-4">Follow along</h4>
            <div className="flex items-center gap-3 text-sm text-[#FBE9CC]/75 mb-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
            </div>
            <p className="text-xs text-[#FBE9CC]/60 leading-relaxed">
              Showroom visits are by prior appointment. Reach out anytime on WhatsApp for assistance.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FBE9CC]/60 gap-4">
          <p>© 2026 TeddyPups India every puppy is family</p>
          <p>Crafted with love for puppy parents worldwide</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
