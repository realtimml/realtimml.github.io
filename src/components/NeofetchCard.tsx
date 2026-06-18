import doodle from '../assets/imgs/Doodles/me.png'

export function NeofetchCard() {
  return (
    <div className="flex items-center gap-2 animate-reveal leading-6 md:leading-7 md:my-[1ch]">
      <img src={doodle} alt="Timmy Phan" className="hidden md:block lg:w-80 lg:h-80 w-70 h-70" />
      <div>
        <p>Timmy Phan</p>
        <span>-------------------------------------------</span>
        <div className="flex gap-[1ch]">
          <span>bio:</span>
          <p>
            Hello, I am a 3rd year CS student whose trying out a little bit
            of everything!
          </p>
        </div>
        <div className="flex gap-[1ch]">
          <span>location:</span>
          <p>Irvine, CA</p>
        </div>
        <div className="flex gap-[1ch]">
          <span>pronouns:</span>
          <p>he/him</p>
        </div>
        <div className="flex gap-[1ch]">
          <span>university:</span>
          <p>University of California, Irvine</p>
        </div>
        <div className="flex gap-[1ch]">
          <span>degree:</span>
          <p>Computer Science B.S.</p>
        </div>
        <div className="flex gap-[1ch]">
          <span>interests:</span>
          <p>Frontend Development, UI/UX Design, AI, Machine Learning</p>
        </div>
        <div className="flex gap-[1ch]">
          <span>technologies:</span>
          <p>Python, HTML/JS/CSS, React, TypeScript, Figma</p>
        </div>
      </div>
    </div>
  )
}
