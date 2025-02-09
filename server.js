const express = require('express');
const path = require('path');
const morgan = require('morgan');
const colors = require('colors');
const fileupload = require('express-fileupload');
const cookiePaeser = require('cookie-parser');
const dotenv = require('dotenv');

//Load env var
dotenv.config({
  path: './config/config.env',
});

const app = express();

//Dev logging middleware
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Cookie Parser
app.use(cookiePaeser());

//File uploading
app.use(fileupload());

//Security middlewares
require('./startup/security')(app);

//Mount routers
require('./startup/routes')(app);

//Connect to database
require('./startup/db')();

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

//Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  //Close server & exit process
  server.close(() => process.exit(1));
});
