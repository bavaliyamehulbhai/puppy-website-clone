import React from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, MapPin } from 'lucide-react'
import Container from '../common/Container'
import Button from '../common/Button'

function CTASection() {
  return (
    <section className="py-20 bg-[#2A170E] text-[#FFFDF8] relative overflow-hidden">
      {/* Warm ambient radial background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C2622B]/20 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10 text-center">
        <span className="font-script text-base text-[#F2BE6B] block mb-3">
          welcome home
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight max-w-2xl mx-auto leading-tight">
          Ready to meet your new best friend?
        </h2>

        <p className="text-[#FBE9CC]/80 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Bring home a healthy, happy teacup or designer puppy with expert guidance every step of the way. We ensure smooth, safe delivery across the UAE.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="https://wa.me/919898124987?text=Hi%20TeddyPups%2C%20I&#x27;m%20ready%20to%20meet%20my%20new%20puppy!"
            variant="primary"
            className="w-full sm:w-auto px-8 py-3.5"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            <span>Enquire on WhatsApp</span>
          </Button>

          <Button
            to="/contact"
            variant="secondary"
            className="w-full sm:w-auto px-8 py-3.5"
          >
            <MapPin className="w-4 h-4 mr-2 text-[#C2622B]" />
            <span>Visit & contact</span>
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default CTASection
