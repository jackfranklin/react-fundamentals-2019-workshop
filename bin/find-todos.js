const fs = require('fs')
const path = require('path')
const glob = require('glob')

const getTodos = filePath => {
  const contents = fs.readFileSync(filePath, { encoding: 'utf8' })
  const commentRegex = /\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm

  const matches = contents.match(commentRegex)

  if (!matches) return []

  const todos = matches
    .filter(match => {
      return match.includes('TODO')
    })
    .map(todo => {
      return todo
        .replace(/TODO/, '')
        .replace(': ', '')
        .replace('/*', '')
        .replace('*/', '')
        .replace('// ', '')
        .trim()
    })

  return todos
}

const reactExercises = glob('exercises/react/*/*.js', (err, files) => {
  const groupedFiles = files.reduce((map, currentFilePath) => {
    const matchData = /exercises\/react\/(\S+)\/(.+)/i.exec(currentFilePath)

    const exerciseNumber = matchData[1]
    const fileName = matchData[2]

    const todos = getTodos(currentFilePath)

    const entryForFile = {
      filePath: currentFilePath,
      todos,
    }

    if (map.has(exerciseNumber)) {
      map.set(
        exerciseNumber,
        new Set([...map.get(exerciseNumber), entryForFile])
      )
    } else {
      map.set(exerciseNumber, new Set([entryForFile]))
    }

    return map
  }, new Map())

  const toBeSerialized = Array.from(groupedFiles.entries(), ([key, data]) => {
    return [key, Array.from(data)]
  })

  const outputPath = path.join(
    process.cwd(),
    'exercises',
    'react',
    'todos.json'
  )

  fs.writeFile(
    outputPath,
    JSON.stringify(toBeSerialized, null, 2),
    { encoding: 'utf8' },
    err => {
      if (err) {
        console.log('Error writing TODOs', err)
        return
      }

      console.log('✔ Stored todos')
    }
  )
})
