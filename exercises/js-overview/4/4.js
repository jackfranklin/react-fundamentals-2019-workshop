import '../../common.css'

import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'

const objectSpreadExercises = () => {
  // TODO: keep this test passing
  // using object rest spread

  const person = { name: 'jack' }
  const team = { team: 'newcastle' }

  const newPerson = Object.assign(person, team)

  expect(newPerson).toEqual({ name: 'jack', team: 'newcastle' })
}

const App = () => <p>Look in the console!</p>

ReactDOM.render(<App />, document.getElementById('react-root'))

objectSpreadExercises()
