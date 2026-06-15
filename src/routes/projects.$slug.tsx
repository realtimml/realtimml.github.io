import { useEffect, useState } from 'react'
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import {
  RiCloseLargeLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiTrophyLine,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiExternalLinkLine,
  RiReactjsLine,
  RiFigmaLine,
  RiCss3Line,
  RiJavascriptLine,
  RiHtml5Line,
  RiYoutubeFill,
  RiFlagLine,
} from 'react-icons/ri'
import { getProjectBySlug } from '../data/projects'
import {  SiDevpost, SiOpencv, SiTailwindcss, SiUltralytics, } from 'react-icons/si'
import { TbBrandTypescript, TbLambda } from 'react-icons/tb'
import { DiPython, DiSwift } from 'react-icons/di'
import { LuBrainCircuit } from 'react-icons/lu'
import { FaAws } from 'react-icons/fa'

export const Route = createFileRoute('/projects/$slug')({
  component: ProjectModal,
})

const TAG_ICONS: Record<string, React.ReactNode> = {
  React: <RiReactjsLine className="text-2xl" />,
  TypeScript: <TbBrandTypescript className="text-2xl" />,
  Tailwind: <SiTailwindcss className="text-2xl" />,
  Figma: <RiFigmaLine className="text-2xl" />,
  Swift: <DiSwift className="text-3xl" />,
  HTML: <RiHtml5Line className="text-2xl" />,
  JavaScript: <RiJavascriptLine className="text-2xl" />,
  CSS: <RiCss3Line className="text-2xl" />,
  'HTML/JS/CSS': <RiHtml5Line className="text-2xl" />,
  'AWS Lambda': <TbLambda className="text-2xl" />,
  'AWS Bedrock': <LuBrainCircuit className="text-2xl" />,
  'AWS API Gateway': <FaAws className="text-2xl" />,
  Python: <DiPython className="text-2xl" />,
  OpenCV: <SiOpencv className="text-2xl" />,
  Ultralytics: <SiUltralytics className="text-2xl" />,
  DynamoDB: <FaAws className="text-2xl" />,
}

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

const pillClassName =
  'flex items-center gap-1.5 border-2 border-[#1e1e1e] rounded-full px-3 py-1 text-xl font-medium text-[#1e1e1e]'

function TechStackPills({ tags }: { tags: string[] }) {
  if (tags.length === 0) return null

  // Figma layout: first tag on its own row, remaining tags on the row below
  if (tags.length <= 3) {
    return (
      <div className="mt-auto pt-4 flex flex-col items-start gap-2">
        <span className={pillClassName}>
          {TAG_ICONS[tags[0]] ?? null}
          {tags[0]}
        </span>
        {tags.length > 1 && (
          <div className="flex flex-wrap gap-2">
            {tags.slice(1).map((tag) => (
              <span key={tag} className={pillClassName}>
                {TAG_ICONS[tag] ?? null}
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    )
  }

  // 4+ tags: all pills wrap naturally based on column width
  return (
    <div className="mt-auto pt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className={pillClassName}>
          {TAG_ICONS[tag] ?? null}
          {tag}
        </span>
      ))}
    </div>
  )
}

function ProjectModal() {
  const { slug } = Route.useParams()
  const navigate = useNavigate()
  const project = getProjectBySlug(slug)
  const [currentImage, setCurrentImage] = useState(0)

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
          <Link to="/projects" className="text-sm underline">
            Back to projects
          </Link>
        </div>
      </div>
    )
  }

  const images = project.images
  const hasPrev = currentImage > 0
  const hasNext = currentImage < images.length - 1

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
  }).format(new Date(project.date!))

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      onClick={() => navigate({ to: '/projects' })}
    >
      {/* Modal card */}
      <div
        className="bg-white w-[82vw] max-w-[1200px] max-h-[88vh] overflow-y-auto relative"
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

        {/* Top section: carousel + info */}
        <div className="flex flex-col md:flex-row pt-16 pb-2 px-9">
          {/* Image carousel */}
          <div className="relative flex-2 bg-zinc-100 min-h-[320px] md:min-h-[420px] overflow-hidden">
            <img
              key={currentImage}
              src={images[currentImage]}
              alt={`${project.title} screenshot ${currentImage + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Prev arrow */}
            {hasPrev && (
              <button
                onClick={() => setCurrentImage((i) => i - 1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow transition-colors"
                aria-label="Previous image"
              >
                <RiArrowLeftSLine className="text-3xl text-black" />
              </button>
            )}
            {/* Next arrow */}
            {hasNext && (
              <button
                onClick={() => setCurrentImage((i) => i + 1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow transition-colors"
                aria-label="Next image"
              >
                <RiArrowRightSLine className="text-3xl text-black" />
              </button>
            )}
            {/* Dot indicators */}
            {images.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === currentImage ? 'bg-black' : 'bg-black/30'
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Project info */}
          <div className="flex-1 px-8 pt-8 flex flex-col gap-5 min-w-[260px] md:min-h-[420px]">
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

        <div className="flex justify-between items-center pr-8">
          {/* Links section */}
          {project.links && project.links.length > 0 && (
            <div className="px-8 pb-8 pt-4">
              {/* <h2 className="text-3xl font-semibold text-black mb-5">Links</h2> */}
              <div className="flex flex-wrap gap-8">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-black hover:opacity-70 transition-opacity"
                  >
                    {getLinkIcon(link.label)}
                    <span className="text-xl font-medium underline underline-offset-2">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}
          {/* Date*/}
          <span className="text-lg font-semibold text-black">{formattedDate}</span>
        </div>
      </div>
    </div>
  )
}
