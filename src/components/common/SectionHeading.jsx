import React from 'react'

function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`mb-10 md:mb-14 max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="font-script inline-block text-sm md:text-base font-semibold text-[#C2622B] tracking-wide mb-2.5">
          {eyebrow}
        </span>
      )}
      {title && (
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2A170E] leading-tight tracking-tight">
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-4 text-base md:text-lg text-[#5A3A28] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
