import React, { useState } from 'react'
import posts from './posts'
console.log('posts', posts)

const JournalHeader = props => {
  const login = () => {
    props.setName('Jack')
  }

  return (
    <div className="journal-header-wrapper">
      <h1 className="journal-header">Journal App</h1>
      <h2 className="journal-subheader">Journal for {props.name}</h2>
      <button className="journal-login" onClick={login}>
        Login
      </button>
    </div>
  )
}

const JournalApp = () => {
  const [name, setName] = useState('')
  return (
    <div className="journal-app">
      <JournalHeader name={name} setName={setName} />

      <ul>
        {/*
      TODO: can you list the posts here, by mapping over them?
      give each <li> a class of "post" to make them look nicer
        */}
      </ul>
    </div>
  )
}

const Render = () => <JournalApp />
export default Render
