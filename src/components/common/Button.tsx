import { cn } from '@/utils/cn'
import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  as?: React.ElementType
  to?: string
}

export default function Button({
  className,
  variant = 'primary',
  size = 'md',
  as: Component = 'button',
  ...props
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none cursor-pointer'
  const variants = {
    primary: 'bg-espresso text-ivory hover:bg-champagne hover:text-espresso shadow-soft',
    secondary: 'bg-champagne text-espresso hover:bg-champagne-deep shadow-soft',
    outline: 'border border-espresso/30 text-espresso hover:border-espresso hover:bg-espresso/5',
    ghost: 'text-espresso hover:bg-espresso/5',
  }
  const sizes = {
    sm: 'text-xs px-4 py-2 rounded-full',
    md: 'text-sm px-6 py-3 rounded-full',
    lg: 'text-base px-8 py-4 rounded-full',
  }
  return (
    <Component
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  )
}