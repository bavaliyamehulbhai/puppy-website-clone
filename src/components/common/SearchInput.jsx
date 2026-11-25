import React from 'react'
import { Search, X } from 'lucide-react'

function SearchInput({
  value,
  onChange,
  onClear,
  placeholder = 'Search puppies by name, breed, or color...',
  className = ''
}) {
  return (
    <div className={`relative ${className}`}>
      <Search className="w-4 h-4 text-[#8C7364] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="w-full pl-11 pr-10 py-3 rounded-full border border-[#2A170E]/15 bg-[#FFFDF8] text-sm focus:outline-none focus:ring-2 focus:ring-[#C2622B] shadow-sm text-[#2A170E] placeholder:text-[#8C7364]"
      />
      {value && (
        <button
          type="button"
          onClick={() => {
            if (onClear) onClear()
            else onChange('')
          }}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-[#8C7364] hover:text-[#2A170E] transition"
          aria-label="Clear search input"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  )
}

export default SearchInput
