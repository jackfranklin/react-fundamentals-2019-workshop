const Bundler = require('parcel-bundler')
const path = require('path')
const chalk = require('chalk')
const fs = require('fs')

const { argv } = require('yargs')

const createHtml = (folderName, exerciseNumber) => `
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="../../common.css" />
    <title>Exercise: ${folderName} ${exerciseNumber}</title>
  </head>
<body>
  <h1>Exercise: ${folderName} ${exerciseNumber}</h1>
  <div id="react-root"></div>
  <script src="./${exerciseNumber}.js"></script>
</body>
</html>`

const getExercisePath = (folderName, exerciseNumber) =>
  path.join('exercises', folderName, String(exerciseNumber))

const generateIndexFile = (folderName, exerciseNumber) => {
  const filePath = path.join(
    getExercisePath(folderName, exerciseNumber),
    'index.html'
  )

  if (fs.existsSync(filePath)) return

  const contents = createHtml(folderName, exerciseNumber)

  console.log('Generating index.html file for exercise')
  fs.writeFileSync(filePath, contents, { encoding: 'utf8' })
}

const folderName = argv._[0]
const exerciseNumber = argv._[1]

if (!exerciseNumber || !folderName) {
  console.log(
    'ERROR',
    chalk.red('You forgot the exercise number and/or folder name.')
  )
  process.exit(1)
}

const exercisePath = getExercisePath(folderName, exerciseNumber)

const pathExists = fs.existsSync(exercisePath)

if (!pathExists) {
  console.log('ERROR', chalk.red(`${exercisePath} does not exist.`))
  console.log('\n')
  process.exit(1)
}

generateIndexFile(folderName, exercisePath)

const file = path.join(process.cwd(), exercisePath)

console.log('Running on', chalk.blue(exercisePath))

const bundler = new Bundler(file)

bundler.serve(1234)
