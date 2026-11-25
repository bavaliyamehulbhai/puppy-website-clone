import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { MessageCircle, Menu, X, Phone, Heart } from 'lucide-react'
import { navigationData } from '../../data/navigationData'

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Auto-close mobile menu on every route transition
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-[#FFFDF8]/90 backdrop-blur-md border-b border-[#2A170E]/10 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link to="/" className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-[#C2622B]">
          <img 
            src="/assets/brand/logo.png" 
            alt="TeddyPups India" 
            className="w-10 h-10 object-contain rounded-full shadow-sm group-hover:scale-105 transition-transform"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-tight text-[#2A170E] leading-none">
              TeddyPups
            </span>
            <span className="font-script text-xs text-[#C2622B] tracking-wide mt-0.5">
              every puppy is family
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navigationData.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm transition-colors py-1 hover:text-[#C2622B] ${
                  isActive
                    ? 'text-[#C2622B] font-bold border-b-2 border-[#C2622B]'
                    : 'text-[#2A170E] font-medium'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop WhatsApp CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/919898124987?text=Hi%20TeddyPups%2C%20I&#x27;d%20like%20to%20enquire%20about%20a%20puppy."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C2622B] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm hover:bg-[#A85221] transition-all transform active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp us</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-2.5 rounded-xl text-[#2A170E] hover:bg-[#FBE9CC]/50 transition-colors focus-visible:outline-2 focus-visible:outline-[#C2622B]"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 top-20 bg-black/40 z-40 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="bg-[#FFFDF8] w-full max-w-sm ml-auto h-[calc(100vh-5rem)] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#2A170E]/10">
                <span className="font-script text-lg text-[#5A3A28]">where to, friend?</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-[#2A170E] rounded-full hover:bg-[#FBE9CC]/60"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-4 mt-6">
                {navigationData.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `text-lg transition-colors py-1 ${
                        isActive ? 'text-[#C2622B] font-bold' : 'text-[#2A170E] font-medium'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <NavLink
                  to="/gone-home"
                  className={({ isActive }) =>
                    `text-lg transition-colors py-1 ${
                      isActive ? 'text-[#C2622B] font-bold' : 'text-[#8C7364] font-medium hover:text-[#2A170E]'
                    }`
                  }
                >
                  Gone home
                </NavLink>
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-[#2A170E]/10">
              <a
                href="https://wa.me/919898124987?text=Hi%20TeddyPups%2C%20I&#x27;d%20like%20to%20enquire%20about%20a%20puppy."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#C2622B] text-white py-3.5 rounded-full text-base font-semibold shadow hover:bg-[#A85221]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp us</span>
              </a>
              <a
                href="tel:+971500000000"
                className="w-full flex items-center justify-center gap-2 bg-[#FBE9CC] text-[#2A170E] py-3 rounded-full text-base font-medium hover:bg-[#F8DBAE]"
              >
                <Phone className="w-4 h-4 text-[#C2622B]" />
                <span>+91 98981 24987</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
