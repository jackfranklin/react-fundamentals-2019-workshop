import ReactDOM from 'react-dom'
import React from 'react'

const JournalApp = props => {
  return (
    <div>
      <h1 className="journal-header">Journal App</h1>
      <h2 className="journal-subheader">
        Journal for {props.name}, {props.age} in {props.location}
      </h2>
    </div>
  )
}

const bunchOfProps = {
  name: 'Jack',
  age: 26,
  location: 'London',
}

// TODO: use the spread operator to pass through all the object keys as prop
const Render = () => (
  <JournalApp
    name={bunchOfProps.name}
    age={bunchOfProps.age}
    location={bunchOfProps.location}
  />
)
export default Render
