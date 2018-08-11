const Bundler = require('parcel-bundler')
const path = require('path')
const chalk = require('chalk')
const fs = require('fs')

const { argv } = require('yargs')

const folderName = argv._[0]
const exerciseNumber = argv._[1]

if (!exerciseNumber || !folderName) {
  console.log(
    'ERROR',
    chalk.red('You forgot the exercise number and/or folder name.')
  )
  process.exit(1)
}

const exercisePath = path.join(
  'exercises',
  folderName,
  String(exerciseNumber),
  'index.html'
)

const pathExists = fs.existsSync(exercisePath)

if (!pathExists) {
  console.log('ERROR', chalk.red(`${exercisePath} does not exist.`))
  console.log('\n')
  process.exit(1)
}

const file = path.join(process.cwd(), exercisePath)

console.log('Running on', chalk.blue(exercisePath))

const bundler = new Bundler(file)

bundler.serve(1234)
