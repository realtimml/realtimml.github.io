import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <section className="min-h-screen w-full bg-[#F1F7B5]">
      <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-400">
        About
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-white">About Tim</h1>
      <p className="text-lg leading-8 text-zinc-300">
        I design and build software that blends product thinking, polished interfaces, and
        practical engineering. This page is a placeholder for a fuller bio, timeline, and
        skill summary.
      </p>
    </section>
  )
}
