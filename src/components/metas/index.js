import React from 'react'
import { Helmet } from 'react-helmet'
import { getMetas } from 'utils/meta'

const Metas = ({ screen, params = {} }) => {
  const { title, description, image, canonical } = getMetas(
    screen,
    params
  )

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="description" content={description} />
      <meta name="abstract" content={description} />
      <meta name="og:description" content={description} />
      <meta name="twitter:description" content={description} />
      <meta name="image" content={image} />
      <meta name="og:image" content={image} />
      <meta name="og:image:secure_url" content={image} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={canonical} />
      <meta name="og:url" content={canonical} />
    </Helmet>
  )
}

export default Metas
