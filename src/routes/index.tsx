import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <section className="min-h-screen w-full bg-[url(src/assets/imgs/Backgrounds/sky.jpg)] bg-cover bg-position-[100%_20%] brightness-90">
      <div className="absolute top-16 right-17">
        <h1 className="text-8xl font-bold text-white">Timmy Phan</h1>
        <h2 className="text-4xl font-bold text-white text-right mt-2">Software Dev. @ Irvine, CA</h2>
      </div>
    </section>
  )
}
