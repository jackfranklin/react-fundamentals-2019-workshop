const Bundler = require('parcel-bundler')
const path = require('path')
const chalk = require('chalk')
const fs = require('fs')
const getPort = require('get-port')
const { exec } = require('child_process')

console.log('🎉', chalk.green('Loading React fundamentals workshop...'))

console.log(
  '➡️',
  chalk.blue(` This will take a while the first time. Don't be alarmed :)`)
)
const babelNodePath = path
  .join(process.cwd(), 'node_modules', '.bin', 'babel-node')
  .replace(/(\s+)/g, '\\$1')

const jsonServerPath = path
  .join(process.cwd(), 'node_modules', '.bin', 'json-server')
  .replace(/(\s+)/g, '\\$1')

const indexFile = path.join(process.cwd(), 'exercises', 'index.html')

const bundler = new Bundler(indexFile)

Promise.all([
  getPort({ port: getPort.makeRange(1100, 1300) }),
  getPort({ port: getPort.makeRange(3000, 3100) }),
  getPort({ port: getPort.makeRange(4000, 4100) }),
]).then(([parcelPort, apiPort, graphQLPort]) => {
  console.log(chalk.green('Found ports!'))
  console.log('-->', 'The frontend is running on port', chalk.bold(parcelPort))
  console.log('-->', 'The API is running on port', chalk.bold(apiPort))
  console.log(
    '-->',
    'The GraphQL API is running on port',
    chalk.bold(graphQLPort)
  )

  const apiPortModule = `export default ${apiPort}`
  const graphqlPortModule = `export default ${graphQLPort}`

  fs.writeFileSync(
    path.join(process.cwd(), 'exercises', 'api-port.js'),
    apiPortModule,
    { encoding: 'utf8' }
  )

  fs.writeFileSync(
    path.join(process.cwd(), 'exercises', 'graphql-port.js'),
    graphqlPortModule,
    { encoding: 'utf8' }
  )

  exec(`${babelNodePath} exercises/api/write-posts.js`, () => {
    exec(`${jsonServerPath} exercises/api/db.json`, err => {
      if (err) {
        console.log(chalk.red('‼ Error running API:', err))
      }
      console.log(`✅ Running demo API on http://localhost:${apiPort}`)
    })

    exec(`${babelNodePath} exercises/graphql-api/server.js`, err => {
      if (err) {
        console.log(chalk.red('‼ Error running GraphQL API:', err))
      }
      console.log(`✅ Running GraphQL API on http://localhost:${graphQLPort}`)
    })

    bundler.serve(parcelPort)
  })
})
