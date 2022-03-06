'use strict';

const common = require('../../../lib/utils/util');
const logger = require('../../../lib/logger/logger');
const CONSTANT = require('../../../lib/constants/constant.json');
const postService = require('../services/post.service');

exports.create = async (req, res, next) => {

  let response;
  const requestUserId = req.user.userId;

  try {

    const requestBody = req.body;
    requestBody.createdBy = requestUserId;

    logger.log(
      CONSTANT.LOGGER.INFO,
      CONSTANT.LOGGER.POST_CREATE_API_START +
      requestUserId +
      JSON.stringify(requestBody)
    );

    const result = await postService.create(
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
      CONSTANT.LOGGER.POST_CREATE_API_SUCCESS +
      JSON.stringify(response)
    );
  } catch (error) {
    logger.log(
      CONSTANT.LOGGER.ERROR,
      CONSTANT.LOGGER.POST_CREATE_API_FAILED +
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

exports.getAll = async (req, res, next) => {

  let response;
  const requestUserId = req.user.userId;

  try {

    logger.log(
      CONSTANT.LOGGER.INFO,
      CONSTANT.LOGGER.POST_GET_API_START +
      requestUserId
    );

    const result = await postService.getAll(
      requestUserId
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
      CONSTANT.LOGGER.POST_GET_API_SUCCESS +
      JSON.stringify(response)
    );
  } catch (error) {
    logger.log(
      CONSTANT.LOGGER.ERROR,
      CONSTANT.LOGGER.POST_GET_API_FAILED +
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
