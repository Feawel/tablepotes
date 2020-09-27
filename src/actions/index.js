import { makeActionCreator } from 'utils/redux'

export const actionTypes = {
  DELETE_ENTITY: 'DELETE_ENTITY',
  UPDATE_ENTITY: 'UPDATE_ENTITY',
  SET_ENTITIES: 'SET_ENTITIES',
  SET_LOADING_SCREEN: 'SET_LOADING_SCREEN',
  SET_MODAL: 'SET_MODAL',
  ADD_NOTIFICATION: 'ADD_NOTIFICATION',
  REMOVE_NOTIFICATION: 'REMOVE_NOTIFICATION'
}

export const deleteEntity = makeActionCreator(actionTypes.DELETE_ENTITY)
export const updateEntity = makeActionCreator(actionTypes.UPDATE_ENTITY)
export const setEntities = makeActionCreator(actionTypes.SET_ENTITIES)
export const setLoadingScreen = makeActionCreator(actionTypes.SET_LOADING_SCREEN)
export const setModal = makeActionCreator(actionTypes.SET_MODAL)
export const addNotification = makeActionCreator(actionTypes.ADD_NOTIFICATION)
export const removeNotification = makeActionCreator(actionTypes.REMOVE_NOTIFICATION)
