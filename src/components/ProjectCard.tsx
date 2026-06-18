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
    <Link to={`/projects/${slug}`} className="relative block hover:scale-95 transition-transform duration-300 group overflow-hidden" viewTransition={['vt-fade-in']}>
      <div className='absolute w-full aspect-video bg-white flex items-center justify-center -translate-x-full group-hover:translate-x-0 transition-transform duration-300'>
        <p className='text-5xl text-center font-bold text-[#bed2d2]'>{title}</p>
      </div>
      <img src={imageUrl} alt={title} className="w-full" />
      {award && (
        <RiTrophyFill className="absolute bottom-4 right-4 text-3xl text-[#F1F7B5] drop-shadow-sm group-hover:text-[#bed2d2] transition-colors duration-200" />
      )}
    </Link>
  );
}
