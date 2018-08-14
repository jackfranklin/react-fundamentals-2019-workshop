

import ReactDOM from 'react-dom'
import React from 'react'
import PropTypes from 'prop-types'

const AskQuestion = () => {
  return <p>How is your day going today?</p>
}

const HelloWorld = props => {
  // TODO: make the HelloWorld component render the <AskQuestion /> component
  return (
    <div>
      <h1>
        {props.greeting}, {props.name}
      </h1>
    </div>
  )
}
HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
  greeting: PropTypes.oneOf(['Hello', 'Hi']).isRequired,
}

const App = () => {
  return <HelloWorld greeting="Hello" name="Jack" />
}

ReactDOM.render(<App />, document.getElementById('react-root'))
