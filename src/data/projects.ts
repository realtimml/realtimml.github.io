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

export interface Project {
  slug: string
  title: string
  description: string
  tags: string[]
  images: string[]
  component?: ComponentType
}

export const projects: Project[] = [
  {
    slug: 'jotstack',
    title: 'Jotstack',
    description:
      'A note-taking and organization project placeholder. Replace this with the final case study summary.',
    tags: ['Productivity', 'Notes', 'React'],
    images: [jotstackHero, jotstackOne, jotstackThree],
  },
  {
    slug: 'snaprec',
    title: 'SnapRec',
    description:
      'A recommendation-focused project placeholder. Replace this with the final problem, approach, and result.',
    tags: ['Recommendations', 'Media', 'Prototype'],
    images: [snaprecHero, snaprecTwo, snaprecThree],
  },
  {
    slug: 'arrive',
    title: 'ARrive',
    description:
      'An augmented reality project placeholder. Replace this with the final case study copy and outcomes.',
    tags: ['AR', 'Mobile', 'Experience Design'],
    images: [arriveHero, arriveOne, arriveTwo],
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
