import React from 'react'

function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-[#FFECC8] text-[#5A301B]',
    available: 'bg-[#EBF5E9] text-[#5F8F4A] border border-[#5F8F4A]/20',
    video: 'bg-black/60 text-white backdrop-blur-sm',
    imported: 'bg-[#E6F0FA] text-[#2F6E9E]',
    terracotta: 'bg-[#C2622B]/10 text-[#C2622B]',
    script: 'font-script bg-transparent text-[#C2622B] text-sm'
  }

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${variants[variant] || variants.default} ${className}`}>
      {children}
    </span>
  )
}

export default Badge
