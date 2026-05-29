import { Link, Outlet, createRootRoute } from '@tanstack/react-router'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
] as const

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <main className="mx-auto max-w-5xl px-6 py-12">
        <Outlet />
      </main>

      <div className="flex gap-4 text-sm text-zinc-300">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            activeOptions={{ exact: item.to === "/" }}
            activeProps={{ className: "text-white" }}
            className="transition-colors hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
