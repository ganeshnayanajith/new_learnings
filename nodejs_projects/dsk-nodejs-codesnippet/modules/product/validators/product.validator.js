'use strict';

const Joi = require('joi');
const common = require('../../../lib/utils/util');
const logger = require('../../../lib/logger/logger');
const CONSTANTS = require('../../../lib/constants/constant.json');

const schema = Joi.object({
  name: Joi.string()
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.code) {
          case CONSTANTS.VALIDATION.ANY_EMPTY:
            err.message = CONSTANTS.MESSAGE.NAME_CANNOT_BE_EMPTY;
            break;
          case CONSTANTS.VALIDATION.STRING_BASE:
            err.message = CONSTANTS.MESSAGE.NAME_CANNOT_BE_NUMBER;
            break;
          case CONSTANTS.VALIDATION.ANY_REQUIRED:
            err.message = CONSTANTS.MESSAGE.NAME_IS_REQUIRED;
            break;
          default:
            err.message = CONSTANTS.MESSAGE.VALIDATION_ERROR;
        }
      });
      return errors;
    }),
  price: Joi.number()
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.code) {
          case CONSTANTS.VALIDATION.ANY_EMPTY:
            err.message = CONSTANTS.MESSAGE.PRICE_CANNOT_BE_EMPTY;
            break;
          case CONSTANTS.VALIDATION.NUMBER_BASE:
            err.message = CONSTANTS.MESSAGE.PRICE_SHOULD_BE_NUMBER;
            break;
          case CONSTANTS.VALIDATION.ANY_REQUIRED:
            err.message = CONSTANTS.MESSAGE.PRICE_IS_REQUIRED;
            break;
          default:
            err.message = CONSTANTS.MESSAGE.VALIDATION_ERROR;
        }
      });
      return errors;
    })
});

exports.create = async (req, res, next) => {

  try {
    const data = req.body;
    await schema.validateAsync(data);
    next();
  } catch (err) {
    logger.log(
      CONSTANTS.LOGGER.ERROR,
      CONSTANTS.LOGGER.PRODUCT_CREATE_API_END +
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