import { createStore } from 'redux'
import { INCREMENT } from './actions'

const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 }
    case 'DECREMENT':
      return { count: state.count - 1 }
    default:
      return state
  }
}

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
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )
      return window.store
    }
    window.store.replaceReducer(reducer)
    return window.store
  } else {
    // in production, just create the store without dev tools
    return createStore(reducer)
  }
}
const store = configureStore()

export default store
