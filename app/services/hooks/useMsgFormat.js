'use strict'

const formatSuccess = content => ({
  data: content,
})

const frmtSuccessPaginate = content => ({
  ...content,
})

const formatFail = content => ({
  errors: [content],
})

const formatFailToJson = content => ({
  errors: content,
})

const formatError = content => ({
  message: content,
})

const useMsgFormat = () => ({
  formatSuccess,
  formatFail,
  formatError,
  formatFailToJson,
  frmtSuccessPaginate,
})

module.exports = { useMsgFormat }
