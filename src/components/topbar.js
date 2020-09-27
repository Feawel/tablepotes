import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { LIGHT_BACKGROUND_COLOR } from 'utils/style'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'

const StyledAppBar = styled(AppBar)`
  background-color: ${LIGHT_BACKGROUND_COLOR};
`

const StyledButtons = styled.div`
  position: absolute;
  right: 20px
`

const Topbar = () => {
  const [open, setOpen] = useState(false)

  const toggleDrawer = useCallback(
    () => {
      setOpen(open => !open)
    },
    [setOpen],
  )


  return (
    <div>
      <StyledAppBar position="static">
        <Toolbar>
          <IconButton onClick={toggleDrawer} edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" >
            TablePotes
          </Typography>
          <StyledButtons>
            <Button color="inherit">Replay</Button>
            <Button color="inherit">Personnages</Button>
          </StyledButtons>
        </Toolbar>
      </StyledAppBar>
      <Drawer anchor={'left'} open={open} onClose={toggleDrawer}>
        <div role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer} >
          <List>
            {['Vidéos', 'Personnages', 'Résumé'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['À propos', 'Contact'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  )
}

export default Topbar
