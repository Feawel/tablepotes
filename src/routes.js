import Home from 'screens/home'
import Audio from 'screens/audio'
import NotFound from 'screens/notFound'

export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/audio',
    component: Audio,
    exact: true
  },
  {
    path: ['*', '/notFound'],
    component: NotFound,
    exact: false
  }
]
