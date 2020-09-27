import _ from 'lodash/fp'

export const getScreenLoadingEventName = (screenName, params) =>
  `${screenName}${_.flow(_.values, _.join('-'))(params)}`
