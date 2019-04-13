import ReactDOM from 'react-dom'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Count = props => {
  const onButtonClick = () => {
    props.onIncrement()
  }

  return (
    <div>
      {props.children}
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

  // TODO: can you create a button that lets me add another <Count /> component to the page?
  // hint: you'll probably want to update our counts state to make the array longer every time
  // the user clicks the button to add another count...
  return (
    <div>
      {counts.map((count, index) => {
        return (
          <Count key={index} onIncrement={() => incrementCount(index)}>
            <p>
              Count {index} has the value: <strong>{count}</strong>
            </p>
          </Count>
        )
      })}
    </div>
  )
}

const App = () => {
  return <Counter />
}

ReactDOM.render(<App />, document.getElementById('react-root'))
