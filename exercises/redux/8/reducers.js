import { FETCHED_REPOSITORIES, FETCHED_USER } from './actions'

export const repositoryReducer = (state = [], action) => {
  switch (action.type) {
    case FETCHED_REPOSITORIES:
      return action.data.items
    default:
      return state
  }
}

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCHED_USER:
      return action.user
    default:
      return state
  }
}
