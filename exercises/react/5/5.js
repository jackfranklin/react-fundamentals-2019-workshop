

import ReactDOM from 'react-dom'
import React from 'react'
import PropTypes from 'prop-types'

const HelloWorld = props => {
  return (
    <h1>
      Hello, {props.name}, {props.age}, {props.colour}
    </h1>
  )
}

// TODO: fix `bunchOfProps` to get rid of the colour prop warning
// add a proptype declaration for age and make sure it's a number
// you can find more about proptypes here: https://reactjs.org/docs/typechecking-with-proptypes.html
HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
  colour: PropTypes.oneOf(['blue', 'red']).isRequired,
}

const bunchOfProps = {
  name: 'Jack',
  age: 25,
  colour: 'green',
}

ReactDOM.render(
  <HelloWorld {...bunchOfProps} />,
  document.getElementById('react-root')
)
