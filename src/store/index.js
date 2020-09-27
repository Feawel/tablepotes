import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

import createRootReducer from './rootReducer'

const loggerMiddleware = createLogger({
  duration: true,
  timestamp: false,
  collapsed: true
})

export const configureStore = ({ initialState = {} }) => {
  const store = createStore(
    createRootReducer(),
    initialState,
    applyMiddleware(loggerMiddleware)
  )

  return store
}

export default configureStore
