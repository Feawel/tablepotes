import React from 'react'
import { Provider } from 'react-redux'
import { StylesProvider, createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { Switch, Route } from 'react-router-dom'
import { ScreenClassProvider } from 'react-grid-system'
import { map } from 'lodash/fp'

import { SCREEN_GLOBAL } from 'constants/index.js'

import routes from 'routes'
import StaticMetas from 'components/metas/static'
import ScrollToTop from 'components/scrollToTop'
import Notifications from 'components/notifications'
import Loading from 'components/loading'
import Analytics from 'components/analytics'
import Topbar from 'components/topbar'

import {
  MAIN_COLOR, SECONDARY_COLOR
} from 'utils/style'

// To replace default primary color on all material-ui components
const theme = createMuiTheme({
  palette: {
    primary: { main: MAIN_COLOR },
    secondary: { main: SECONDARY_COLOR }
  }
})

const App = ({ store = {}, fallbackScreenClass = 'xl' }) => (
  <>
    <Provider store={store}>
      <ScreenClassProvider fallbackScreenClass={fallbackScreenClass}>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <Topbar/>
            <StaticMetas />
            <ScrollToTop />
            <Loading screen={SCREEN_GLOBAL} />
            <Notifications />
            <Switch>
              {map(
                route => (
                  <Route
                    key={route.path}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                  />
                ),
                routes
              )}
            </Switch>
            <Analytics />
          </ThemeProvider>
        </StylesProvider>
      </ScreenClassProvider>
    </Provider>
  </>
)

App.displayName = 'App'

export default App
