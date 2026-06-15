import { createFileRoute, Link, Outlet, useChildMatches } from '@tanstack/react-router'
import { useRef, useState, useEffect } from 'react'
import { projects } from '../data/projects'
import { RiArrowDownSLine, RiTrophyFill } from 'react-icons/ri'

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
})

type Filters = {
  award: boolean
  year: string | null
  techs: string[]
}

const defaultFilters: Filters = { award: false, year: null, techs: [] }

const uniqueYears = [...new Set(projects.map((p) => p.date?.slice(0, 4)).filter(Boolean) as string[])].sort()
const uniqueTechs = [...new Set(projects.flatMap((p) => p.tags))].sort()

function ProjectsPage() {
  const childMatches = useChildMatches()
  const isModalOpen = childMatches.length > 0

  const [isOpen, setIsOpen] = useState(false)
  const [filters, setFilters] = useState<Filters>(defaultFilters)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const filteredProjects = projects.filter((p) => {
    if (filters.award && !p.award) return false
    if (filters.year && p.date?.slice(0, 4) !== filters.year) return false
    if (filters.techs.length > 0 && !filters.techs.every((t) => p.tags.includes(t))) return false
    return true
  })

  const activeFilterCount =
    (filters.award ? 1 : 0) + (filters.year ? 1 : 0) + filters.techs.length
  const hasActiveFilters = activeFilterCount > 0

  function toggleTech(tech: string) {
    setFilters((f) => ({
      ...f,
      techs: f.techs.includes(tech) ? f.techs.filter((t) => t !== tech) : [...f.techs, tech],
    }))
  }

  return (
    <section className="min-h-screen w-full bg-[#A8D1D1]">
      <div className={`transition-opacity duration-300 ${isModalOpen ? 'opacity-25 pointer-events-none' : ''}`}>
        <div className="w-full flex justify-end py-8 pr-12">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen((o) => !o)}
              className="text-3xl font-semibold flex items-center gap-4 cursor-pointer select-none"
            >
              {hasActiveFilters && `(${activeFilterCount})`} Filter By
              <RiArrowDownSLine className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg p-4 z-50 flex flex-col gap-4">

                {/* Award */}
                <div>
                  <label className="flex items-center gap-2 cursor-pointer select-none text-black font-semibold">
                    Has Award
                    <input
                      type="checkbox"
                      checked={filters.award}
                      onChange={(e) => setFilters((f) => ({ ...f, award: e.target.checked }))}
                      className="accent-black"
                    />
                  </label>
                </div>

                {/* Year */}
                <div>
                  <p className="font-semibold text-black mb-2">Year</p>
                  <div className="flex flex-wrap gap-2">
                    {uniqueYears.map((year) => (
                      <button
                        key={year}
                        onClick={() => setFilters((f) => ({ ...f, year: f.year === year ? null : year }))}
                        className={`text-sm px-3 py-1 rounded-full border transition-colors ${
                          filters.year === year
                            ? 'bg-black text-white border-black'
                            : 'bg-white text-black border-black hover:bg-black hover:text-white'
                        }`}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <p className="font-semibold text-black mb-2">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {uniqueTechs.map((tech) => (
                      <button
                        key={tech}
                        onClick={() => toggleTech(tech)}
                        className={`text-sm px-3 py-1 rounded-full border transition-colors ${
                          filters.techs.includes(tech)
                            ? 'bg-black text-white border-black'
                            : 'bg-white text-black border-black hover:bg-black hover:text-white'
                        }`}
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Clear */}
                {hasActiveFilters && (
                  <button
                    onClick={() => setFilters(defaultFilters)}
                    className="text-sm text-gray-500 hover:text-black underline text-left"
                  >
                    Clear filters
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 px-12">
          {filteredProjects.map((project) => (
            <Link key={project.slug} to={`/projects/${project.slug}`} className="relative block">
              <img src={project.images[0]} alt={project.title} className="w-full" />
              {project.award && <RiTrophyFill className="absolute bottom-4 right-4 text-3xl text-yellow-200" />}
            </Link>
          ))}
        </div>
      </div>
      <Outlet />
    </section>
  )
}
