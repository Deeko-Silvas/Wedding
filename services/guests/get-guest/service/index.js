'use strict';
const guestsModel = require('../../../../db/schemas/guestlist.schema');
const logger = require('pino')();

module.exports = async function (req, res) {
  const guest = req.params.guest;
  logger.info({ msg: 'get guest start request', guest });
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

    logger.info({ msg: 'get guest end request', guests });
    return res.status(200).json({ success: true, data: guests });
  }

  logger.error({ msg: 'get guest error' });
  return res.sendStatus(404);
};
