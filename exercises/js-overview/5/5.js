import '../../common.css'

import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'

const promiseExercises = () => {
  // TODO: get this test passing
  Promise.resolve('foo')
    .then(data => {
      expect(data).toEqual('foo')
    })
    .then(data => {
      console.log('got data', data)
      expect(data).toEqual('foobar')
    })
}

const App = () => <p>Look in the console!</p>

ReactDOM.render(<App />, document.getElementById('react-root'))

promiseExercises()
