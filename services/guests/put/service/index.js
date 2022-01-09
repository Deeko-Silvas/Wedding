'use strict';
const guestsModel = require('../../../../db/schemas/guestlist.schema');
const getPartner = require('../../common/getPartner');
const slugify = require('slugify');
const logger = require('pino')();

module.exports = async function (req, res) {
  const id = req.params.id;
  const guest = req.body;
  logger.info({ msg: 'guest put start request', id, guest });

  if (guest.partnerName) {
    const partnerId = await getPartner(guest.partnerName);
    if (partnerId) guest.partnerId = partnerId;
  }

  const guestData = await guestsModel.findById(id);

  if (guest.firstName || guest.lastName) {
    const firstName = guest.firstName || guestData.firstName;
    const lastName = guest.lastName || guestData.lastName;
    const parsedName = slugify(`${firstName} ${lastName}`, { lower: true });
    guest.parsedName = parsedName;
  }

  const updateGuestData = await guestsModel.findByIdAndUpdate(id, guest, {
    new: true,
    runValidators: true,
    useFindAndModify: false
  });

  logger.info({ msg: 'guest put end request', updateGuestData });
  return res.status(200).json({ success: true, data: updateGuestData });
};
