import ReactDOM from 'react-dom'
import React, { useState } from 'react'

const Counter = () => {
  // TODO: swap this for our very own useState
  const [count, setCount] = useState(0)

  const decrement = () => setCount(count - 1)
  const increment = () => setCount(count + 1)

  return (
    <div style={{ display: 'flex', width: '400px' }}>
      <button style={{ width: 150 }} onClick={decrement}>
        -
      </button>
      <span style={{ width: 100, textAlign: 'center' }}>{count}</span>
      <button style={{ width: 150 }} onClick={increment}>
        +
      </button>
    </div>
  )
}

ReactDOM.render(<Counter />, document.getElementById('react-root'))
