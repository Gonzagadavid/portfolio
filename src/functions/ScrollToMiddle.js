import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToMiddle () {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 439)
  }, [pathname])

  return null
}
