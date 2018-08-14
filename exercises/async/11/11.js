import '../../common.css'

const container = document.getElementById('react-root')

const logPromiseValue = (index, value) => {
  const div = document.createElement('div')
  div.innerHTML = `Promise value at index ${index}: ${JSON.stringify(value)}`
  container.appendChild(div)
}

container.innerHTML = ''

const urlForPhoto = id => `https://jsonplaceholder.typicode.com/photos/${id}`

const urlForAlbum = id => `https://jsonplaceholder.typicode.com/albums/${id}`

const fetchPhotoAndAlbum = async () => {
  // TODO: convert the below promise chain into async/await
}

fetchPhotoAndAlbum()

fetch(urlForPhoto(1))
  .then(response => {
    return response.json()
  })
  .then(photo => {
    return fetch(urlForAlbum(photo.albumId))
  })
  .then(response => response.json())
  .then(album => {
    logPromiseValue(1, album)
  })
