import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, SlidersHorizontal, Sparkles, X } from 'lucide-react'
import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import PuppyCard from '../components/common/PuppyCard'
import { puppyData } from '../data/puppyData'

function Puppies() {
  const [searchParams, setSearchParams] = useSearchParams()
  const breedParam = searchParams.get('breed') || 'all'
  const originParam = searchParams.get('origin') || 'all'
  
  const [searchTerm, setSearchTerm] = useState('')
  const [genderFilter, setGenderFilter] = useState('all')
  const [sortBy, setSortBy] = useState('newest')

  const breeds = ['all', 'maltipoo', 'cavapoo', 'pomeranian', 'poodle', 'shih-tzu']
  const origins = [
    { id: 'all', label: 'All Locations' },
    { id: 'local', label: 'In Dubai showroom' },
    { id: 'imported', label: 'Imported for you' }
  ]

  const handleBreedChange = (breed) => {
    const newParams = new URLSearchParams(searchParams)
    if (breed === 'all') {
      newParams.delete('breed')
    } else {
      newParams.set('breed', breed)
    }
    setSearchParams(newParams)
  }

  const handleOriginChange = (origin) => {
    const newParams = new URLSearchParams(searchParams)
    if (origin === 'all') {
      newParams.delete('origin')
    } else {
      newParams.set('origin', origin)
    }
    setSearchParams(newParams)
  }

  const clearAllFilters = () => {
    setSearchParams({})
    setSearchTerm('')
    setGenderFilter('all')
    setSortBy('newest')
  }

  const filteredPuppies = useMemo(() => {
    return puppyData.filter((p) => {
      // Exclude gone home on available page unless searched
      if (p.status !== 'Available') return false

      // Breed filter
      if (breedParam !== 'all') {
        const normalizedBreed = p.breed.toLowerCase().replace(/[^a-z]/g, '')
        const normalizedParam = breedParam.toLowerCase().replace(/[^a-z]/g, '')
        if (!normalizedBreed.includes(normalizedParam)) return false
      }

      // Origin filter
      if (originParam !== 'all' && p.origin !== originParam) {
        return false
      }

      // Gender filter
      if (genderFilter !== 'all' && p.gender.toLowerCase() !== genderFilter) {
        return false
      }

      // Search term
      if (searchTerm.trim()) {
        const term = searchTerm.toLowerCase()
        const matchesName = p.name.toLowerCase().includes(term)
        const matchesBreed = p.breed.toLowerCase().includes(term)
        const matchesColor = p.color?.toLowerCase().includes(term)
        if (!matchesName && !matchesBreed && !matchesColor) return false
      }

      return true
    })
  }, [breedParam, originParam, genderFilter, searchTerm])

  return (
    <div className="py-12 md:py-20 bg-[#FFFDF8] min-h-screen">
      <Container>
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="font-script text-base text-[#C2622B] mb-2 block">
            find your forever companion
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2A170E] tracking-tight mb-4">
            Available Puppies
          </h1>
          <p className="text-base text-[#5A3A28] leading-relaxed">
            Every puppy is vet-checked, fully vaccinated, and ready to meet you in our Downtown Dubai showroom or delivered safely to your home.
          </p>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#2A170E]/10 mb-10 space-y-6">
          {/* Search Input & Sort */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-96">
              <Search className="w-4 h-4 text-[#8C7364] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Sniff out a puppy by name or color..."
                className="w-full pl-11 pr-4 py-2.5 rounded-full border border-[#2A170E]/15 bg-[#FFFDF8] text-sm focus:outline-none focus:ring-2 focus:ring-[#C2622B]"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#8C7364]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end text-sm">
              <span className="text-[#8C7364] text-xs">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3.5 py-2 rounded-full border border-[#2A170E]/15 bg-white text-xs font-medium text-[#2A170E] focus:outline-none focus:ring-2 focus:ring-[#C2622B]"
              >
                <option value="newest">Featured & Newest</option>
                <option value="youngest">Age (Youngest)</option>
              </select>
            </div>
          </div>

          {/* Breed Filter Pills */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#8C7364] block mb-2.5">
              Filter by Breed:
            </span>
            <div className="flex flex-wrap gap-2">
              {breeds.map((b) => {
                const isActive = breedParam === b
                return (
                  <button
                    key={b}
                    onClick={() => handleBreedChange(b)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold capitalize transition ${
                      isActive
                        ? 'bg-[#C2622B] text-white shadow-sm'
                        : 'bg-[#FFFDF8] border border-[#2A170E]/15 text-[#5A301B] hover:border-[#C2622B]'
                    }`}
                  >
                    {b === 'all' ? 'All Breeds' : b.replace('-', ' ')}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Location & Gender Pills */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#2A170E]/10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-[#8C7364] font-medium mr-1">Origin:</span>
              {origins.map((o) => {
                const isActive = originParam === o.id
                return (
                  <button
                    key={o.id}
                    onClick={() => handleOriginChange(o.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition ${
                      isActive
                        ? 'bg-[#FFECC8] text-[#5A301B] font-semibold border border-[#F2BE6B]'
                        : 'bg-[#FFFDF8] text-[#5A3A28] border border-[#2A170E]/10 hover:bg-[#FBE9CC]/40'
                    }`}
                  >
                    {o.label}
                  </button>
                )
              })}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-[#8C7364] font-medium mr-1">Gender:</span>
              {['all', 'boy', 'girl'].map((g) => (
                <button
                  key={g}
                  onClick={() => setGenderFilter(g)}
                  className={`px-3 py-1.5 rounded-full text-xs capitalize transition ${
                    genderFilter === g
                      ? 'bg-[#2A170E] text-white font-medium'
                      : 'bg-[#FFFDF8] text-[#5A3A28] border border-[#2A170E]/10 hover:bg-[#FBE9CC]/40'
                  }`}
                >
                  {g === 'all' ? 'Any' : g}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Counter and Active Filter Tags */}
        <div className="flex items-center justify-between text-xs text-[#8C7364] mb-6 px-1">
          <span>Showing <strong>{filteredPuppies.length}</strong> available puppies</span>
          {(breedParam !== 'all' || originParam !== 'all' || genderFilter !== 'all' || searchTerm) && (
            <button
              onClick={clearAllFilters}
              className="text-[#C2622B] font-semibold hover:underline flex items-center gap-1"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Puppies Grid */}
        {filteredPuppies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPuppies.map((puppy) => (
              <PuppyCard key={puppy.id} puppy={puppy} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center max-w-md mx-auto border border-[#2A170E]/10">
            <span className="font-serif text-4xl block mb-3">🐶</span>
            <h3 className="font-serif text-xl font-bold text-[#2A170E] mb-2">No puppies found</h3>
            <p className="text-xs text-[#5A3A28] mb-6">
              We couldn't find any puppies matching those specific filters. Reach out on WhatsApp and our concierge can source your dream breed!
            </p>
            <button
              onClick={clearAllFilters}
              className="px-6 py-2.5 rounded-full bg-[#C2622B] text-white text-xs font-semibold hover:bg-[#A85221]"
            >
              Clear all filters
            </button>
          </div>
        )}
      </Container>
    </div>
  )
}

export default Puppies
