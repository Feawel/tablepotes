import React from 'react'
import { Helmet } from 'react-helmet'

/*
 * dynamic metas are defined at screen level
 */
const StaticMetas = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="TablePotes : une table, des potes et du JDR en stream !" />
    <meta name="subject" content="Jeu de rôle entre potes sur twitch" />
    <meta name="rating" content="safe for kids" />
    <meta name="copyright" content="TablePotes : une table, des potes et du JDR en stream !" />
    <meta
      name="robots"
      content="index,follow"
    />
    <meta name="og:type" content="website" />
    <meta name="og:locale" content="fr_FR" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@tablepotes" />
    <meta name="twitter:creator" content="@tablepotes : une table, des potes et du JDR en stream !" />
  </Helmet>
)

export default StaticMetas
