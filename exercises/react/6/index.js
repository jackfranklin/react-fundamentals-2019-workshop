import React from 'react'

// TODO: can you create a <JournalHeader> component
// that renders a <div> containing the two headers from below,
// and then render that from the JournalApp component?

const JournalApp = props => {
  return (
    <div>
      <h1 className="journal-header">Journal App</h1>
      <h2 className="journal-subheader">Journal for {props.name}</h2>
    </div>
  )
}

const Render = () => <JournalApp name="Jack" />
export default Render
