import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <section className="min-h-screen w-full bg-[#9EA1D4]">
      <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-400">
        Contact
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-white">Get in touch</h1>
      <p className="text-lg leading-8 text-zinc-300">
        Add your preferred contact links here, such as email, GitHub, LinkedIn, or a resume.
      </p>
    </section>
  )
}
