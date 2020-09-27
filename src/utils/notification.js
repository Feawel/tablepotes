export const makeNotification = ({ name, status, message }) => {
  switch (true) {
    case name === 'success':
      return { name, message, severity: 'success' }
    case name === 'error':
      return { name, message, severity: 'error' }
    default:
  }
}
