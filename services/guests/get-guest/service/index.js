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
    return res.status(200).json({ success: true, data: guestData });
  }

  return res.sendStatus(404);
};
