'use strict';

const express = require('express');
const routes = require('./routes');

module.exports = initApp;

function initApp () {
  const app = express();

  const cors = require('cors');
  app.use(cors());

  app.use(express.json());
  app.use('/api', routes);

  return app;
}
