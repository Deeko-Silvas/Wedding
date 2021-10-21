'use strict';

const guestsModel = require('../../../../db/schemas/guestlist.schema');
const getPartner = require('../../common/getPartner');

module.exports = async function (req, res) {
  const id = Math.floor(100000 + Math.random() * 900000);
  let partnerId;

  if (req.body.partnerName) {
    partnerId = await getPartner(req.body.partnerName);
    if (partnerId) req.body.partnerId = partnerId;
  }

  const guest = await guestsModel.create({ _id: id, ...req.body });

  if (req.body.partnerName) {
    const partnerName = `${req.body.firstName} ${req.body.lastName}`;
    await guestsModel.findByIdAndUpdate(partnerId, { partnerName, partnerId: guest._id }, {
      new: true,
      runValidators: true,
      useFindAndModify: false
    });
  }
  res.status(201).json({ success: true, data: guest });
};
