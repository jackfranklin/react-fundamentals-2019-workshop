import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'

const destructuringExercises = () => {
  // TODO: rewrite all of these using destructuring
  // ignore the functions wrapping them all
  // this is just to ensure all the tests don't conflict with each other!

  const jack = { name: 'jack', team: 'newcastle' }

  const people = ['alice', 'bob', 'charlie']
  ;(function testOne() {
    const name = jack.name
    const team = jack.team
    expect(name).toEqual('jack')
    expect(team).toEqual('newcastle')
  })()
  ;(function testTwo() {
    const name = jack.name
    // TODO: don't have this hard coded
    const rest = { team: 'newcastle' }

    expect(name).toEqual('jack')
    expect(rest).toEqual({ team: 'newcastle' })
  })()
  ;(function testThree() {
    const { name, colour: newColour = 'blue' } = jack
    expect(name).toEqual('jack')
    expect(newColour).toEqual('blue')
  })()
  ;(function testFour() {
    const p1 = people[0]
    const p2 = people[1]

    expect(p1).toEqual('alice')
    expect(p2).toEqual('bob')
  })()
  ;(function testFive() {
    const p1 = people[0]
    const rest = ['bob', 'charlie']
    expect(p1).toEqual('alice')
    expect(rest).toEqual(['bob', 'charlie'])
  })()
}

const App = () => <p>Look in the console!</p>

ReactDOM.render(<App />, document.getElementById('react-root'))

destructuringExercises()
