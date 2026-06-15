import type { ComponentType } from 'react'

import arriveHero from '../assets/imgs/ARrive/ARrive.jpg'
import arriveOne from '../assets/imgs/ARrive/ARrive_1.jpg'
import arriveTwo from '../assets/imgs/ARrive/ARrive_2.JPG'
import jotstackHero from '../assets/imgs/Jotstack/Jotstack_0.png'
import jotstackOne from '../assets/imgs/Jotstack/Jotstack_1.png'
import jotstackThree from '../assets/imgs/Jotstack/Jotstack_3.png'
import snaprecHero from '../assets/imgs/SnapRec/1.png'
import snaprecTwo from '../assets/imgs/SnapRec/2.png'
import snaprecThree from '../assets/imgs/SnapRec/3.jpg'

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
    slug: 'jotstack',
    title: 'Jotstack',
    description:
      'A note-taking and organization project placeholder. Replace this with the final case study summary.',
    tags: ['TypeScript', 'React', 'Tailwind'],
    images: [jotstackHero, jotstackOne, jotstackThree],
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
    images: [snaprecHero, snaprecTwo, snaprecThree],
    award: '1st Place Winner @ UCI WebJam 2025',
    links: [
      { label: 'Github Repo', href: '#' },
      { label: 'Linkedin Post', href: '#' },
      { label: 'Devpost', href: '#' },
    ],
  },
  {
    slug: 'arrive',
    title: 'ARrive',
    description:
      'An augmented reality project placeholder. Replace this with the final case study copy and outcomes.',
    tags: ['AR', 'Mobile', 'Swift'],
    images: [arriveHero, arriveOne, arriveTwo],
    links: [
      { label: 'Github Repo', href: '#' },
    ],
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
