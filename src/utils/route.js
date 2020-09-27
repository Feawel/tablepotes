
export const getPath = (routeName, params = {}) => {
  switch (routeName) {
    case 'audio':
      return `/audio`
    default:
      return '/'
  }
}
