'use strict';

/**
 * Error handler middleware for server errors, sends full error contents to front-end.
 */
module.exports = (err, req, res, next) => {
  let error = { error: err };
  res.status(500).json(error).end();
};
