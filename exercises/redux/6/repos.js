import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { fetchRepositories } from './actions'
import { connect } from 'react-redux'

class Repos extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    repos: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  onFetchClick = () => {
    this.props.dispatch(fetchRepositories())
  }

  // TODO: can you make this component let the user enter their username and use that
  // to fetch the repositories?
  render() {
    return (
      <div className="counter">
        <button onClick={this.onFetchClick}>Fetch Repos</button>
        {this.props.repos.map(repo => {
          return <div key={repo.id}>{repo.name}</div>
        })}
      </div>
    )
  }
}

const ConnectedRepos = connect(storeState => {
  return {
    repos: storeState.repositories,
  }
})(Repos)

export default ConnectedRepos
