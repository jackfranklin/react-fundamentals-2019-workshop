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

glob('exercises/react/*/index.js', (err, files) => {
  files.forEach(file => {
    const contents = fs.readFileSync(file, { encoding: 'utf8' })

    const regex = /ReactDOM\.render\(([\S\n\r\s<]+),\s+document.getElementById\('react-root'\)\s?\)/m

    const result = regex.exec(contents)
    if (result && result[1]) {
      const thingThatIsRendered = result[1]

      const newRender = `const Render = () => ${thingThatIsRendered}; export default Render`

      const newContents = contents.replace(result[0], newRender)
      fs.writeFileSync(file, newContents, { encoding: 'utf8' })
    } else {
      console.log('no match', file)
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
