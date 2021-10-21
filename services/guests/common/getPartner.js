const guestsModel = require('../../../db/schemas/guestlist.schema');

const getPartner = async (name) => {
  const parsedPartnerName = `${name.split(' ').join('-').toLowerCase()}`;
  const partnerId = await guestsModel.findOne({ parsedName: parsedPartnerName });
  return partnerId._id;
};

module.exports = getPartner;
