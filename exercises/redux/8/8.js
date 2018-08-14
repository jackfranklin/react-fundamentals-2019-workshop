import React from 'react'
import { render } from 'react-dom'

import store from './store'

import { Provider } from 'react-redux'
import Repos from './repos'
import User from './user'

/*
 * TODO: create a search box that lets the user enter a github username
 * when they hit enter it should load the list of repositories and also a user's information
 * hint: you should make a new component called <SearchInput /> and hook it up to the Redux store
 * create a new reducer and actions for when the user types into this search box
 * and when they hit enter, dispatch an action to fetch repositories and the user info,
 * passing in the username they entered.
 */

render(
  <Provider store={store}>
    <div>
      <Repos />
      <User />
    </div>
  </Provider>,
  document.getElementById('react-root')
)
