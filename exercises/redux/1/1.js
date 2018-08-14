import ReactDOM from 'react-dom'
import React from 'react'

import { createStore } from 'redux'

const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    default:
      return state
  }
}

const runReduxStore = () => {
  const store = createStore(reducer)

  console.log('store.getState() call:', store.getState())

  store.dispatch({ type: 'INCREMENT' })

  console.log('store.getState() call:', store.getState())

  // EXERCISE: make this work so that the count goes down by one
  store.dispatch({ type: 'DECREMENT' })

  console.log('store.getState() call:', store.getState())

  // EXERCISE: make this work so we can pass an amount to DECREMENT_BY
  store.dispatch({ type: 'DECREMENT_BY', amount: 5 })
  console.log('store.getState() call:', store.getState())
}

runReduxStore()

const App = () => (
  <p>
    The first Redux exercise is entirely in the console. Open the developer
    console for this one!
  </p>
)

ReactDOM.render(<App />, document.getElementById('react-root'))
