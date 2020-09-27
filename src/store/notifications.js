import _ from 'lodash/fp'
import { actionTypes } from 'actions'
import { makeReducer } from 'utils/redux'

const initialState = []

const addNotificationReducer = (state, notification) => [...state, notification]

const removeNotificationReducer = (state, notification = {}) =>
  _.reject({ name: _.get('name', notification) }, state)

const notifications = makeReducer(initialState, {
  [actionTypes.ADD_NOTIFICATION]: addNotificationReducer,
  [actionTypes.REMOVE_NOTIFICATION]: removeNotificationReducer
})

export default notifications
