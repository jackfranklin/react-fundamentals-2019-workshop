import ReactDOM from 'react-dom'
import React from 'react'

const HelloWorld = props => {
  return (
    <h1>
      Hello, {props.name}, {props.age}, {props.colour}
    </h1>
  )
}

const bunchOfProps = {
  name: 'Jack',
  age: 25,
  colour: 'blue',
}

// TODO: use the spread operator to pass through all the object keys as prop
// TODO: add another prop that customises the greeting that is used
ReactDOM.render(
  <HelloWorld {...bunchOfProps} />,
  document.getElementById('react-root')
)
