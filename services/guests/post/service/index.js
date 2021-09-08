'use strict';

const guestsModel = require('../../../../db/schemas/guestlist.schema');
module.exports = async function (req, res) {
  const id = Math.floor(100000 + Math.random() * 900000);
  const parsedName = `${req.body.firstName.toLowerCase()}_${req.body.lastName.toLowerCase()}`;

  if (req.body.partnerName) {
    const parsedPartnerName = `${req.body.partnerName.split(' ').join('_').toLowerCase()}`;
    const partnerId = await guestsModel.findOne({ parsedName: parsedPartnerName });
    console.log(partnerId);
    if (partnerId) req.body.partnerId = partnerId;
  }

  const guest = await guestsModel.create({ _id: id, parsedName, ...req.body });
  res.status(201).json({ success: true, data: guest });
};
