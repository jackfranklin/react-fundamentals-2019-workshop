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
  // TODO: this url does not exist and so line 24 will cause an error
  // when we try to parse json that doesn't exist
  // can you catch this error and log something to the user?
  const photoResponse = fetch(
    'https://jsonplaceholder.typicode.com/sldkfjsldkjflsdkjflk'
  )

  const photoJson = photoResponse.json()
}

fetchPhotoAndAlbum()
