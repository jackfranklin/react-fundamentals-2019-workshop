import React, { Component } from 'react'
import { connect } from 'react-redux'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h5>Counter app: incrementing by: ???</h5>
      </div>
    )
  }
}

const ConnectedHeader = connect(storeState => {
  // EXERCISE: connect this up so we can read the incrementBy value from the store
  return {}
})(Header)

export default ConnectedHeader
