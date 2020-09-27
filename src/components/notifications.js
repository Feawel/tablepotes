import React, { useCallback } from 'react'
import _ from 'lodash/fp'
import { useSelector, useDispatch } from 'react-redux'
import { getNotifications } from 'selectors/notifications'
import { removeNotification } from 'actions'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
const map = _.map.convert({ cap: false })

const Notification = ({ notification, onClose }) => {
  const handleClose = useCallback(() => {
    onClose(notification)
  }, [notification, onClose])

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={true}
      onClick={handleClose}
      onClose={handleClose}
      autoHideDuration={3000}>
      <Alert elevation={6} variant="filled" severity={_.get('severity', notification)}>
        {_.get('message', notification)}
      </Alert>
    </Snackbar>
  )
}

const Notifications = () => {
  const notifications = useSelector(getNotifications)
  const dispatch = useDispatch()

  const onClose = useCallback(
    notification => {
      dispatch(removeNotification(notification))
    },
    [dispatch]
  )
  return (
    <>
      {_.isEmpty(notifications)
        ? null
        : map((n, i) => <Notification key={i} notification={n} onClose={onClose} />, notifications)}
    </>
  )
}

export default Notifications
