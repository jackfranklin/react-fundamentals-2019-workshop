import React from 'react'
import { render } from 'react-dom'

import store from './store'

import { Provider } from 'react-redux'
import Repos from './repos'

render(
  <Provider store={store}>
    <Repos />
  </Provider>,
  document.getElementById('react-root')
)
