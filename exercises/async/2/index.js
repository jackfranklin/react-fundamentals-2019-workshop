const container = document.getElementById('react-root')

const logPromiseValue = (index, value) => {
  const div = document.createElement('div')
  div.innerHTML = `Promise value at index ${index}: ${value}`
  container.appendChild(div)
}

const createTimeoutPromise = time => {
  // TODO: make this function return after time that is
  // passed in
  return Promise.resolve('Hint: you probably want new Promise(...)')
}

createTimeoutPromise(2000).then(() => {
  logPromiseValue(1, 'This promise should run after 2 seconds')
})
