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
  asyncHandler(services.guests.getGuest.service)
);

router.post(
  '/',
  asyncHandler(services.guests.post.service)
);

router.put(
  '/:id',
  asyncHandler(services.guests.put.service)
);

router.delete(
  '/:id',
  asyncHandler(services.guests.delete.service)
);
