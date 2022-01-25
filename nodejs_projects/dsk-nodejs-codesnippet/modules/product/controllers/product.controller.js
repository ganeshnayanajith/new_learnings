'use strict';

const common = require('../../../lib/utils/util');
const logger = require('../../../lib/logger/logger');
const CONSTANT = require('../../../lib/constants/constant.json');
const productService = require('../services/product.service');

exports.create = async (req, res, next) => {

  let response;
  const requestUserId = req.user.userId;

  try {

    const requestBody = req.body;

    logger.log(
      CONSTANT.LOGGER.INFO,
      CONSTANT.LOGGER.PRODUCT_CREATE_API_START +
      requestUserId +
      JSON.stringify(requestBody)
    );

    const result = await productService.create(
      requestBody
    );
    response = common.commonResponse(
      CONSTANT.RESPONSE_SUCCESS.TRUE,
      result,
      CONSTANT.MESSAGE.SUCCESS_MESSAGE,
      null
    );
    res.status(CONSTANT.HTTP_RESPONSE.HTTP_CREATED).json(response);
    logger.log(
      CONSTANT.LOGGER.INFO,
      CONSTANT.LOGGER.PRODUCT_CREATE_API_SUCCESS +
      JSON.stringify(response)
    );
  } catch (error) {
    logger.log(
      CONSTANT.LOGGER.ERROR,
      CONSTANT.LOGGER.PRODUCT_CREATE_API_END +
      requestUserId +
      error.message
    );

    response = common.commonResponse(
      CONSTANT.RESPONSE_SUCCESS.FALSE,
      null,
      error.message,
      null
    );

    res
      .status(CONSTANT.HTTP_RESPONSE.HTTP_BAD_REQUEST)
      .json(response);
  }
};

