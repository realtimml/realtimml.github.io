import { useEffect } from 'react'

function preventTouchMove(e: TouchEvent) {
  if ((e.target as Element).closest('[data-scroll-lock-exempt]')) return
  e.preventDefault()
}

export function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return

    const scrollY = window.scrollY
    const html = document.documentElement
    const { style: bodyStyle } = document.body

    html.setAttribute('data-scroll-lock', '')
    html.style.overflow = 'hidden'
    html.style.overscrollBehavior = 'none'
    bodyStyle.overflow = 'hidden'
    bodyStyle.overscrollBehavior = 'none'
    bodyStyle.position = 'fixed'
    bodyStyle.top = `-${scrollY}px`
    bodyStyle.left = '0'
    bodyStyle.right = '0'
    bodyStyle.width = '100%'

    document.addEventListener('touchmove', preventTouchMove, { passive: false })

    return () => {
      document.removeEventListener('touchmove', preventTouchMove)
      html.removeAttribute('data-scroll-lock')
      html.style.overflow = ''
      html.style.overscrollBehavior = ''
      bodyStyle.overflow = ''
      bodyStyle.overscrollBehavior = ''
      bodyStyle.position = ''
      bodyStyle.top = ''
      bodyStyle.left = ''
      bodyStyle.right = ''
      bodyStyle.width = ''
      window.scrollTo(0, scrollY)
    }
  }, [locked])
}
