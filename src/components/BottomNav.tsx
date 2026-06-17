import { Link, useRouterState } from '@tanstack/react-router'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Me' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
] as const

export function BottomNav() {
  const isProjectModalOpen = useRouterState({
    select: ({ location }) => /^\/projects\/[^/]+$/.test(location.pathname),
  })

  return (
    <nav
      className={`fixed bottom-0 mb-20 ml-20 flex gap-5 font-semibold text-7xl text-white/75 divide-x-4 divide-white/75 transition-opacity duration-300 ${isProjectModalOpen ? 'opacity-25 pointer-events-none' : ''}`}
    >
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          // activeOptions={{ exact: item.to === "/" }}
          activeProps={{ className: 'text-white' }}
          className="transition-colors hover:text-white pr-5"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
