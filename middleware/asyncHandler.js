'use-strict';

const asyncHandler = service => (req, res, next) =>
  Promise.resolve(service(req, res, next)).catch(err => {
    if (err instanceof Error) return next(err);
    return next(new Error(err));
  });

module.exports = asyncHandler;
