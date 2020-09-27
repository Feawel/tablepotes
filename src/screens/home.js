import React from 'react'
import { useFetch } from 'hooks/fetch'
import { SCREEN_HOME } from 'constants/index.js'

import Metas from 'components/metas'


const HomeScreen = () => {
  useFetch({ screen: SCREEN_HOME })

  return (
    <>
      <Metas screen={SCREEN_HOME} />
      <div>
        <h1>Table Potes : une table, des potes</h1>
      </div>
    </>
  )
}

// For SSR when ready
// HomeScreen.getInitialProps = async dispatch => {
//   await fetch({ dispatch, screen: SCREEN_HOME })
// }

export default HomeScreen
