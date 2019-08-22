import ReactDOM from 'react-dom'
import React from 'react'

const JournalApp = () => {
  // TODO: can you change the h1 to another element?
  // how would we give the h1 a class name of "journal-header" ?
  return React.createElement('h1', null, 'Hello World')
}

ReactDOM.render(
  React.createElement(JournalApp),
  document.getElementById('react-root')
)
