import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout'
import Home from '../pages/Home'
import Puppies from '../pages/Puppies'
import PuppyDetails from '../pages/PuppyDetails'
import HappyFamilies from '../pages/HappyFamilies'
import HowItWorks from '../pages/HowItWorks'
import FAQ from '../pages/FAQ'
import Contact from '../pages/Contact'
import GoneHome from '../pages/GoneHome'
import NotFound from '../pages/NotFound'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Core routes discovered in Phase 1 */}
        <Route path="/" element={<Home />} />
        <Route path="/puppies" element={<Puppies />} />
        <Route path="/puppies/:slug" element={<PuppyDetails />} />
        <Route path="/happy-families" element={<HappyFamilies />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gone-home" element={<GoneHome />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
