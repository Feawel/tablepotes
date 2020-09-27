import React from 'react'
import ReactDOM from 'react-dom'
import App from 'app'

import { createBrowserHistory } from 'history'
import { Router } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'

import configureStore from 'store'

const store = configureStore({})

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <CookiesProvider>
      <App store={store} />
    </CookiesProvider>
  </Router>,
  document.getElementById('root')
)