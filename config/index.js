'use strict';
const secrets = require('../secrets')


module.exports = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.HTTP_PORT || 3000,
  mongoUrl: process.env.MONGO_URL || secrets.mongoURL,
  mongoOptions: {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAnyModify: false,
    useUnifiedTopology: true
  }
};
