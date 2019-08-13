const firebaseConfig = {
  apiKey: 'AIzaSyD8DCM13v0utLYOcUesjRhKPEJptbFH5NA',
  authDomain: 'getitdone-d3bb4.firebaseapp.com',
  databaseURL: 'https://getitdone-d3bb4.firebaseio.com',
  projectId: 'getitdone-d3bb4',
  storageBucket: '',
  messagingSenderId: '766015282014',
  appId: '1:766015282014:web:9aebaaf06bef6806',
}

window.firebase.initializeApp(firebaseConfig)

const database = window.firebase.database()

export { database }
