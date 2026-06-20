import { Outlet, createRootRoute, useRouterState } from '@tanstack/react-router'
import { BottomNav } from '../components/BottomNav'
import { SafariStatusBarSampler } from '../components/SafariStatusBarSampler'
import { useBodyScrollLock } from '../utils/useBodyScrollLock'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const isProjectsRoute =
    pathname === '/projects' || pathname.startsWith('/projects/')
  useBodyScrollLock(!isProjectsRoute)

  return (
    <>
      <SafariStatusBarSampler />
      <div
        className={`bg-zinc-950 text-zinc-50 ${isProjectsRoute ? 'min-h-screen' : 'h-dvh overflow-hidden overscroll-none'}`}
      >
        <main className="w-full">
          <Outlet />
        </main>
        <BottomNav />
      </div>
    </>
  )
}
