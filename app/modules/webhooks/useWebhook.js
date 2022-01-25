'use strict'

const { WebhookModel } = require('./Webhook')

const addRequestData = async ({ query = {}, params = {}, body = {} }) => {
  const requestData = new WebhookModel({ query, params, body })

  return await requestData.save()
}

module.exports = () => ({
  addRequestData,
})
