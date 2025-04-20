import Link from 'next/link'
import React from 'react'

type ButtonProps = {
  children: React.ReactNode
  className?: string
  href?: string
  onClick?: () => void
  target?: string
  type?: 'button' | 'submit' | 'reset'
  variant?: keyof typeof ButtonVariant
}

enum ButtonVariant {
  primary = 'primary',
  secondary = 'secondary',
}

const classes = 'inline-flex items-center px-6 py-2 rounded-full'
const variants: Record<ButtonVariant, string> = {
  primary: 'bg-[#ac7553] text-white hover:bg-[#8b5b3a]',
  secondary: 'bg-background border border-[#ac7553] hover:bg-background-500',
}

export const Button = ({ children, className = '', href, onClick, target, type, variant }: ButtonProps) => {
  const variantClass = variants[variant || 'primary']
  const classesWithVariant = `${classes} ${variantClass} ${className}`

  if (href) {
    return (
      <Link href={href} className={classesWithVariant} target={target}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classesWithVariant} onClick={onClick} type={type || 'button'}>
      {children}
    </button>
  )
}
