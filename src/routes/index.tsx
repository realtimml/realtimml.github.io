import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-400">
          Portfolio
        </p>
        <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-white">
          Building interactive systems, creative tools, and real-time web experiences.
        </h1>
        <p className="max-w-2xl text-lg text-zinc-300">
          A compact home for selected projects, experiments, and ways to get in touch.
        </p>
      </div>

      <Link
        to="/projects"
        className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
      >
        View Projects
      </Link>
    </section>
  )
}
