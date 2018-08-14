import '../../common.css'

const container = document.getElementById('react-root')

const logPromiseValue = (index, value) => {
  const div = document.createElement('div')
  div.innerHTML = `Promise value at index ${index}: ${value}`
  container.appendChild(div)
}

Promise.resolve(5)
  .then(value => {
    logPromiseValue(1, value)
    return value + 1
  })
  .then(() => {
    // TODO: deal with this error, and ensure that the promise chain returns the value 10 if there is an error
    throw new Error('it went wrong')
  })
// TODO: can you make the promise chain:
// - return 6 if there is NO error
// - return 10 if there is an error
