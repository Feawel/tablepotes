import React from 'react'
import { Link } from 'react-router-dom'
const Status = ({ code, children, staticContext }) => {
  if (staticContext) staticContext.status = code
  return children
}

const NotFound = ({ staticContext }) => {
  const msg = 'Revenir sur le site'
  const to = '/'
  return (
    <Status code={404} staticContext={staticContext}>
      <h1>Erreur 404</h1>
      <p>Page introuvable</p>
      <Link to={to}>{msg}</Link>
    </Status>
  )
}

export default NotFound
