import _ from 'lodash/fp'
import { createSelector, createSelectorCreator, defaultMemoize } from 'reselect'

export const makeGetAllEntities = entityName =>
  createSelector(_.get(`entities.${entityName}`), _.values)

export const makeGetEntityById = entityName =>
  createSelector(
    _.get(`entities.${entityName}`),
    (state, entityId) => entityId,
    (entities, entityId) => _.get(entityId, entities)
  )

export const createSearchSelector = createSelectorCreator(defaultMemoize, (previous, next) => {
  //selectors from state return arrays, we can perform strict equality because state is immutable
  if (_.isArray(previous) && _.isArray(next)) return previous === next
  //args for search are passed as objects, we need to do deep equality because we create a new parameter object on each render in components
  return _.isEqual(previous, next)
})
