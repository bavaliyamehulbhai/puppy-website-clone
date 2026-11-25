import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Ticket, ArrowRight } from 'lucide-react'
import Container from '../components/common/Container'
import { puppyData } from '../data/puppyData'

function GoneHome() {
  const [selectedBreed, setSelectedBreed] = useState('all')

  const adoptedPuppies = puppyData.filter((p) => p.status === 'Gone Home' || p.price === 'Adopted')

  // also include some simulated adopted boarding passes from reference site
  const ticketPuppies = [
    { id: 't1', name: 'Ace', breed: 'Pomeranian', gender: 'boy', destination: 'TeddyPups India home' },
    { id: 't2', name: 'Leo', breed: 'Poodle', gender: 'boy', destination: 'TeddyPups India home' },
    { id: 't3', name: 'Mia', breed: 'Maltipoo', gender: 'girl', destination: 'Mumbai showroom home' },
    { id: 't4', name: 'Sadie', breed: 'Maltipoo', gender: 'girl', destination: 'TeddyPups India home' },
    { id: 't5', name: 'Pomeranian Boy', breed: 'Pomeranian', gender: 'boy', destination: 'TeddyPups India home' },
    { id: 't6', name: 'Ollie', breed: 'Pomsky', gender: 'boy', destination: 'TeddyPups India home' },
    { id: 't7', name: 'Bruno', breed: 'Maltipoo', gender: 'boy', destination: 'Mumbai showroom home' },
    { id: 't8', name: 'Buddy', breed: 'Maltese', gender: 'boy', destination: 'Mumbai showroom home' },
    { id: 't9', name: 'Charlie', breed: 'Maltese', gender: 'boy', destination: 'TeddyPups India home' },
    { id: 't10', name: 'Daisy', breed: 'Pomeranian', gender: 'girl', destination: 'Mumbai showroom home' },
    { id: 't11', name: 'Bella', breed: 'Pomeranian', gender: 'girl', destination: 'TeddyPups India home' },
    { id: 't12', name: 'Teddy', breed: 'Poodle', gender: 'boy', destination: 'TeddyPups India home' }
  ]

  const breeds = ['all', 'maltipoo', 'pomeranian', 'poodle', 'maltese', 'pomsky']

  const filteredTickets = ticketPuppies.filter((t) => {
    if (selectedBreed === 'all') return true
    return t.breed.toLowerCase().includes(selectedBreed)
  })

  return (
    <div className="py-12 md:py-20 bg-[#FFFDF8] min-h-screen">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-script text-base text-[#C2622B] mb-2 block">
            tickets home
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2A170E] tracking-tight mb-4">
            Gone Home
          </h1>
          <p className="text-base text-[#5A3A28] leading-relaxed mb-6">
            Every puppy here has already joined a loving family. Looking for one just like them? Tell us — we'll help you find your perfect match.
          </p>
          <Link
            to="/puppies"
            className="inline-flex items-center gap-2 bg-[#C2622B] text-white px-7 py-3 rounded-full text-xs font-semibold hover:bg-[#A85221] shadow"
          >
            <span>See available puppies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Breed Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {breeds.map((b) => (
            <button
              key={b}
              onClick={() => setSelectedBreed(b)}
              className={`px-4 py-1.5 rounded-full text-xs capitalize transition ${
                selectedBreed === b
                  ? 'bg-[#2A170E] text-white font-medium shadow-sm'
                  : 'bg-white border border-[#2A170E]/15 text-[#5A3A28] hover:bg-[#FBE9CC]/40'
              }`}
            >
              {b}
            </button>
          ))}
        </div>

        {/* Vintage Boarding Pass Tickets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredTickets.map((ticket) => (
            <div
              key={ticket.id}
              className="bg-white rounded-2xl p-6 border-2 border-dashed border-[#F2BE6B] relative shadow-sm hover:shadow-md transition group overflow-hidden"
            >
              {/* Notches for vintage ticket look */}
              <div className="w-4 h-4 rounded-full bg-[#FFFDF8] absolute -left-2 top-1/2 -translate-y-1/2 border-r border-[#F2BE6B]"></div>
              <div className="w-4 h-4 rounded-full bg-[#FFFDF8] absolute -right-2 top-1/2 -translate-y-1/2 border-l border-[#F2BE6B]"></div>

              <div className="flex items-center justify-between mb-4">
                <span className="font-script text-xs text-[#C2622B] tracking-wider uppercase">
                  one ticket home
                </span>
                <span className="text-[11px] font-mono text-[#8C7364]">ADMIT ONE</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#2A170E] mb-1">
                {ticket.name}
              </h3>

              <p className="text-xs text-[#5A3A28] mb-4">
                {ticket.breed}, {ticket.gender}
              </p>

              <div className="pt-3 border-t border-[#2A170E]/10 flex items-center justify-between text-xs text-[#5A301B]">
                <span className="flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
                  <span>{ticket.destination}</span>
                </span>
                <span className="font-script text-[#C2622B]">TeddyPups India home ♥</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default GoneHome
