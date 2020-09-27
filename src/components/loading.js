import React, { useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'

import { getIsLoading } from 'selectors/loading'

const StyledBackdrop = styled(Backdrop)`
  color: #fff;
  z-index: 9999;
  display: ${props => (props.open ? 'block' : 'none')};
`

const StyledCircularProgress = styled(CircularProgress)`
  top: calc(50% - 40px);
  position: absolute;
  left: calc(50% - 40px);

  /*
  * this PR froze the loader on chrome : https://github.com/mui-org/material-ui/pull/21248
  * we need to override the animation
  */
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  && {
    animation: rotate 1.4s linear infinite;
  }
`

const Loading = ({ screen, params = {} }) => {
  const isLoading = useSelector(state => getIsLoading(state, screen, params))

  const [close, setClose] = useState(false)
  const handleClose = useCallback(() => setClose(true), [])

  const open = isLoading && !close
  return (
    <StyledBackdrop open={open} onClick={handleClose}>
      <StyledCircularProgress color="inherit" disableShrink />
    </StyledBackdrop>
  )
}

export default Loading
