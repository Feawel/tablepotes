import { actionTypes } from 'actions'
import { makeReducer } from 'utils/redux'
import _ from 'lodash/fp'

const deleteEntityReducer = (state, payload) => {
  const { path } = payload
  return _.omit(path, state)
}

const updateEntityReducer = (state, payload) => {
  const { path, entity } = payload
  const currentEntity = _.get(path, state)
  return _.set(path, _.merge(currentEntity, entity), state)
}

const setEntitiesReducer = (state, payload) =>
  _.flow(
    _.toPairs,
    _.reduce((memo, [entityName, newEntities]) => {
      const initialEntities = _.getOr({}, entityName, memo)
      if (_.isEmpty(newEntities)) return memo

      if (_.isEmpty(initialEntities)) {
        memo[entityName] = newEntities
        return memo
      }

      const mergedEntities = _.flow(
        _.toPairs,
        _.reduce((memo, [entityId, newEntity]) => {
          if (_.isEmpty(newEntity)) return memo

          const initialEntity = _.getOr({}, entityId, memo)
          memo[entityId] = _.isEmpty(initialEntity) ? newEntity : _.assign(initialEntity, newEntity)
          return memo
        }, _.clone(initialEntities))
      )(newEntities)

      memo[entityName] = mergedEntities
      return memo
    }, _.clone(state))
  )(payload)

const entities = makeReducer(
  {},
  {
    [actionTypes.DELETE_ENTITY]: deleteEntityReducer,
    [actionTypes.UPDATE_ENTITY]: updateEntityReducer,
    [actionTypes.SET_ENTITIES]: setEntitiesReducer
  }
)

export default entities
