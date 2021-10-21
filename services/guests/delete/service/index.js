'use-strict';

const guestsModel = require('../../../../db/schemas/guestlist.schema');

module.exports = async function (req, res) {
  const id = req.params.id;

  await guestsModel.findOneAndUpdate({ partnerId: id }, { partnerName: null, partnerId: null });

  const deletedGuest = await guestsModel.findByIdAndDelete(id);

  return res.status(200).json({ success: true, data: deletedGuest });
};
