'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guestsSchema = new Schema({
  _id: {
    type: String,
    unique: true
  },
  category: {
    type: String,
    required: true,
    enum: [
      'Phil Family',
      'Vikki Family',
      'Joint Friends',
      'Phil Friends',
      'Vikki Friends',
      'Phil Colleagues',
      'Vikki Colleagues'
    ]
  },
  tableNumber: {
    type: String,
    default: 'Not Set',
    required: true
  },
  firstName: {
    type: String,
    trim: true,
    required: [true, 'Please add a first name']
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'Please add a last name']
  },
  parsedName: {
    type: String,
    default: null
  },
  partnerId: {
    type: String,
    default: null
  },
  partnerName: {
    type: String,
    default: null
  },
  email: {
    type: String,
    trim: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please add a valid email'
    ]
  },
  ceremonyInvite: {
    type: String,
    default: 'No',
    enum: [
      'Yes',
      'No'
    ]
  },
  receptionInvite: {
    type: String,
    default: 'No',
    enum: [
      'Yes',
      'No'
    ]
  },
  ceremonyConfirm: {
    type: String,
    default: 'No Reply',
    enum: [
      'No Reply',
      'Confirm',
      'Decline'
    ]
  },
  receptionConfirm: {
    type: String,
    default: 'No Reply',
    enum: [
      'No Reply',
      'Confirm',
      'Decline'
    ]
  },
  dietary: {
    type: Array,
    default: []
  },
  comment: {
    type: String,
    default: null
  }
});

const guests = mongoose.model('Guests', guestsSchema);

module.exports = guests;
