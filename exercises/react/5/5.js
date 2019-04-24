import ReactDOM from 'react-dom'
import React from 'react'
import PropTypes from 'prop-types'

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

JournalApp.propTypes = {
  // TODO: define the prop type for the name, age and location prop
}

const bunchOfProps = {
  name: 'Jack',
  age: 26,
  location: 'London',
}

ReactDOM.render(
  <JournalApp {...bunchOfProps} />,
  document.getElementById('react-root')
)
