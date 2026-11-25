import React from 'react'
import { Link } from 'react-router-dom'
import { Play } from 'lucide-react'
import Badge from './Badge'

function PuppyCard({ puppy, className = '' }) {
  return (
    <Link
      to={`/puppies/${puppy.slug}`}
      className={`group block bg-white rounded-3xl overflow-hidden border border-[#2A170E]/10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col ${className}`}
    >
      {}
      <div className="relative aspect-square w-full bg-[#FBE9CC]/20 overflow-hidden">
        <img
          src={puppy.image}
          alt={`${puppy.name} - ${puppy.breed}`}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.src = '/assets/brand/logo.png'
            e.target.className = 'w-1/2 h-1/2 m-auto object-contain opacity-50'
          }}
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
          <Badge variant={puppy.status === 'Available' ? 'available' : 'default'}>
            <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
            <span>{puppy.status}</span>
          </Badge>

          {puppy.hasVideo && (
            <Badge variant="video">
              <Play className="w-3 h-3 fill-current" />
              <span>video</span>
            </Badge>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow justify-between bg-white">
        <div>
          <h3 className="font-serif text-xl font-bold text-[#2A170E] group-hover:text-[#C2622B] transition-colors leading-snug">
            {puppy.name}
          </h3>
          <p className="text-sm text-[#5A3A28] mt-1 flex items-center gap-1.5">
            <span>{puppy.breed}</span>
            <span>·</span>
            <span className="capitalize">{puppy.gender}</span>
            <span>·</span>
            <span>{puppy.age}</span>
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-[#2A170E]/5 flex items-center justify-between text-xs">
          <span className="text-[#8C7364]">{puppy.originLabel}</span>
          <span className="font-semibold text-[#C2622B] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            View profile →
          </span>
        </div>
      </div>
    </Link>
  )
}

export default PuppyCard
