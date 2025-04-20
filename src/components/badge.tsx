import React from 'react'

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline'
}

const variantClasses = {
  default: 'bg-secondary text-white',
  secondary: 'bg-muted text-foreground',
  outline: 'border border-border text-foreground',
}

export const Badge: React.FC<BadgeProps> = ({ variant = 'default', ...props }) => {
  return <div className={`px-3 py-1 text-sm rounded-full ${variantClasses[variant]}`} {...props} />
}
