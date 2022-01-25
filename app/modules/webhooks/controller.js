'use strict'

const { useResponse, useMsgFormat } = require('services/hooks')

const useWebhook = require('./useWebhook')

const addRequestAnalyzer = async (req, res) => {
  const { resOk, resBadRequest } = useResponse(res)
  const { formatError, formatSuccess } = useMsgFormat()

  try {
    const { addRequestData } = useWebhook()
    await addRequestData(req)
    return resOk('success', formatSuccess)
  } catch (err) {
    return resBadRequest(err, formatError)
  }
}

module.exports = {
  addRequestAnalyzer,
}
