import { useState } from 'react'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'

interface ImageCarouselProps {
  images: string[]
  alt: string
}

export function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [currentImage, setCurrentImage] = useState(0)

  const hasPrev = currentImage > 0
  const hasNext = currentImage < images.length - 1

  return (
    <div className="relative flex-2 self-start bg-zinc-100 aspect-video overflow-hidden">
      <img
        key={currentImage}
        src={images[currentImage]}
        alt={`${alt} screenshot ${currentImage + 1}`}
        className="w-full h-full object-cover"
      />
      {/* Prev arrow */}
      {hasPrev && (
        <button
          onClick={() => setCurrentImage((i) => i - 1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow transition-colors"
          aria-label="Previous image"
        >
          <RiArrowLeftSLine className="text-3xl text-black" />
        </button>
      )}
      {/* Next arrow */}
      {hasNext && (
        <button
          onClick={() => setCurrentImage((i) => i + 1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow transition-colors"
          aria-label="Next image"
        >
          <RiArrowRightSLine className="text-3xl text-black" />
        </button>
      )}
      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === currentImage ? 'bg-black' : 'bg-black/30'
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
