import { combineReducers } from 'redux'
import entities from './entities'
import notifications from './notifications'
import loading from './loading'

export default () =>
  combineReducers({
    entities,
    notifications,
    loading
  })
