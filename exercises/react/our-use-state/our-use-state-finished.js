const states = []
let calls = -1

const ourUseState = defaultValue => {
  const callId = ++calls

  if (states[callId]) {
    return states[callId]
  }

  const setValue = newValue => {
    console.log('new value', newValue)
    states[callId][0] = newValue
    renderWithOurHooks()
  }

  const stateTuple = [defaultValue, setValue]
  states[callId] = stateTuple
  return stateTuple
}

const renderWithOurHooks = () => {
  calls = -1
  ReactDOM.render(<Counter />, document.getElementById('react-root'))
}

renderWithOurHooks()
