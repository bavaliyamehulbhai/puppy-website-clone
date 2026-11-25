import React from 'react'
import { Link } from 'react-router-dom'
import { Home as HomeIcon } from 'lucide-react'

function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4 py-16">
      <div className="text-center max-w-md">
        <span className="font-serif text-7xl font-bold text-[#C2622B]">404</span>
        <h1 className="font-serif text-2xl font-bold text-[#2A170E] mt-4 mb-2">Page not found</h1>
        <p className="text-[#5A3A28] mb-8">
          The puppy page you were looking for seems to have wandered off to a loving home.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-[#C2622B] text-white px-6 py-3 rounded-full font-medium hover:bg-[#A85221] transition shadow"
        >
          <HomeIcon className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
      </div>
    </main>
  )
}

export default NotFound
