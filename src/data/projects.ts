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
  submission?: string
  award?: string
  links?: ProjectLink[]
  component?: ComponentType
}

export const projects: Project[] = [
  {
    slug: 'arrive',
    title: 'ARrive',
    description:
      'Design Prototype for an augmented reality navigation service. Built to cater to college campuses for student navigation.',
    tags: ['Figma'],
    images: [
      new URL('../assets/imgs/ARrive/ARrive.jpg', import.meta.url).href,
      new URL('../assets/imgs/ARrive/ARrive_1.jpg', import.meta.url).href,
      new URL('../assets/imgs/ARrive/ARrive_2.JPG', import.meta.url).href,
    ],
    submission: 'UCI Designation 2025 Submission',
    links: [
      { label: 'Devpost', href: 'https://devpost.com/software/wip-campus-map-app' },
    ],
  },
  {
    slug: 'jotstack',
    title: 'Jotstack',
    description:
      'AI-powered interactive whiteboarding app for brainstorming and ideas. Features AI-generated sticky note suggestions via Claude 3.5 Haiku.',
    tags: ['AWS Bedrock', 'AWS Lambda', 'Python', 'AWS API Gateway', 'HTML', 'JavaScript', 'CSS'],
    images: [
      new URL('../assets/imgs/Jotstack/Jotstack_0.png', import.meta.url).href,
      new URL('../assets/imgs/Jotstack/Jotstack_1.png', import.meta.url).href,
      new URL('../assets/imgs/Jotstack/Jotstack_3.png', import.meta.url).href,
    ],
    award: 'Productivity Track Winner @ AI@UCI AWS CloudHacks 2025',
    links: [
      { label: 'Devpost', href: 'https://devpost.com/software/jotstack' },
      { label: 'Github Repo', href: 'https://github.com/kennethyandell/uci-cloudhacks-2025' },
      { label: 'Youtube', href: 'https://www.youtube.com/watch?v=ka-OaTUpYVY' },
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
      { label: 'Devpost', href: 'https://devpost.com/software/snaprec' },
      { label: 'Github Repo', href: 'https://github.com/AntonK0/webjam2025' },
      { label: 'Linkedin Post', href: 'https://www.linkedin.com/posts/anton-m-ko_geminiapi-hackathonwinner-webjam2025-activity-7393537450075119616-81gC' },
      { label: 'Youtube', href: 'https://www.youtube.com/watch?v=UPgfMlzOSdk' },
    ],
  },
  {
    slug: 'roost',
    title: 'Roost',
    description:
      'A smart alarm clock built on the Arduino Uno Q, with local inference via YOLO26-Pose to detect bed exits and automate deactivation. Features a custom LAN-hosted mobile management interface.',
    tags: ['Python', 'OpenCV', 'Ultralytics', 'Figma'],
    images: [
      new URL('../assets/imgs/Roost/Roost_0.png', import.meta.url).href,
      new URL('../assets/imgs/Roost/Roost_1.png', import.meta.url).href,
    ],
    submission: 'IrvineHacks 2026 Submission',
    links: [
      { label: 'Github Repo', href: 'https://github.com/realtimml/irvinehacks2026' },
      { label: 'Devpost', href: 'https://devpost.com/software/roost' },
      { label: 'Youtube', href: 'https://www.youtube.com/watch?v=TlAP2GAu7ik' },
    ],
  },
  {
    slug: 'jit',
    title: 'J.I.T (Just In Time)',
    description:
      'An iOS AR education app that uses on-device retrieval augmented generation (RAG) to provide real-time, textbook-grounded study advice, powered by Qwen3 inference and a FastAPI backend for Redis and Cloudinary.',
    tags: ['Swift', 'React', 'TypeScript', 'Figma'],
    images: [
      // new URL('../assets/imgs/JIT/Jit_0.png', import.meta.url).href,
      new URL('../assets/imgs/JIT/Jit_1.png', import.meta.url).href,
      new URL('../assets/imgs/JIT/Jit_2.png', import.meta.url).href,
      new URL('../assets/imgs/JIT/Jit_3.jpg', import.meta.url).href,
    ],
    award: 'Best Use of MongoDB Atlas Track Winner @ LA Hacks 2026',
    links: [
      { label: 'Devpost', href: 'https://devpost.com/software/j-i-t' },
      { label: 'Github Repo', href: 'https://github.com/AntonK0/lahacks26' },
      { label: 'Linkedin Post', href: 'https://www.linkedin.com/posts/kenneth-yandell_lahacks-mongodbatlas-augmentedreality-ugcPost-7454625585433038848-ZPh6' },
      { label: 'Youtube', href: 'https://www.youtube.com/watch?v=5XL32aCzCJg' },
    ],
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
