import { createFileRoute } from '@tanstack/react-router'
import doodle from '../assets/imgs/Doodles/me.png'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <section className="min-h-screen w-full bg-[url(src/assets/imgs/Backgrounds/ground.jpg)] bg-cover bg-position-[100%_30%] brightness-80">
      <div className="min-h-screen backdrop-blur-md px-28 py-20 font-monospace text-2xl">
        <p className="w-fit overflow-hidden whitespace-nowrap animate-typing">
          remote-user@timml.net ~ % neofetch
        </p>
        <div className="flex items-center gap-2 animate-reveal">
          <img src={doodle} alt="Timmy Phan" className="w-100 h-100" />
          <div>
            <p>Timmy Phan</p>
            <span>-------------------------------------------</span>
            <p>bio: Hello, I am a 3rd year CS student whose trying out a little bit of everything!</p>
            <p>location: Irvine, CA</p>
            <p>pronouns: he/him</p>
            <p>university: University of California, Irvine</p>
            <p>degree: Computer Science B.S.</p>
            <p>interests: Frontend Development, UI/UX Design, AI, Machine Learning</p>
            <p>technologies: Python, HTML/JS/CSS, React, TypeScript, Figma</p>
          </div>
        </div>
        <p className="w-fit border-r-7 border-r-transparent pr-[1ch] animate-caret-reveal">
          remote-user@timml.net ~ %
        </p>
      </div>
    </section>
  )
}
