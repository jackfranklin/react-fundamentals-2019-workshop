import '../../common.css'

const container = document.getElementById('react-root')

const logPromiseValue = (index, value) => {
  const div = document.createElement('div')
  div.innerHTML = `Promise value at index ${index}: ${JSON.stringify(value)}`
  container.appendChild(div)
}

container.innerHTML = ''

// TODO: convert this function into one that uses async/await
const fetchPhoto = id =>
  fetch(`https://jsonplaceholder.typicode.com/photos/${id}`).then(response =>
    response.json()
  )

fetchPhoto(1).then(photo => {
  logPromiseValue(1, photo)
})
