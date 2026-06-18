import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <section className="min-h-screen w-full bg-[url(src/assets/imgs/Backgrounds/sky.jpg)] bg-cover bg-position-[40%_20%] brightness-90">
      <div className="absolute top-16 right-17">
        <h1 className="text-4xl sm:text-8xl font-bold text-white text-right">Timmy Phan</h1>
        <h2 className="text-2xl sm:text-4xl font-semibold sm:font-bold text-white text-right sm:mt-2">Software Dev. @ Irvine, CA</h2>
      </div>
    </section>
  )
}
