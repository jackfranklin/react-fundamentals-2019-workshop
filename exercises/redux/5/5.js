import React, { Fragment } from 'react'
import { render } from 'react-dom'

import store from './store'

import { Provider } from 'react-redux'
import Counter from './counter'
import Header from './header'

render(
  <Provider store={store}>
    <Fragment>
      <Header />
      <Counter />
    </Fragment>
  </Provider>,
  document.getElementById('react-root')
)
