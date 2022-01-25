'use strict'

const cors = require('cors')
const { connect } = require('mongoose')
const { config } = require('dotenv')
config()

const app = require('modules/server')

const { corsOptions, mongoParams } = require('./config')

try {
  connect(process.env.MONGO_CONNECTION, mongoParams)
  console.log('MongoConnection has been established successfully.')
} catch (error) {
  console.error('mongo error', error)
}

app(params => {
  const { app } = params
  app.use(cors(corsOptions))
})
