import { useEffect } from 'react'
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import {
  RiCloseLargeLine,
  RiTrophyLine,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiExternalLinkLine,
  RiYoutubeFill,
  RiFlagLine,
} from 'react-icons/ri'
import { getProjectBySlug } from '../data/projects'
import { SiDevpost } from 'react-icons/si'
import { ImageCarousel } from '../components/ImageCarousel'
import { TechStackPills } from '../components/TechStackPills'

export const Route = createFileRoute('/projects/$slug')({
  component: ProjectModal,
})

const LINK_ICONS: Record<string, React.ReactNode> = {
  'Github Repo': <RiGithubFill className="text-4xl" />,
  'Linkedin Post': <RiLinkedinBoxFill className="text-4xl" />,
  Devpost: <SiDevpost className="text-3xl" />,
  Youtube: <RiYoutubeFill className="text-4xl" />,
  default: <RiExternalLinkLine className="text-4xl" />,
}

function getLinkIcon(label: string) {
  return LINK_ICONS[label] ?? LINK_ICONS['default']
}

function ProjectModal() {
  const { slug } = Route.useParams()
  const navigate = useNavigate()
  const project = getProjectBySlug(slug)

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        navigate({ to: '/projects' })
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [navigate])

  if (!project) {
    return (
      <div
        className="fixed inset-0 flex items-center justify-center z-50"
        onClick={() => navigate({ to: '/projects' })}
      >
        <div
          className="bg-white p-12 text-center space-y-4"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="text-lg font-semibold">Project not found: "{slug}"</p>
          <Link to="/projects" className="text-sm underline" viewTransition={{ types: ['vt-fade-in'] }}>
            Back to projects
          </Link>
        </div>
      </div>
    )
  }

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
  }).format(new Date(project.date!))

  return (
    <div
      className="fixed inset-0 z-50 flex sm:items-center sm:justify-center"
      onClick={() => navigate({ to: '/projects' })}
    >
      {/* Modal card */}
      <div
        className="relative flex h-full w-full flex-col overflow-hidden bg-white sm:block sm:h-auto sm:max-h-[88vh] sm:w-[82vw] sm:max-w-[1200px] sm:overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <Link
          to="/projects"
          className="absolute top-5 right-6 z-10 text-black hover:opacity-60 transition-opacity"
          aria-label="Close"
        >
          <RiCloseLargeLine className="text-3xl" />
        </Link>

        {/* Scrollable content — footer stays pinned below on small screens */}
        <div className="min-h-0 flex-1 overflow-y-auto sm:overflow-visible sm:flex-none">
          <div className="flex flex-col xl:flex-row pt-16 pb-2 px-9">
            <ImageCarousel images={project.images} alt={project.title} />

            {/* Project info */}
            <div className="flex-1 sm:px-8 pt-8 flex flex-col gap-5">
              <h1 className="text-4xl font-bold text-black leading-tight">{project.title}</h1>
              <p className="text-md leading-6 text-black">{project.description}</p>

              {/* Award badge */}
              {project.award && (
                <div className="flex items-center gap-2">
                  <RiTrophyLine className="text-3xl text-black shrink-0" />
                  <span className="text-lg font-semibold text-black">{project.award}</span>
                </div>
              )}

              {project.submission && (
                <div className="flex items-center gap-2">
                  <RiFlagLine className="text-3xl text-black shrink-0" />
                  <span className="text-lg font-semibold text-black">{project.submission}</span>
                </div>
              )}

              <TechStackPills tags={project.tags} />
            </div>
          </div>
        </div>

        <div className="flex shrink-0 justify-between items-center px-9 pb-8 pt-4 xl:px-0 xl:pr-8 sm:pb-0 sm:pt-0">
          {/* Links section */}
          {project.links && project.links.length > 0 && (
            <div className="sm:px-8 sm:pb-8 sm:pt-4">
              {/* <h2 className="text-3xl font-semibold text-black mb-5">Links</h2> */}
              <div className="flex flex-wrap gap-2 xl:gap-8">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-black hover:opacity-70 transition-opacity"
                  >
                    {getLinkIcon(link.label)}
                    <span className="hidden xl:inline text-xl font-medium underline underline-offset-2">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}
          {/* Date */}
          <span className="text-lg font-semibold text-black">{formattedDate}</span>
        </div>
      </div>
    </div>
  )
}
