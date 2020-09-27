import {
  META_CANONICAL_PREFIX,
  SCREEN_AUDIO,
  SCREEN_HOME
} from 'constants/index.js'
import { getPath } from 'utils/route'

export const getMetas = (screen, params) => {
  switch (true) {
    case screen === SCREEN_AUDIO:
      return getAudioMetas()
    case screen === SCREEN_HOME:
      return getHomeMetas()
    default:
  }
}

const getAudioMetas = () => ({
  title: `Broadcast live de l'audio des parties | TableTop`,
  description:
    `Outil de streaming live pour l'audio TableTop`,
  canonical: `${META_CANONICAL_PREFIX}${getPath('audio')}`
})

const getHomeMetas = () => ({
  title: `Broadcast live de l'audio des parties | TableTop`,
  description:
    `Outil de streaming live pour l'audio TableTop`,
  canonical: `${META_CANONICAL_PREFIX}${getPath('home')}`
})

