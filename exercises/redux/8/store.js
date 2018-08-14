import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { repositoryReducer, userReducer } from './reducers'

const reducer = combineReducers({
  repositories: repositoryReducer,
  user: userReducer,
})

function configureStore() {
  /*
   * this is some code that enables us to "hot swap" our reducer code
   * in development without having to do a full page refresh
   * you don't need to worry too much about this
   * but ask me if you have any questions :)
   */

  if (process.env.NODE_ENV === 'development') {
    if (window.store == null) {
      window.store = createStore(
        reducer,
        composeWithDevTools(applyMiddleware(thunk))
      )
      return window.store
    }
    window.store.replaceReducer(reducer)
    return window.store
  } else {
    // in production, just create the store without dev tools
    return createStore(reducer, applyMiddleware(thunk))
  }
}
const store = configureStore()

export default store
