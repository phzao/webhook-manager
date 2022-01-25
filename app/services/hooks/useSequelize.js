'use strict'

const sequelizeConn = require('./useDatabase')

const useSequelize = ({ modelName, modelSchema, extraOptions = {} }) => {
  return async funcRepo => {
    const modelConnection = sequelizeConn.define(modelName, modelSchema, {
      ...extraOptions,
    })

    if (!funcRepo) throw `Method ${funcRepo} not found`

    try {
      const data = await funcRepo(modelConnection, sequelizeConn)
      const res = (!data && {}) || data.rows || data.dataValues || data

      return [res || {}, undefined]
    } catch (err) {
      return [undefined, err]
    }
  }
}

module.exports = { useSequelize }
