'use strict';

const express = require('express');
const services = require('./services');
const asyncHandler = require('./middleware/asyncHandler');

const router = (module.exports = express.Router());

router.get(
  '/',
  (req, res) => {
    res.send('Helooooooooooooo!!!!!');
  }
);

router.get(
  '/api/status',
  asyncHandler(services.guests.status)
);

router.get(
  '/api/:guest',
  asyncHandler(services.guests.getGuest.service)
);

router.post(
  '/api/',
  asyncHandler(services.guests.post.service)
);

router.put(
  '/api/:id',
  asyncHandler(services.guests.put.service)
);

router.delete(
  '/api/:id',
  asyncHandler(services.guests.delete.service)
);
