module.exports = async function (req, res) {
  return res.status(200).json({ success: true, data: 'Service Running' });
};
