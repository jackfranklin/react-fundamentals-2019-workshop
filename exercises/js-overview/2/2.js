import '../../common.css'

import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'

const classExercises = () => {
  // TODO: get this test passing

  class Person1 {
    constructor() {
      this.name = 'bob'
    }
  }

  expect(new Person1('jack').name).toEqual('jack')

  // TODO: and then get this one passing!

  class Person2 {
    constructor(name) {
      this.name = name
    }

    setName(newName) {}
  }

  expect(new Person2('jack').setName('bob').name).toEqual('bob')
}

const App = () => <p>Look in the console!</p>

ReactDOM.render(<App />, document.getElementById('react-root'))

classExercises()
