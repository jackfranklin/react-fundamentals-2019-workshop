

import ReactDOM from 'react-dom'
import React from 'react'

const HelloWorld = () => {
  // TODO: can you change the h1 to another element?
  // how would we give the h1 a class name?
  return <h1>Hello World</h1>
}

ReactDOM.render(<HelloWorld />, document.getElementById('react-root'))
