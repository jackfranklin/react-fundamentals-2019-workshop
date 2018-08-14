import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { fetchUser } from './actions'
import { connect } from 'react-redux'

class User extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object,
  }

  onFetchClick = () => {}

  // TODO: can you make the fetch user button work?
  render() {
    return (
      <div className="counter">
        <button onClick={this.onFetchClick}>Fetch User</button>
        <h1>{this.props.user.login}</h1>
      </div>
    )
  }
}

const ConnectedUser = connect(storeState => {
  return {
    user: storeState.user,
  }
})(User)

export default ConnectedUser
