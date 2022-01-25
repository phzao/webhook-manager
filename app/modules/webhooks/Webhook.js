'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
  params: { type: Object },
  query: { type: Object },
  body: { type: Object },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
  },
})

module.exports = {
  WebhookModel: mongoose.model('Webhook', schema),
}
