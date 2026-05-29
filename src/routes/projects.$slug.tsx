import { createFileRoute, Link } from '@tanstack/react-router'
import { getProjectBySlug } from '../data/projects'

export const Route = createFileRoute('/projects/$slug')({
  component: ProjectPage,
})

function ProjectPage() {
  const { slug } = Route.useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <section className="space-y-5">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-400">
          Project Not Found
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-white">
          No project matches "{slug}"
        </h1>
        <Link to="/projects" className="text-sm font-semibold text-zinc-200 hover:text-white">
          Back to projects
        </Link>
      </section>
    )
  }

  const ProjectContent = project.component

  return (
    <article className="space-y-8">
      <Link to="/projects" className="text-sm font-semibold text-zinc-400 hover:text-white">
        Back to projects
      </Link>

      <header className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-400">
          Project
        </p>
        <h1 className="text-5xl font-bold tracking-tight text-white">{project.title}</h1>
        <p className="max-w-3xl text-lg leading-8 text-zinc-300">{project.description}</p>
      </header>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
            {tag}
          </span>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {project.images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`${project.title} screenshot ${index + 1}`}
            className="rounded-2xl border border-zinc-800"
          />
        ))}
      </div>

      {ProjectContent ? <ProjectContent /> : null}
    </article>
  )
}
