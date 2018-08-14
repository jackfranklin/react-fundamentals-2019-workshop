import React from 'react'
import { render } from 'react-dom'

import store from './store'

import { Provider } from 'react-redux'
import Repos from './repos'
import User from './user'

render(
  <Provider store={store}>
    <div>
      <Repos />
      <User />
    </div>
  </Provider>,
  document.getElementById('react-root')
)
