import { useEffect } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import skyBg from '../assets/imgs/Backgrounds/sky.jpg'
import { preloadImage } from '../utils/preloadImage'
import { useBodyBackground } from '../utils/useBodyBackground'

export const Route = createFileRoute('/')({
  loader: () => preloadImage(skyBg),
  component: HomePage,
})

// Approximate sky blue from the photo — tints Safari 26 Liquid Glass chrome
const SKY_COLOR = '#5A9EC9'

// Pixels the background image bleeds above/below the visible viewport so
// Safari 26 Liquid Glass composites real image pixels behind the toolbar glass
// instead of the flat body background-color fallback.
// BLEED_TOP: status bar + dynamic island area (~59px) + guard band
// BLEED_BOTTOM: bottom toolbar (~83px) + home indicator (~34px) + guard band
const BLEED_TOP = 80
const BLEED_BOTTOM = 140

function HomePage() {
  useBodyBackground(SKY_COLOR)

  // Scroll runway: push the document to a non-zero scroll position so
  // Safari 26 composites actual image pixels behind the glass chrome
  // instead of the flat body background-color fallback at scrollY = 0.
  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 760px)').matches
    if (isMobile && window.scrollY < BLEED_TOP) {
      window.scrollTo({ top: BLEED_TOP, behavior: 'instant' })
    }
  }, [])

  return (
    <section
      className="relative w-full bg-cover bg-no-repeat bg-position-[40%_20%] brightness-90"
      style={{
        backgroundImage: `url(${skyBg})`,
        // Negative top margin + matching padding: pushes the section up behind
        // the status bar glass while keeping content at the right visual offset.
        // Extra bottom height: extends the image behind the bottom toolbar glass.
        marginTop: -BLEED_TOP,
        paddingTop: BLEED_TOP,
        minHeight: `calc(100svh + ${BLEED_TOP}px + ${BLEED_BOTTOM}px)`,
      }}
    >
      <div className="absolute right-17 pt-[env(safe-area-inset-top)]" style={{ top: BLEED_TOP + 64 }}>
        <h1 className="text-4xl sm:text-8xl font-bold text-white text-right">Timmy Phan</h1>
        <h2 className="text-2xl sm:text-4xl font-semibold sm:font-bold text-white text-right sm:mt-2">Software Dev. @ Irvine, CA</h2>
      </div>
    </section>
  )
}
