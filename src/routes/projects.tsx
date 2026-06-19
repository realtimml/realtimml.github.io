import { createFileRoute, Outlet, useChildMatches } from '@tanstack/react-router'
import { useState } from 'react'
import { useBodyBackground } from '../utils/useBodyBackground'
import { projects } from '../data/projects'
import { FilterDropdown, defaultFilters } from '../components/FilterDropdown'
import { ProjectCard } from '../components/ProjectCard'
import type { Filters } from '../components/FilterDropdown'
import { preloadImage } from '../utils/preloadImage'

export const Route = createFileRoute('/projects')({
  loader: () => {
    projects.forEach((p) => preloadImage(p.images[0]))
  },
  component: ProjectsPage,
})

const uniqueYears = [...new Set(projects.map((p) => p.date?.slice(0, 4)).filter(Boolean) as string[])].sort()
const uniqueTechs = [...new Set(projects.flatMap((p) => p.tags))].sort()

function ProjectsPage() {
  useBodyBackground('#A8D1D1')
  const childMatches = useChildMatches()
  const isModalOpen = childMatches.length > 0

  const [filters, setFilters] = useState<Filters>(defaultFilters)

  const filteredProjects = projects.filter((p) => {
    if (filters.award && !p.award) return false
    if (filters.year && p.date?.slice(0, 4) !== filters.year) return false
    if (filters.techs.length > 0 && !filters.techs.every((t) => p.tags.includes(t))) return false
    return true
  })

  return (
    <section className="min-h-app w-full bg-[#A8D1D1]">
      <div className={`transition-opacity duration-300 ${isModalOpen ? 'opacity-25 pointer-events-none' : ''}`}>
        <div className="w-full flex justify-end py-8 pr-12">
          <FilterDropdown
            filters={filters}
            onChange={setFilters}
            uniqueYears={uniqueYears}
            uniqueTechs={uniqueTechs}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 px-6 sm:px-12 pb-50 sm:pb-0">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              imageUrl={project.images[0]}
              title={project.title}
              award={project.award}
            />
          ))}
        </div>
      </div>
      <Outlet />
    </section>
  )
}
