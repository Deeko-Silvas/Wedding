'use strict';
const guestsModel = require('../../../../db/schemas/guestlist.schema');

module.exports = async function (req, res) {
  const guest = req.params.guest;
  let guestData;
  if (!isNaN(guest)) {
    guestData = await guestsModel.findById(guest);
  } else {
    const parsedName = guest.toLowerCase();
    guestData = await guestsModel.findOne({ parsedName });
  }

  if (guestData) {
    const guests = [guestData];

    if (guestData.partnerId) {
      const partner = await guestsModel.findById(guestData.partnerId);

      if (partner) guests.push(partner);
    }

    return res.status(200).json({ success: true, data: guests });
  }

  return res.sendStatus(404);
};
