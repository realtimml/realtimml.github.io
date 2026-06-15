import { createFileRoute, Link, Outlet, useChildMatches } from '@tanstack/react-router'
import { projects } from '../data/projects'
import { RiArrowDownSLine } from 'react-icons/ri'

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
})

function ProjectsPage() {
  const childMatches = useChildMatches()
  const isModalOpen = childMatches.length > 0

  return (
    <section className="min-h-screen w-full bg-[#A8D1D1]">
      <div className={`transition-opacity duration-300 ${isModalOpen ? 'opacity-25 pointer-events-none' : ''}`}>
        <div className="w-full flex justify-end py-8 pr-12">
          <span className="text-3xl font-semibold flex items-center gap-4">Filter By <RiArrowDownSLine /></span>
        </div>
        <div className="grid grid-cols-3 gap-4 px-12">
          {projects.map((project) => (
            <Link key={project.slug} to={`/projects/${project.slug}`}>
              <img src={project.images[0]} alt={project.title} />
            </Link>
          ))}
        </div>
      </div>
      <Outlet />
    </section>
  )
}
