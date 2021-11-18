'use strict';

const express = require('express');
const routes = require('./routes');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
// const rateLimit = require('express-rate-limit');
const hpp = require('hpp');

module.exports = initApp;

function initApp () {
  const app = express();

  const cors = require('cors');
  app.use(cors());

  app.use(express.json());

  app.use(mongoSanitize());
  app.use(helmet());
  app.use(xss());

  // const limiter = rateLimit({
  //   windowMs: 10 * 60 * 1000,
  //   max: 50
  // });

  // app.use(limiter);
  app.use(hpp());

  app.use('/', routes);

  return app;
}
