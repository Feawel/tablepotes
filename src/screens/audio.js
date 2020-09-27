import React from 'react'
import { useFetch } from 'hooks/fetch'
import { SCREEN_AUDIO } from 'constants/index.js'

import Metas from 'components/metas'


const AudioScreen = () => {
  useFetch({ screen: SCREEN_AUDIO })

  return (
    <>
      <Metas screen={SCREEN_AUDIO} />
      <div>

      </div>
    </>
  )
}

// For SSR when ready
// AudioScreen.getInitialProps = async dispatch => {
//   await fetch({ dispatch, screen: SCREEN_AUDIO })
// }

export default AudioScreen
