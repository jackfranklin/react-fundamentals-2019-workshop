import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'

const arrowFunctionExercises = () => {
  // TODO: rewrite this using an arrow function

  const adder1 = function(x, y) {
    return x + y
  }

  expect(adder1(1, 2)).toEqual(3)

  // TODO: get rid of the `return` keyword in this function

  const adder2 = (x, y) => {
    return x + y
  }

  expect(adder2(1, 2)).toEqual(3)

  // TODO: remove the comment from the data.log call
  // see the error in the console
  // and fix it with an arrow function

  const data = {
    person: 'jack',
    friends: ['alice', 'bob'],

    log() {
      this.friends.forEach(name => {
        console.log(this.person, 'has friend', name)
      })
    },
  }

  data.log()
}

const App = () => <p>Look in the console!</p>

ReactDOM.render(<App />, document.getElementById('react-root'))

arrowFunctionExercises()
