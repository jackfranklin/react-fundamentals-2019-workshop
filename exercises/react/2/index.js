import React from 'react'

const JournalApp = () => {
  // TODO: can you change this to use JSX?
  // and ensure the h1 still has a class of journal header?
  // what if we wanted the h1 wrapped in a div?
  return React.createElement('h1', null, 'Hello World')
}

const Render = () => {
  // TODO: update this line to use JSX also.
  return React.createElement(JournalApp)
}

export default Render
