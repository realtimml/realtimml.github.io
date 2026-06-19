import { useEffect } from 'react'

/**
 * Sets the body background-color while the component is mounted.
 * On iOS 26 Safari's Liquid Glass, the body background-color is what
 * tints the translucent status bar and tab bar when no qualifying
 * fixed/sticky element with a background-color is found near the edge.
 */
export function useBodyBackground(color: string) {
  useEffect(() => {
    document.body.style.backgroundColor = color
    return () => {
      document.body.style.backgroundColor = ''
    }
  }, [color])
}
