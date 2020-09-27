import _ from 'lodash/fp'

export const makeActionCreator = type => payload => ({
  type,
  payload
})

export const makeReducer = (initialState, handlers) => (state = initialState, action = {}) => {
  const handler = _.get(action.type, handlers)
  return handler ? handler(state, action.payload) : state
}
