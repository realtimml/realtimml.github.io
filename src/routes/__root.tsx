import { Outlet, createRootRoute } from '@tanstack/react-router'
import { BottomNav } from '../components/BottomNav'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <div className="flex min-h-app flex-col bg-zinc-950 text-zinc-50">
      <main className="w-full flex-1">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  )
}
