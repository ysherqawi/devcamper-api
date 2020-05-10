const express = require('express');
const bootcamps = require('../routes/bootcamps');
const courses = require('../routes/courses');
const errorHandler = require('../middleware/error');

module.exports = function (app) {
  app.use(express.json());
  app.use('/api/v1/bootcamps', bootcamps);
  app.use('/api/v1/courses', courses);
  app.use(errorHandler);
};
