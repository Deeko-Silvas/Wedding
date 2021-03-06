'use strict';

const config = require('../config');

const connectDB = require('../db');

connectDB();

const app = require('../app')();

const server = app.listen(
  config.port,
  console.log(`Server running in ${config.env} mode on port ${config.port}`)
);

server.on('error', onError);

const logger = require('pino')();

function onError (err) {
  logger.error(err);
  console.log(err);
}

process.on('unhandledRejection', (err, promise) => {
  logger.error(err);
  console.log(`Error: ${err.message}`);
  process.exit(1);
});

process.on('unhandledRejection', (reason, p) => {
  logger.error(reason);
  console.log(`Unhandled Rejection at: ${p} reason: ${reason}`);
  process.exit(1);
});
