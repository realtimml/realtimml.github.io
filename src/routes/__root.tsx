import { Outlet, createRootRoute } from '@tanstack/react-router'
import { BottomNav } from '../components/BottomNav'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <div className="min-h-app bg-zinc-950 text-zinc-50">
      <main className="w-full">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  )
}
