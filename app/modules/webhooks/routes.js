'use strict'

const { addRequestAnalyzer } = require('./controller')

const addWebhookRoutes = ({ app, route }) => {
  route.get(`/analyzer`, addRequestAnalyzer)
  route.post(`/analyzer`, addRequestAnalyzer)

  app.use(``, route)
}

module.exports = addWebhookRoutes
