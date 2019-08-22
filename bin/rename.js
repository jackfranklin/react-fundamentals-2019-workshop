const fs = require('fs')
const path = require('path')
const glob = require('glob')

// glob('exercises/*/*/*.js', (err, files) => {
//   files.forEach(file => {
//     console.log('file', file)

//     const base = path.basename(file)

//     const regex = /[0-9]+/

//     if (regex.test(base)) {
//       fs.rename(file, path.join(path.dirname(file), 'index.js'), err => {
//         if (err) {
//           throw err
//         }
//       })
//     }
//   })
// })

glob('exercises/*/*/index.html', (err, files) => {
  files.forEach(file => {
    fs.unlink(file, err => {
      if (err) throw err
    })
  })
})
