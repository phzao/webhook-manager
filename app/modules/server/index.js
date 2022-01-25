'use strict'

const express = require('express')
const compression = require('compression')
const helmet = require('helmet')
const morgan = require('morgan')

const addWebhookRoutes = require('modules/webhooks/routes')

const route = express.Router()
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(compression())
app.use(helmet())
app.use(morgan('short'))

const appParams = {
  app,
  route,
}

module.exports = useExpress => {
  if (useExpress) useExpress(appParams)

  addWebhookRoutes(appParams)

  return app.listen(process.env.SERVER_PORT, () => {
    console.info(
      `🚀 Server is running on: http://localhost:${process.env.SERVER_PORT}`
    )
  })
}
