const mongoose = require('mongoose');
const logger = require('../logs/logger');
const CONSTANT = require('../constants/constant.json');

const connectDB = async () => {
  try {
    //construct the db connection uri
    let connectionURI;

    if (process.env.APP_ENV === 'local') {
      connectionURI = process.env.DB_CONNECTION_LOCAL;
    } else {
      connectionURI = `${process.env.DB_PREFIX}://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}${process.env.DB_PORT}/${process.env.DB_DATABASE}?authSource=admin`;
    }

    //connect to the mongodb database
    await mongoose.connect(connectionURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    logger.log(
      CONSTANT.LOGGER.INFO,
      CONSTANT.LOGGER.SUCCESSFULLY_CONNECTED_TO_THE_DATABASE
    );

  } catch (error) {
    //log the database error
    logger.log(
      CONSTANT.LOGGER.ERROR,
      CONSTANT.LOGGER.COULD_NOT_CONNECT_TO_THE_DATABASE +
      JSON.stringify(error.message)
    );
  }
};

module.exports = connectDB;
