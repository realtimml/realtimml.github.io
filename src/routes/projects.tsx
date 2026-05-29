import { createFileRoute, Link } from '@tanstack/react-router'
import { projects } from '../data/projects'

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
})

function ProjectsPage() {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-400">
          Projects
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-white">Selected Work</h1>
        <p className="max-w-2xl text-lg text-zinc-300">
          A programmatic project index powered by typed project objects.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            to="/projects/$slug"
            params={{ slug: project.slug }}
            className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 transition hover:border-zinc-600"
          >
            <img
              src={project.images[0]}
              alt={`${project.title} preview`}
              className="h-56 w-full object-cover opacity-90 transition group-hover:opacity-100"
            />
            <div className="space-y-3 p-5">
              <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
              <p className="text-sm leading-6 text-zinc-300">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
