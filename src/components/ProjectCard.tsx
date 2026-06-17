import { Link } from '@tanstack/react-router'
import { RiTrophyFill } from 'react-icons/ri'

interface ProjectCardProps {
  slug: string
  imageUrl: string
  title: string
  award?: string
}

export function ProjectCard({ slug, imageUrl, title, award }: ProjectCardProps) {
  return (
    <Link to={`/projects/${slug}`} className="relative block">
      <img src={imageUrl} alt={title} className="w-full" />
      {award && <RiTrophyFill className="absolute bottom-4 right-4 text-3xl text-yellow-200" />}
    </Link>
  )
}
