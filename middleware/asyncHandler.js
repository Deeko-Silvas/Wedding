'use-strict';

const asyncHandler = service => (req, res, next) =>
  Promise.resolve(service(req, res, next)).catch(err => {
    console.log('test');
    console.log(err);
    return next;
  });

module.exports = asyncHandler;
