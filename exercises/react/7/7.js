import ReactDOM from 'react-dom'
import React, { useState } from 'react'

const JournalHeader = () => {
  // TODO: can you get rid of the `name` constant, and instead create some
  // state using useState ? and then when the login button is clicked, set the
  // name of the logged in person

  const name = 'Jack'

  const login = () => {
    console.log('I was clicked!')
  }

  return (
    <div className="journal-header-wrapper">
      <h1 className="journal-header">Journal App</h1>
      <h2 className="journal-subheader">Journal for {name}</h2>
      <button className="journal-login" onClick={login}>
        Login
      </button>
    </div>
  )
}

const JournalApp = () => {
  return (
    <div className="journal-app">
      <JournalHeader />
    </div>
  )
}

ReactDOM.render(<JournalApp />, document.getElementById('react-root'))
