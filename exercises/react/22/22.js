import ReactDOM from 'react-dom'
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Posts from './posts'
import AuthContext from './auth-context'

class MyBlog extends Component {
  state = {
    signedIn: false,
  }

  signIn = () => {
    this.setState({ signedIn: true })
  }

  signOut = () => {
    this.setState({ signedIn: false })
  }

  // TODO: can you extend the AuthContext so it also passed down the user's name?
  // add a form that allows the user to sign in with a particular name, and then display that across
  // the app.

  render() {
    return (
      <div>
        <header>
          {this.state.signedIn ? (
            <Fragment>
              <span>Signed in as jack</span>
              <button onClick={this.signOut}>Sign Out</button>
            </Fragment>
          ) : (
            <button onClick={this.signIn}>Sign In</button>
          )}
        </header>
        <div>
          <h1>Blog posts by Jack</h1>
          <AuthContext.Provider value={this.state.signedIn}>
            <Posts />
          </AuthContext.Provider>
        </div>
      </div>
    )
  }
}

const App = () => {
  return <MyBlog />
}

ReactDOM.render(<App />, document.getElementById('react-root'))
