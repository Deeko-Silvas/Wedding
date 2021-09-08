'use strict';

module.exports = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.HTTP_PORT || 3000,
  mongoUrl: 'mongodb+srv://PhilLiv:Lmr1979*@cluster0.4m44e.mongodb.net/test',
  mongoOptions: {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAnyModify: false,
    useUnifiedTopology: true
  }
};
