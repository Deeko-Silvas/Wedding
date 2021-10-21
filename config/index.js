'use strict';

module.exports = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.HTTP_PORT || 3000,
  mongoUrl: '',
  mongoOptions: {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAnyModify: false,
    useUnifiedTopology: true
  }
};
