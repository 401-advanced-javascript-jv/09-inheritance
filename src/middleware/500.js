'use strict';

/**
 * Error handler middleware for server errors, sends status 500 and full error contents to front-end.
 * @module /src/middleware/500
 */
module.exports = (err, req, res, next) => {
  let error = { error: err };
  res.status(500).json(error).end();
};
