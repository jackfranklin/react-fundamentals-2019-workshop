import ReactDOM from 'react-dom'
import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'

const Count = props => {
  const onButtonClick = () => {
    props.onIncrement()
  }

  return (
    <div>
      <p>Count: {props.count}</p>
      <button onClick={onButtonClick}>Increment</button>
    </div>
  )
}

const Counter = props => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const incrementCount1 = () => setCount1(oldCount => oldCount + 1)

  const incrementCount2 = () => setCount2(oldCount => oldCount + 1)

  // TODO: create another <Count /> component
  // that deals with count2
  // and lets it be incremented

  return (
    <div>
      <Count count={count1} onIncrement={incrementCount1} />
    </div>
  )
}

const App = () => {
  return <Counter />
}

ReactDOM.render(<App />, document.getElementById('react-root'))
