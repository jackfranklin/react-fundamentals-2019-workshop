import fetch from 'so-fetch-js'

export const FETCHED_REPOSITORIES = 'FETCHED_REPOSITORIES'

export const fetchRepositories = () => {
  return dispatch => {
    return fetch(
      'http://github-proxy-api.herokuapp.com/users/jackfranklin/repos'
    ).then(result => {
      // TODO: dispatch the FETCHED_REPOSITORIES action here so that the
      // repos are put into redux
      console.log('got data', result.data)
    })
  }
}
