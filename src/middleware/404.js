'use strict';

/**
 * Middleware to handle not-found resources, returns a 404 error to front-end
 */
module.exports = (req,res,next) => {
  let error = { error: 'Resource Not Found' };
  res.status(404).json(error).end();
};
