

const container = document.getElementById('react-root')

const logPromiseValue = (index, value) => {
  const div = document.createElement('div')
  div.innerHTML = `Promise value at index ${index}: ${value}`
  container.appendChild(div)
}

Promise.resolve(5)
  .then(value => {
    logPromiseValue(1, value)
    // TODO: update this to return a promise with the value of value+1
    return value + 1
  })
  .then(value => {
    logPromiseValue(2, value)
  })
