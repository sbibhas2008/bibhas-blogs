'use client'

import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const DesktopNavigation = ({ getLinkClass }: { getLinkClass: (path: string) => string }) => {
  return (
    <div className="hidden sm:flex space-x-8">
      <Link href="/about">
        <span className={getLinkClass('/about')}>About</span>
      </Link>
      <Link href="/posts">
        <span className={getLinkClass('/posts')}>Posts</span>
      </Link>
    </div>
  )
}

const MobileNavigation = ({
  isMenuOpen,
  setIsMenuOpen,
  getLinkClass,
}: {
  isMenuOpen: boolean
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  getLinkClass: (path: string) => string
}) => {
  const HamburgerIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
  )

  return (
    <>
      <div className="sm:hidden">
        <button className="p-2" onClick={() => setIsMenuOpen((prev) => !prev)}>
          <HamburgerIcon />
        </button>
      </div>

      <div
        className={`absolute top-16 left-0 w-full bg-background shadow-md shadow-secondary rounded-b-md transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <Link href="/about">
          <div className={`p-4 ${getLinkClass('/about')}`} onClick={() => setIsMenuOpen(false)}>
            About
          </div>
        </Link>
        <Link href="/posts">
          <div className={`p-4 ${getLinkClass('/posts')}`} onClick={() => setIsMenuOpen(false)}>
            Posts
          </div>
        </Link>
      </div>
    </>
  )
}

export const Navigation = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isLinkActive = useMemo(() => {
    return (path: string) => pathname === path
  }, [pathname])

  const getLinkClass = (path: string) => (isLinkActive(path) ? 'underline' : '')

  return (
    <div className="fixed top-0 left-0 h-16 w-full bg-background text-fontPrimary">
      <div className="flex items-center justify-between sm:justify-center sm:space-x-8 h-full px-4">
        <Link href="/">
          <div className={`font-bold ${getLinkClass('/')}`} onClick={() => setIsMenuOpen(false)}>
            Bibhas Sharma {/* TODO: replace with my logo */}
          </div>
        </Link>

        <DesktopNavigation getLinkClass={getLinkClass} />
        <MobileNavigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} getLinkClass={getLinkClass} />
      </div>
    </div>
  )
}
