import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { useScrollToTop } from '../../hooks/useScrollToTop'

function MainLayout() {
  useScrollToTop()

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF8]">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
