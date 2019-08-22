const container = document.getElementById('react-root')

const logPromiseValue = (index, value) => {
  const div = document.createElement('div')
  div.innerHTML = `Promise value at index ${index}: ${JSON.stringify(value)}`
  container.appendChild(div)
}

container.innerHTML = ''

const fetchPhotos = () =>
  fetch('https://jsonplaceholder.typicode.com/photos').then(response =>
    response.json()
  )

const fetchAlbums = () =>
  fetch('https://jsonplaceholder.typicode.com/albums').then(response =>
    response.json()
  )

const fetchAll = async () => {
  // TODO: can you use Promise.all to make this parallel?
  const photos = await fetchPhotos()
  const albums = await fetchAlbums()

  // just doing the splice to ensure the log isn't too long! No other reason :)
  logPromiseValue(1, photos.splice(0, 2))
  logPromiseValue(2, albums.splice(0, 2))
}

fetchAll()
