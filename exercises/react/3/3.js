import ReactDOM from 'react-dom'
import React from 'react'

const HelloWorld = props => {
  // TODO: pass through another prop to customise the greeting
  // rather than it always be hardcoded as Hello
  return <h1>Hello, {props.name}</h1>
}

ReactDOM.render(
  <HelloWorld name="Jack" />,
  document.getElementById('react-root')
)
