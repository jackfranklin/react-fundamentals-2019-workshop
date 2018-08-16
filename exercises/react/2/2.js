import ReactDOM from 'react-dom'
import React from 'react'

const HelloWorld = () => {
  return <h1 className="foo">Hello World</h1>
}

ReactDOM.render(<HelloWorld />, document.getElementById('react-root'))
