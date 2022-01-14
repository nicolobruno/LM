import { useState, useEffect } from 'react'

export const useMobileDevice = () => {
  const [windowsWidth, setWindowsWidth] = useState(undefined)

  useEffect(() => {
    function handleResize() {
      setWindowsWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowsWidth < 768
}
