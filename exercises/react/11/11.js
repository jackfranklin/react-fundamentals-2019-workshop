

import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

const MakeThingsBlue = props => {
  return <div style={{ color: 'blue' }}>{props.children}</div>
}

MakeThingsBlue.propTypes = {
  // TODO: fill in the prop types
  // you might need https://reactjs.org/docs/typechecking-with-proptypes.html
  // to figure out what the proptype is
}

const App = () => {
  // TODO: rewrite this function passing in the children prop explicitly
  return (
    <MakeThingsBlue>
      <p>Hello world</p>
    </MakeThingsBlue>
  )
}

ReactDOM.render(<App />, document.getElementById('react-root'))
