import ReactDOM from 'react-dom'
import React, { useState } from 'react'

const states = []
let calls = -1

const ourUseState = defaultValue => {
  const callId = ++calls

  if (states[callId]) {
    return states[callId]
  }

  const setValue = newValue => {
    console.log('new value', newValue)
    states[callId][0] = newValue
    renderWithOurHooks()
  }

  const stateTuple = [defaultValue, setValue]
  states[callId] = stateTuple
  return stateTuple
}

const Counter = () => {
  const [count, setCount] = ourUseState(0)

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

const renderWithOurHooks = () => {
  calls = -1
  ReactDOM.render(<Counter />, document.getElementById('react-root'))
}

renderWithOurHooks()
