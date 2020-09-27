import _ from 'lodash/fp'

export const filterEntitiesArrayFieldByValues = (fieldName, fieldValues) => entities =>
  _.isEmpty(fieldValues)
    ? entities
    : _.filter(_.flow(_.get(fieldName), _.intersection(fieldValues), _.negate(_.isEmpty)), entities)

export const filterEntitiesSimpleFieldByValues = (fieldName, fieldValues) => entities =>
  _.isEmpty(fieldValues)
    ? entities
    : _.filter(
      _.flow(_.get(fieldName), fieldValue => _.includes(fieldValue, fieldValues)),
      entities
    )

export const filterEntitiesFieldExists = (fieldName, shouldExist) => entities =>
  _.isNil(shouldExist)
    ? entities
    : shouldExist
      ? _.filter(_.flow(_.get(fieldName), _.negate(_.isEmpty)), entities)
      : _.filter(_.flow(_.get(fieldName), _.isEmpty), entities)

export const getEntitiesByIds = (entities, ids) =>
  _.filter(
    _.flow(_.get('id'), id => _.includes(id, ids)),
    entities
  )

export const getEntityById = (entities, id) =>
  _.flow(entities => getEntitiesByIds(entities, [id]), _.first)(entities)
