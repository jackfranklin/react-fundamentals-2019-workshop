

const container = document.getElementById('react-root')

const logPromiseValue = (index, value) => {
  const div = document.createElement('div')
  div.innerHTML = `Promise value at index ${index}: ${value}`
  container.appendChild(div)
}

container.innerHTML = ''
Promise.resolve(5)
  .then(value => {
    logPromiseValue(1, value)
  })
  .then(value => {
    // TODO: this will log undefined
    // can you make it log 5?
    logPromiseValue(2, value)
  })
