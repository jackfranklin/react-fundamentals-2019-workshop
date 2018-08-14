const container = document.getElementById('react-root')

const logPromiseValue = (index, value) => {
  const div = document.createElement('div')
  div.innerHTML = `Promise value at index ${index}: ${JSON.stringify(value)}`
  container.appendChild(div)
}

const fetchPhotos = () =>
  fetch('https://jsonplaceholder.typicode.com/photos').then(response =>
    response.json()
  )

const fetchAlbums = () =>
  fetch('https://jsonplaceholder.typicode.com/albums').then(response =>
    response.json()
  )

// TODO: fetch the list of photos and albums using Promise.all
// and log the results
