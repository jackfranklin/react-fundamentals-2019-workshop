import ReactDOM from 'react-dom'
import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'

// notice that Count has no idea who its parent is
const Count = props => {
  return <p>Count: {props.count}</p>
}

const Counter = props => {
  const [count, setCount] = useState(0)

  const onButtonClickIncrement = () => {
    setCount(oldCount => oldCount + 1)
  }

  // TODO: add two more count components
  // one that shows the next value below and another that
  // shows the next value up from the current count

  return (
    <div>
      <Count count={count} />
      <button onClick={onButtonClickIncrement}>Click to increment</button>
    </div>
  )
}
const App = () => {
  return <Counter />
}

ReactDOM.render(<App />, document.getElementById('react-root'))
