const fs = require('fs')
const path = require('path')
const glob = require('glob')

const getTodos = filePath => {
  const contents = fs.readFileSync(filePath, { encoding: 'utf8' })
  const commentRegex = /\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm

  const matches = contents.match(commentRegex)

  if (!matches) return []

  const todos = matches.filter(match => {
    return match.includes('TODO')
  })
  console.log('matches', todos)
}

const reactExercises = glob('exercises/react/10/*.js', (err, files) => {
  console.log('got files', files)

  const groupedFiles = files.reduce((map, currentFilePath) => {
    const matchData = /exercises\/react\/(\S+)\/(.+)/i.exec(currentFilePath)

    const exerciseNumber = matchData[1]
    const fileName = matchData[2]

    const todos = getTodos(currentFilePath)

    if (map.has(exerciseNumber)) {
      map.set(exerciseNumber, new Set([...map.get(exerciseNumber), fileName]))
    } else {
      map.set(exerciseNumber, new Set([fileName]))
    }

    return map
  }, new Map())
})
