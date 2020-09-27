import _ from 'lodash/fp'

export const getPath = (routeName, params = {}) => {
  switch (routeName) {
    case 'audio':
      return `/audio`
    default:
      return '/'
  }
}
