const container = document.getElementById('react-root')

const logPromiseValue = (index, value) => {
  const div = document.createElement('div')
  div.innerHTML = `Promise value at index ${index}: ${JSON.stringify(value)}`
  container.appendChild(div)
}

container.innerHTML = ''

Promise.resolve(5)
  .then(value => value + 1)
  .then(value => value + 2)
  .then(value => value + 3)
  .then(value => {
    logPromiseValue(1, value)
  })

const asyncVersion = async () => {
  // TODO: write the async/await version of the promise chain above
  // notice how much it simplifies the promise chain and removes complexity
}

asyncVersion()
