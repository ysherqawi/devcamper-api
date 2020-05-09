const mongoose = require('mongoose');

module.exports = async function () {
  const db = process.env.MONGO_URI;
  const conn = await mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};
