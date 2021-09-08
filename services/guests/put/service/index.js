'use strict';
const guestsModel = require('../../../../db/schemas/guestlist.schema');

module.exports = async function (req, res) {
  const id = req.params.id;

  const guestData = await guestsModel.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false
  });

  return res.status(200).json({ success: true, data: guestData });
};
