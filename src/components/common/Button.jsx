import React from 'react'
import { Link } from 'react-router-dom'

function Button({
  children,
  variant = 'primary',
  to,
  href,
  type = 'button',
  className = '',
  onClick,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 active:scale-95 text-center'
  
  const variants = {
    primary: 'bg-[#C2622B] text-white hover:bg-[#A85221] shadow-sm hover:shadow-md px-6 py-3 text-sm md:text-base',
    secondary: 'bg-[#FFECC8] text-[#5A301B] hover:bg-[#F8DBAE] px-6 py-3 text-sm md:text-base',
    outline: 'border border-[#2A170E]/20 text-[#2A170E] hover:bg-[#FBE9CC]/40 px-6 py-3 text-sm md:text-base',
    dark: 'bg-[#2A170E] text-[#FFFDF8] hover:bg-[#3D2518] px-6 py-3 text-sm md:text-base',
    ghost: 'text-[#C2622B] hover:underline px-3 py-1.5 text-sm',
    badge: 'px-3 py-1 rounded-full text-xs font-semibold'
  }

  const styles = `${baseStyles} ${variants[variant] || variants.primary} ${className}`

  if (to) {
    return (
      <Link to={to} className={styles} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={styles} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={styles} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default Button
