'use strict'

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
}

const mongoParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useFindAndModify: false,
  autoIndex: false,
  //useCreateIndex: true,
}

module.exports = {
  corsOptions,
  mongoParams,
}
