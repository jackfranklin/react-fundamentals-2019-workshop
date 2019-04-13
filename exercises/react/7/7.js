import ReactDOM from 'react-dom'
import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'

const Counter = props => {
  const [count, setCount] = useState(props.start)

  const onIncrementClick = () => {
    setCount(oldCount => oldCount + 1)
  }
  // TODO: add another button that decrements the count

  return (
    <div>
      <p>current count: {count}</p>
      <button onClick={onIncrementClick}>Click to increment</button>
    </div>
  )
}

Counter.defaultProps = {
  start: 0,
}

Counter.propTypes = {
  start: PropTypes.number,
}

const App = () => {
  return <Counter />
}

ReactDOM.render(<App />, document.getElementById('react-root'))
