import { createFileRoute } from '@tanstack/react-router'
import skyBg from '../assets/imgs/Backgrounds/sky.jpg'
import { preloadImage } from '../utils/preloadImage'

export const Route = createFileRoute('/')({
  loader: () => preloadImage(skyBg),
  component: HomePage,
})

function HomePage() {
  return (
    <section
      className="relative min-h-dvh w-full bg-cover bg-center bg-no-repeat bg-position-[40%_20%] brightness-90"
      style={{ backgroundImage: `url(${skyBg})` }}
    >
      <div className="absolute top-16 right-17 pt-[env(safe-area-inset-top)]">
        <h1 className="text-4xl sm:text-8xl font-bold text-white text-right">Timmy Phan</h1>
        <h2 className="text-2xl sm:text-4xl font-semibold sm:font-bold text-white text-right sm:mt-2">Software Dev. @ Irvine, CA</h2>
      </div>
    </section>
  )
}
