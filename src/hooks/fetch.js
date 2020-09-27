import { useEffect } from 'react'
import _ from 'lodash/fp'
import { useSelector, useDispatch } from 'react-redux'
import {
  SCREEN_AUDIO
} from 'constants/index.js'
import {
  fetchAudioScreen
} from 'api/screen'
import { setEntities, setLoadingScreen, addNotification } from 'actions'
import { getLoadingStatus } from 'selectors/loading'
import { getScreenLoadingEventName } from 'utils/loading'
import { LOADING_STATUS, LOADED_STATUS } from 'constants/index.js'
import { makeNotification } from 'utils/notification'

const fetchData = ({ screen, params = {} }) => {
  switch (true) {
    case !!_.startsWith(screen, SCREEN_AUDIO):
      return fetchAudioScreen()
    default:
  }
}

export const fetch = async ({ dispatch, screen, params = {} }) => {
  const screenEvent = getScreenLoadingEventName(screen, params)
  dispatch(setLoadingScreen({ [screenEvent]: LOADING_STATUS }))
  const result = await fetchData({ screen, params })
  const entities = _.get('entities', result)

  dispatch(setEntities(entities))
  dispatch(setLoadingScreen({ [screenEvent]: LOADED_STATUS }))

  return result
}

export const useFetch = ({ screen, params = {}, requiredParam }) => {
  const loading = useSelector(state => getLoadingStatus(state, screen, params))
  const dispatch = useDispatch()
  const shouldFetch = _.isNil(loading) && (_.get(requiredParam, params) || _.isNil(requiredParam))

  useEffect(() => {
    async function fetchEffect() {
      if (shouldFetch) {
        try {
          await fetch({ dispatch, screen, params })
        } catch (e) {
          console.error('fetch error:', e)
          dispatch(addNotification(makeNotification({ name: 'fetch_error' })))
        }
      }
    }
    fetchEffect()
  }, [dispatch, screen, params, shouldFetch])
}
