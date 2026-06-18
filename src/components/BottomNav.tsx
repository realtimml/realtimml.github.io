import { useEffect, useRef } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Me' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
] as const

function getActiveNavTo(pathname: string) {
  if (pathname === '/') return '/'
  const match = navItems.find(
    (item) => item.to !== '/' && pathname.startsWith(item.to),
  )
  return match?.to ?? pathname
}

function scrollLinkIntoView(link: HTMLElement) {
  link.scrollIntoView({
    behavior: 'smooth',
    inline: 'nearest',
    block: 'nearest',
  })
}

export function BottomNav() {
  const navRef = useRef<HTMLElement>(null)
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const isProjectModalOpen = useRouterState({
    select: ({ location }) => /^\/projects\/[^/]+$/.test(location.pathname),
  })

  useEffect(() => {
    const activeLink = navRef.current?.querySelector<HTMLElement>(
      `[data-nav-to="${getActiveNavTo(pathname)}"]`,
    )
    if (activeLink) scrollLinkIntoView(activeLink)
  }, [pathname])

  return (
    <>
      <div
          aria-hidden
          className="pointer-events-none fixed inset-x-0 top-128 bottom-0 bg-gradient-to-t from-black/55 via-black/35 to-transparent"
        />
      <nav
        ref={navRef}
        className={`fixed inset-x-0 bottom-0 mb-25 sm:mb-20 flex h-[1.1lh] gap-5 overflow-x-auto px-10 sm:px-20 text-nowrap font-semibold text-6xl sm:text-7xl text-white/75 divide-x-4 divide-white/75 scrollbar-none transition-opacity duration-300 [&::-webkit-scrollbar]:hidden ${isProjectModalOpen ? 'opacity-25 pointer-events-none' : ''}`}
      >
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            data-nav-to={item.to}
            activeProps={{ className: 'text-white' }}
            className="shrink-0 transition-colors hover:text-white pr-5"
            onClick={(e) => scrollLinkIntoView(e.currentTarget)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </>
  )
}
