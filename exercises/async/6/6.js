const container = document.getElementById('react-root')

const logPromiseValue = (index, value) => {
  const div = document.createElement('div')
  div.innerHTML = `Promise value at index ${index}: ${JSON.stringify(value)}`
  container.appendChild(div)
}

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    return response.json()
  })
  .then(todo => {
    logPromiseValue(1, todo)
  })

// TODO: given the above code, can you make this code below work
// by implementing the fetchTodo function, that takes an ID?
// once you have, remove the comments around the lines below.

// fetchTodo({ id: 1 }).then(todo => {
//   logPromiseValue(1, todo)
// })
