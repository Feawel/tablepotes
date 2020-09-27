import { useEffect } from 'react'
import ReactGA from 'react-ga'
import { useLocation } from 'react-router-dom'

const ANALYTICS_ID = 'G-72Q89D1JEH'

export default function Analytics() {
  const { pathname } = useLocation()

  useEffect(() => {
    ReactGA.initialize(ANALYTICS_ID)
  }, [])

  useEffect(() => {
    // @HACK : needed to ensure that pageview is send after
    // react-helmet has updated metas
    setTimeout(() => ReactGA.pageview(pathname), 100)
  }, [pathname])

  return null
}
