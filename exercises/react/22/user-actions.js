import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import AuthContext from './auth-context'

// TODO:
// using <AuthContext.Provider>, hook this component up to the AuthContext
// and only allow the user to like a post if they are signed in.
export default class UserActions extends Component {
  static propTypes = {
    postId: PropTypes.number.isRequired,
  }

  state = {
    liked: false,
  }

  like = () => this.setState({ liked: true })

  render() {
    return (
      <div>
        <AuthContext.Provider>
          {isSignedIn =>
            isSignedIn ? (
              <Fragment>
                <button
                  onClick={this.like}
                  onClick={this.like}
                  disabled={this.state.liked === true}
                >
                  ❤
                </button>
                {this.state.liked && <span>You've liked this post!</span>}
              </Fragment>
            ) : null
          }
        </AuthContext.Provider>
      </div>
    )
  }
}
