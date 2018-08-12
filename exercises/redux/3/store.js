import { createStore } from 'redux'

const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    // EXERCISE: make the reducer deal with DECREMENT as well as INCREMENT
    case 'INCREMENT':
      return { count: state.count + 1 }
    default:
      return state
  }
}

const store = createStore(reducer)

export default store
