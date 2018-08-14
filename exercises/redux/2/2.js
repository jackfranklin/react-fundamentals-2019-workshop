

import React from 'react'
import { render } from 'react-dom'

import store from './store'

import { Provider } from 'react-redux'
import Counter from './counter'

render(
  <Provider store={store}>
    <p>
      TODO: do the exercises in <code>counter.js</code> and then render it onto
      the page
    </p>
  </Provider>,
  document.getElementById('react-root')
)
