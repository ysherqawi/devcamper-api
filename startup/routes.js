const express = require('express');
const bootcamps = require('../routes/bootcamps');
const courses = require('../routes/courses');
const auth = require('../routes/auth');
const users = require('../routes/users');
const errorHandler = require('../middleware/error');

module.exports = function (app) {
  app.use(express.json());
  app.use('/api/v1/auth', auth);
  app.use('/api/v1/users', users);
  app.use('/api/v1/bootcamps', bootcamps);
  app.use('/api/v1/courses', courses);
  app.use(errorHandler);
};
