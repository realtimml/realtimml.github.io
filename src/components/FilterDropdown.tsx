import { useRef, useState, useEffect } from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'

export type Filters = {
  award: boolean
  year: string | null
  techs: string[]
}

export const defaultFilters: Filters = { award: false, year: null, techs: [] }

interface FilterDropdownProps {
  filters: Filters
  onChange: (f: Filters) => void
  uniqueYears: string[]
  uniqueTechs: string[]
}

export function FilterDropdown({ filters, onChange, uniqueYears, uniqueTechs }: FilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
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

  const activeFilterCount =
    (filters.award ? 1 : 0) + (filters.year ? 1 : 0) + filters.techs.length
  const hasActiveFilters = activeFilterCount > 0

  function toggleTech(tech: string) {
    onChange({
      ...filters,
      techs: filters.techs.includes(tech)
        ? filters.techs.filter((t) => t !== tech)
        : [...filters.techs, tech],
    })
  }

  return (
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
                onChange={(e) => onChange({ ...filters, award: e.target.checked })}
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
                  onClick={() => onChange({ ...filters, year: filters.year === year ? null : year })}
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
              onClick={() => onChange(defaultFilters)}
              className="text-sm text-gray-500 hover:text-black underline text-left"
            >
              Clear filters
            </button>
          )}
        </div>
      )}
    </div>
  )
}
