const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const config = require('configuration')
const database = require('database')
const port = config.get('PORT')
const env = config.get('ENV')
const api = require('routing')
const app = express()

app.use(helmet())
if(env && (env === 'dev' || env === 'development')) {
  app.use(require('morgan')('combined'))
}
app.use(bodyParser.json())
app.use('/api', api)

// handle the next(error) calls
app.use((info, req, res, next) => {
  const { status, message } = info
  console.log(JSON.stringify(info, null, 2))
  res.status(status).send(message)
})

exports.start = async () => {
  try {
    await database.connect()
    console.log('Connected to database')
    await app.listen(port)
    console.log(`Connected on port: ${port}`)
  } catch (error) {
    console.log('Something went wrong')
    console.log(error)
  }
}
