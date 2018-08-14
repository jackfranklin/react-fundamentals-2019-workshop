

const container = document.getElementById('react-root')

const logPromiseValue = (index, value) => {
  const div = document.createElement('div')
  div.innerHTML = `Promise value at index ${index}: ${JSON.stringify(value)}`
  container.appendChild(div)
}

const urlForPhoto = id => `https://jsonplaceholder.typicode.com/photos/${id}`

const urlForAlbum = id => `https://jsonplaceholder.typicode.com/albums/${id}`

fetch(urlForPhoto(1))
  .then(response => {
    return response.json()
  })
  .then(photo => {
    // TODO: can you fetch the photo's album now?
    logPromiseValue(1, photo)
  })

// TODO: once you've done the above, can you extract a function that fetches a
// url and parses it as JSON? maybe call it fetchJson(url) ?
