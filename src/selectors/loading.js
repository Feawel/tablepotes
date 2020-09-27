import _ from 'lodash/fp'

import { getScreenLoadingEventName } from 'utils/loading'
import { LOADING_STATUS, LOADED_STATUS } from 'constants/index.js'

export const getLoadingStatus = (state, screen, params) => {
  const loadingState = _.get('loading', state)
  return _.flow(
    screen => getScreenLoadingEventName(screen, params),
    screenLoadingEventName => _.get(screenLoadingEventName, loadingState)
  )(screen)
}

export const getIsLoading = _.flow(getLoadingStatus, _.isEqual(LOADING_STATUS))

export const hasFetchedScreen = _.flow(getLoadingStatus, _.isEqual(LOADED_STATUS))
