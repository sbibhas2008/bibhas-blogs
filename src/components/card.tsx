import Link from 'next/link'
import React from 'react'

export const Card: React.FC<{ children?: React.ReactNode; className?: string }> = ({ children, className }) => {
  return (
    <div
      className={`p-8 bg-background-500 rounded-md border border-secondary hover:shadow-2xl cursor-pointer ${className}`}
    >
      {children}
    </div>
  )
}

export const LinkCard: React.FC<{ href: string; children?: React.ReactNode; className?: string }> = ({
  href,
  children,
  className,
}) => {
  return (
    <Link href={href}>
      <Card className={className}>{children}</Card>
    </Link>
  )
}
