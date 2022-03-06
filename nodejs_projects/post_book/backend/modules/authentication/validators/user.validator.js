'use strict';

const Joi = require('joi');
const common = require('../../../lib/utils/util');
const logger = require('../../../lib/logger/logger');
const CONSTANTS = require('../../../lib/constants/constant.json');

const schema = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.code) {
          case CONSTANTS.VALIDATION.ANY_EMPTY:
            err.message = CONSTANTS.MESSAGE.EMAIL_CANNOT_BE_EMPTY;
            break;
          case CONSTANTS.VALIDATION.STRING_BASE:
            err.message = CONSTANTS.MESSAGE.EMAIL_CANNOT_BE_NUMBER;
            break;
          case CONSTANTS.VALIDATION.ANY_REQUIRED:
            err.message = CONSTANTS.MESSAGE.EMAIL_IS_REQUIRED;
            break;
          case CONSTANTS.VALIDATION.STRING_EMAIL:
            err.message = CONSTANTS.MESSAGE.EMAIL_FORMAT_IS_INCORRECT;
            break;
          default:
            err.message = CONSTANTS.MESSAGE.VALIDATION_ERROR;
        }
      });
      return errors;
    }),
  password: Joi.string()
    .min(6)
    .max(30)
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.code) {
          case CONSTANTS.VALIDATION.ANY_EMPTY:
            err.message = CONSTANTS.MESSAGE.PASSWORD_CANNOT_BE_EMPTY;
            break;
          case CONSTANTS.VALIDATION.STRING_BASE:
            err.message = CONSTANTS.MESSAGE.PASSWORD_CANNOT_BE_NUMBER;
            break;
          case CONSTANTS.VALIDATION.ANY_REQUIRED:
            err.message = CONSTANTS.MESSAGE.PASSWORD_IS_REQUIRED;
            break;
          case CONSTANTS.VALIDATION.STRING_MIN:
            err.message = CONSTANTS.MESSAGE.PASSWORD_SHOULD_BE_MORE_THAN_6_CHARACTERS;
            break;
          case CONSTANTS.VALIDATION.STRING_MAX:
            err.message = CONSTANTS.MESSAGE.PASSWORD_SHOULD_BE_LESS_THAN_30_CHARACTERS;
            break;
          default:
            err.message = CONSTANTS.MESSAGE.VALIDATION_ERROR;
        }
      });
      return errors;
    })
});

/* User signUp validation */
exports.signUp = async (req, res, next) => {

  try {
    const data = req.body;
    await schema.validateAsync(data);
    next();
  } catch (err) {
    logger.log(
      CONSTANTS.LOGGER.ERROR,
      CONSTANTS.LOGGER.SIGN_UP_API_END +
      JSON.stringify(err.details[0].message)
    );
    const response = common.commonResponse(
      CONSTANTS.RESPONSE_SUCCESS.FALSE,
      null,
      err.details[0].message,
      err.details
    );
    res
      .status(CONSTANTS.HTTP_RESPONSE.HTTP_VALIDATION_ERROR)
      .json(response);
  }

};

/* User Login validation */
exports.login = async (req, res, next) => {

  try {
    const data = req.body;
    await schema.validateAsync(data);
    next();
  } catch (err) {
    logger.log(
      CONSTANTS.LOGGER.ERROR,
      CONSTANTS.LOGGER.LOGIN_API_END +
      JSON.stringify(err.details[0].message)
    );
    const response = common.commonResponse(
      CONSTANTS.RESPONSE_SUCCESS.FALSE,
      null,
      err.details[0].message,
      err.details
    );
    res
      .status(CONSTANTS.HTTP_RESPONSE.HTTP_VALIDATION_ERROR)
      .json(response);
  }

};
