'use-strict';
const guestsModel = require('../../../../db/schemas/guestlist.schema');

module.exports = async function (req, res) {
  const guestData = await guestsModel.find();

  return res.status(200).json({ success: true, data: guestData });
};
