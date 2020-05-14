const bodyParser = require('body-parser');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const cors = require('cors');

module.exports = function (app) {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  //Sanitize data
  app.use(mongoSanitize());

  //Set security headers
  app.use(helmet());

  //Prevent XSS attcks
  app.use(xss());

  //Rate limiting
  app.use(
    rateLimit({
      //10 mins
      windowMs: 10 * 60 * 1000,
      max: 100,
    })
  );

  //Prevent http param pollution
  app.use(hpp());

  //Enable CORS
  app.use(cors());
};
