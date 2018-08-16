import ReactDOM from 'react-dom'
import React from 'react'

const HelloWorld = () => {
  // TODO: can you change the h1 to another element?
  // how would we give the h1 a class name?
  return React.createElement('div', null, [
    React.createElement('h2', null, 'Hello World'),
    React.createElement('p', null, 'Hello Jack'),
  ])
}

ReactDOM.render(
  React.createElement(HelloWorld),
  document.getElementById('react-root')
)
