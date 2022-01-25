'use strict'

const {
  HTTP_SAVED,
  HTTP_OK,
  HTTP_UNPROCESSABLE_ENTITY,
  HTTP_BAD_REQUEST,
  HTTP_UNAUTHORIZED,
  HTTP_UPDATED,
} = require('./constants')

const resOk = res => (content, fnFormat) =>
  res.status(HTTP_OK) && res.send(fnFormat(content))

const resUpdated = res => () => res.status(HTTP_UPDATED) && res.send()

const resSaved = res => (content, fnFormat) =>
  res.status(HTTP_SAVED) && res.send(fnFormat(content))

const resUnprocessable = res => (content, fnFormat) =>
  res.status(HTTP_UNPROCESSABLE_ENTITY) && res.send(fnFormat(content))

const resBadRequest = res => (message, fnFormat) =>
  res.status(HTTP_BAD_REQUEST) && res.send(fnFormat(message))

const resUnAuthorized = res => (message, fnFormat) =>
  res.status(HTTP_UNAUTHORIZED) && res.send(fnFormat(message))

const useResponse = res => {
  return {
    resOk: resOk(res),
    resSaved: resSaved(res),
    resUpdated: resUpdated(res),
    resBadRequest: resBadRequest(res),
    resUnAuthorized: resUnAuthorized(res),
    resUnprocessable: resUnprocessable(res),
  }
}

module.exports = {
  useResponse,
}
