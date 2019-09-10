const express = require('express')
const graphqlHTTP = require('express-graphql')
const app = express()
const schema = require('./schema')
const port = require('../graphql-port')

app.use(
  '/graphql',
  (req, res, next) => {
    res.header('Access-Control-Allow-Credentials', true)
    res.header(
      'Access-Control-Allow-Headers',
      'content-type, authorization, content-length, x-requested-with, accept, origin'
    )
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
    res.header('Allow', 'POST, GET, OPTIONS')
    res.header('Access-Control-Allow-Origin', '*')
    if (req.method === 'OPTIONS') {
      res.sendStatus(200)
    } else {
      next()
    }
  },
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)
app.listen(port.default)
