import { actionTypes } from 'actions'
import { makeReducer } from 'utils/redux'
import _ from 'lodash/fp'

const loading = makeReducer(
  {},
  {
    [actionTypes.SET_LOADING_SCREEN]: _.assign
  }
)

export default loading
