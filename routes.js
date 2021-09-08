'use strict';

const express = require('express');
const services = require('./services');
const asyncHandler = require('./middleware/asyncHandler');

const router = (module.exports = express.Router());

router.get(
  '/',
  asyncHandler(services.guests.get.service)
);

router.get(
  '/:guest',
  services.guests.getGuest.service
);

router.post(
  '/',
  services.guests.post.service
);

router.put(
  '/:id',
  services.guests.put.service
);
