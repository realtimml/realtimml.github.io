import type { ComponentType } from 'react'

export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  slug: string
  title: string
  description: string
  tags: string[]
  images: string[]
  award?: string
  links?: ProjectLink[]
  component?: ComponentType
}

export const projects: Project[] = [
  {
    slug: 'arrive',
    title: 'ARrive',
    description:
      'An augmented reality project placeholder. Replace this with the final case study copy and outcomes.',
    tags: ['AR', 'Mobile', 'Swift'],
    images: [
      new URL('../assets/imgs/ARrive/ARrive.jpg', import.meta.url).href,
      new URL('../assets/imgs/ARrive/ARrive_1.jpg', import.meta.url).href,
      new URL('../assets/imgs/ARrive/ARrive_2.JPG', import.meta.url).href,
    ],
    links: [
      { label: 'Github Repo', href: '#' },
    ],
  },
  {
    slug: 'jotstack',
    title: 'Jotstack',
    description:
      'A note-taking and organization project placeholder. Replace this with the final case study summary.',
    tags: ['TypeScript', 'React', 'Tailwind'],
    images: [
      new URL('../assets/imgs/Jotstack/Jotstack_0.png', import.meta.url).href,
      new URL('../assets/imgs/Jotstack/Jotstack_1.png', import.meta.url).href,
      new URL('../assets/imgs/Jotstack/Jotstack_3.png', import.meta.url).href,
    ],
    links: [
      { label: 'Github Repo', href: '#' },
    ],
  },
  {
    slug: 'snaprec',
    title: 'SnapRec',
    description:
      'A mobile-first AI shopping companion for shampoo/conditioner/skin care etc. Provides personalized production recommendations via Gemini 2.5 Flash.',
    tags: ['TypeScript', 'React', 'Tailwind'],
    images: [
      new URL('../assets/imgs/SnapRec/1.png', import.meta.url).href,
      new URL('../assets/imgs/SnapRec/2.png', import.meta.url).href,
      new URL('../assets/imgs/SnapRec/3.jpg', import.meta.url).href,
    ],
    award: '1st Place Winner @ UCI WebJam 2025',
    links: [
      { label: 'Github Repo', href: '#' },
      { label: 'Linkedin Post', href: '#' },
      { label: 'Devpost', href: '#' },
    ],
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
