import ReactDOM from 'react-dom'
import React, { useState } from 'react'
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
  const [counts, setCounts] = useState([0, 0, 0])

  const incrementCount = index => {
    setCounts(oldCounts => {
      const newCounts = [...oldCounts]
      newCounts[index] = newCounts[index] + 1
      return newCounts
    })
  }

  // TODO: generate the list of count components automatically
  // rather than hardcoding them
  // TODO: once you do the above TODO, you'll see a warning in your console
  // where React tells you you're missing a key property. See if you can investigate...
  return (
    <div>
      <Count count={counts[0]} onIncrement={() => incrementCount(0)} />
      <Count count={counts[1]} onIncrement={() => incrementCount(1)} />
    </div>
  )
}

const App = () => {
  return <Counter />
}

ReactDOM.render(<App />, document.getElementById('react-root'))
