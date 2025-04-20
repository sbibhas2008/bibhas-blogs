import Link from 'next/link'
import React from 'react'

type ButtonProps = {
  children: React.ReactNode
  className?: string
} & (
  | {
      href: string
      onClick?: never
      target?: string
    }
  | {
      href?: never
      onClick: () => void
      target?: never
    }
)

export const Button = ({ children, className = '', href, onClick, target }: ButtonProps) => {
  const classes = `inline-flex items-center px-4 py-2 rounded-lg border border-white transition-colors group ${className}`

  if (href) {
    return (
      <Link href={href} className={classes} target={target}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} onClick={onClick} type="button">
      {children}
    </button>
  )
}
