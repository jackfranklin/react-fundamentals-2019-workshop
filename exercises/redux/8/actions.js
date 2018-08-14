import fetch from 'so-fetch-js'

export const FETCHED_REPOSITORIES = 'FETCHED_REPOSITORIES'

export const fetchRepositories = () => {
  return dispatch => {
    return fetch(
      'http://github-proxy-api.herokuapp.com/users/jackfranklin/repos'
    ).then(result => {
      dispatch({ type: FETCHED_REPOSITORIES, data: result.data })
    })
  }
}

export const FETCHED_USER = 'FETCHED_USER'

export const fetchUser = () => {
  return dispatch => {
    return fetch(
      'http://github-proxy-api.herokuapp.com/users/jackfranklin'
    ).then(result => {
      dispatch({ type: FETCHED_USER, user: result.data })
    })
  }
}
