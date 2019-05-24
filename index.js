'use strict';

/**
 * Basic API Server
 * @requires cors
 * @requires dotenv
 * @requires express
 * @requires mongodb-memory-server
 * @requires mongoose
 * @requires mongoose-schema-jsonschema
 * @requires morgan
 * @requires require-directory
 * @requires swagger-ui-express
 * @requires uuid
 */
require('dotenv').config();
const mongoose = require('mongoose');

const mongooseOptions = {
  useNewUrlParser:true,
  useCreateIndex: true,
};
mongoose.connect(process.env.MONGODB_URI, mongooseOptions);

require('./src/app.js').start(process.env.PORT);
