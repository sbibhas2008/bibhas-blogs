'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Logo = () => {
  // TODO: extract to an svg file
  return (
    <div className="h-8">
      <svg viewBox="0 0 275 113" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
        <defs id="SvgjsDefs5746"></defs>
        <g transform="matrix(1,0,0,1,0,0)" fill="none">
          <rect y="0" height="1" width="1" opacity="0"></rect>
          <rect y="108" width="275" height="5"></rect>
        </g>
        <g transform="matrix(1.25,0,0,1.25,0,-5.4862494468688965)" fill="white">
          <g xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M97.938,68.771h-6.316V20.81c0-1.115-0.905-2.021-2.021-2.021H10.399c-1.115,0-2.021,0.906-2.021,2.021v47.961H2.062    C0.924,68.771,0,69.694,0,70.832v2.084c0,0.103,0.008,0.204,0.022,0.306c0.527,3.521,3.348,7.447,7.159,7.922    c0.083,0.01,0.169,0.017,0.252,0.017l84.51,0.071h0.003c4.404,0,7.604-4.197,8.041-8.085c0.009-0.075,0.013-0.152,0.013-0.23    v-2.084C100,69.694,99.076,68.771,97.938,68.771z M12.42,22.831h75.16v45.939H59.985c-0.133,0-0.262,0.016-0.386,0.04H41.16    c-0.128-0.025-0.261-0.04-0.396-0.04H12.42V22.831z M91.948,77.107L7.586,77.036c-1.461-0.261-3.024-2.16-3.434-4.143h35.086    c0.702,1.246,2.017,2.085,3.519,2.085h15.233c1.502,0,2.816-0.839,3.52-2.085h34.35C95.538,74.926,93.854,77.107,91.948,77.107z     M38.84,37.498c-0.814-0.814-2.133-0.814-2.947,0l-8.689,8.689c-0.814,0.814-0.814,2.133,0,2.948l8.689,8.688    c0.407,0.407,0.94,0.611,1.474,0.611s1.066-0.204,1.474-0.611c0.814-0.813,0.814-2.133,0-2.947l-7.216-7.215l7.216-7.216    C39.654,39.631,39.654,38.312,38.84,37.498z M59.361,57.823c0.406,0.407,0.939,0.611,1.474,0.611c0.533,0,1.066-0.204,1.474-0.611    l8.688-8.688c0.814-0.814,0.814-2.133,0-2.948l-8.688-8.689c-0.814-0.814-2.134-0.814-2.947,0c-0.814,0.814-0.814,2.133,0,2.947    l7.215,7.216l-7.215,7.215C58.547,55.69,58.547,57.01,59.361,57.823z M41.793,62.275c0.299,0.148,0.617,0.22,0.931,0.22    c0.765,0,1.5-0.422,1.866-1.152l12.506-25.011c0.515-1.03,0.098-2.281-0.933-2.796c-1.029-0.513-2.281-0.098-2.797,0.932    L40.861,59.479C40.346,60.509,40.763,61.76,41.793,62.275z"></path>
            </g>
          </g>
        </g>
        <g transform="matrix(4.082914553297635,0,0,4.082914553297635,140.2638192544567,4.625626223168172)" fill="white">
          <path d="M1.16 20 l0 -14.3 l7.46 0 c3.76 0 4.94 1.84 4.94 3.76 l0 0.08 c0 1.76 -0.98 2.76 -2.56 3.1 c1.58 0.22 2.86 1.26 2.86 3.3 l0 0.08 c0 2.5 -1.56 3.98 -5.46 3.98 l-7.24 0 z M6.34 16.56 l0.96 0 c0.9 0 1.32 -0.44 1.32 -1.16 l0 -0.08 c0 -0.72 -0.38 -1.14 -1.38 -1.14 l-0.9 0 l0 2.38 z M6.34 11.1 l1.04 0 c0.84 0 1.18 -0.28 1.18 -0.92 l0 -0.08 c0 -0.64 -0.32 -0.98 -1.18 -0.98 l-1.04 0 l0 1.98 z M20.96 20.28 c-4.08 0 -6.48 -1.48 -6.52 -4.92 l5.02 0 c0.04 0.68 0.42 1.22 1.5 1.22 c0.84 0 1.1 -0.32 1.1 -0.76 c0 -0.5 -0.44 -0.74 -1.62 -0.88 c-4.26 -0.46 -5.72 -1.64 -5.72 -4.68 c0 -2.78 2.22 -4.78 6.02 -4.78 c3.74 0 5.76 1.46 6 4.74 l-4.92 0 c-0.04 -0.62 -0.42 -1.04 -1.1 -1.04 c-0.64 0 -0.96 0.26 -0.96 0.68 c0 0.48 0.38 0.74 1.6 0.86 c3.54 0.34 5.8 1.2 5.8 4.52 c0 2.72 -2.08 5.04 -6.2 5.04 z M30.479999999999997 20.28 c-1.42 0 -2.44 -1.06 -2.44 -2.4 c0 -1.32 1.02 -2.4 2.44 -2.4 c1.46 0 2.52 1.08 2.52 2.4 c0 1.34 -1.06 2.4 -2.52 2.4 z"></path>
        </g>
      </svg>
    </div>
  )
}

const NavigationLinks = ({
  links,
  getLinkClass,
  onClick,
}: {
  links: { path: string; label: string }[]
  getLinkClass: (path: string) => string
  onClick?: () => void
}) => {
  return (
    <>
      {links.map(({ path, label }) => (
        <Link key={path} href={path}>
          <div className={`py-4 ${getLinkClass(path)}`} onClick={onClick}>
            {label}
          </div>
        </Link>
      ))}
    </>
  )
}

const DesktopNavigation = ({
  links,
  getLinkClass,
}: {
  links: { path: string; label: string }[]
  getLinkClass: (path: string) => string
}) => {
  return (
    <div className="hidden sm:flex space-x-8">
      <NavigationLinks links={links} getLinkClass={getLinkClass} />
    </div>
  )
}

const MobileNavigation = ({
  isMenuOpen,
  setIsMenuOpen,
  links,
  getLinkClass,
}: {
  isMenuOpen: boolean
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  links: { path: string; label: string }[]
  getLinkClass: (path: string) => string
}) => {
  const HamburgerIcon = () => (
    // TODO: extract to an svg file
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
  )

  return (
    <>
      <div className="sm:hidden">
        <button className="p-2 hover:cursor-pointer" onClick={() => setIsMenuOpen((prev) => !prev)}>
          <HamburgerIcon />
        </button>
      </div>

      <div
        className={`absolute px-8 top-16 left-0 w-full bg-background shadow-md shadow-secondary rounded-b-md transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <NavigationLinks links={links} getLinkClass={getLinkClass} onClick={() => setIsMenuOpen(false)} />
      </div>
    </>
  )
}

export const Navigation = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const links = [
    { path: '/about', label: 'About' },
    { path: '/posts', label: 'Posts' },
  ]

  const getLinkClass = (path: string) => (pathname === path ? 'underline' : '')

  return (
    // Added a wrapper div with padding-bottom equal to the height of the navbar
    <div className="w-full pb-16">
      <div className="fixed top-0 left-0 h-16 w-full bg-background text-fontPrimary px-8 z-[9999]">
        <div className="flex items-center justify-between sm:justify-center sm:space-x-8 h-full">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <Logo />
          </Link>

          <DesktopNavigation links={links} getLinkClass={getLinkClass} />
          <MobileNavigation
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            links={links}
            getLinkClass={getLinkClass}
          />
        </div>
      </div>
    </div>
  )
}
