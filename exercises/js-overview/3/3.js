import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'

const classExercises = () => {
  // TODO: keep this test passing
  // using the proposal-class-fields features

  class Person1 {}
  Person1.foo = 'bar'

  expect(Person1.foo).toEqual('bar')

  // TODO: and then get this one passing using instance fields

  class Person2 {
    constructor(name) {
      this.name = name
      this.foo = 'bar'
    }
  }

  const person2 = new Person2('jack')
  expect(person2.foo).toEqual('bar')
}

const App = () => <p>Look in the console!</p>

ReactDOM.render(<App />, document.getElementById('react-root'))

classExercises()
