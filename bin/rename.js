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

glob('exercises/react/*/*.js', (err, files) => {
  files.forEach(file => {
    const contents = fs.readFileSync(file, { encoding: 'utf8' })

    const regex = /apiPort/

    const result = regex.exec(contents)

    if (result) {
      const newContents = `import apiPort from '../api-port'; ${contents}`
      fs.writeFileSync(file, newContents, { encoding: 'utf8' })
      console.log('Updated file', file)
    }
  })
})

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
