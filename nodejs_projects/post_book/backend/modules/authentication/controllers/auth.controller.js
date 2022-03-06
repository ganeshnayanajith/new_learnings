'use strict';

const common = require('../../../lib/utils/util');
const logger = require("../../../lib/logger/logger");
const CONSTANT = require('../../../lib/constants/constant.json');
const authRepository = require("../repositories/auth.repository");
const authService = require("../servicers/auth.service");
const mongoose = require('mongoose');

/* POST user signUp */
exports.signUp = async (req, res, next) => {

  let response;

  try {

    const requestBody = req.body;

    logger.log(
      CONSTANT.LOGGER.INFO,
      CONSTANT.LOGGER.SIGN_UP_API_START + JSON.stringify(requestBody)
    );

    const additionalData = { _id: mongoose.Types.ObjectId() };

    const userData = { ...requestBody, ...additionalData };

    const tokens = authService.getJwt(userData);
    const user = await authRepository.createUser(userData, tokens);
    const data = common.userAuth(user);
    response = common.commonResponse(
      CONSTANT.RESPONSE_SUCCESS.TRUE,
      data,
      CONSTANT.MESSAGE.SUCCESS_MESSAGE,
      null
    );

    res.status(CONSTANT.HTTP_RESPONSE.HTTP_SUCCESS).json(response);
    logger.log(
      CONSTANT.LOGGER.INFO,
      CONSTANT.LOGGER.SIGN_UP_API_SUCCESS + JSON.stringify(response)
    );
  } catch (e) {
    logger.log(
      CONSTANT.LOGGER.ERROR,
      CONSTANT.LOGGER.SIGN_UP_API_FAILED + e.message
    );
    response = common.commonResponse(
      CONSTANT.RESPONSE_SUCCESS.FALSE,
      null,
      e.message,
      null
    );
    res.status(CONSTANT.HTTP_RESPONSE.HTTP_BAD_REQUEST).json(response);
  }
};

/* POST user authentication. */
exports.login = async (req, res, next) => {

  let response;

  try {

    const requestBody = req.body;

    logger.log(
      CONSTANT.LOGGER.INFO,
      CONSTANT.LOGGER.LOGIN_API_START + JSON.stringify(requestBody)
    );

    const user = await authRepository.authUser(requestBody);
    const tokens = authService.getJwt(user);
    user.accessToken = tokens[0];
    const data = common.userAuth(user);
    const userObject = await authRepository.setDetails(data);
    const userDetails = authService.authResponse(userObject);
    response = common.commonResponse(
      CONSTANT.RESPONSE_SUCCESS.TRUE,
      userDetails,
      CONSTANT.MESSAGE.SUCCESS_MESSAGE,
      null
    );
    res.status(CONSTANT.HTTP_RESPONSE.HTTP_SUCCESS).json(response);
    logger.log(
      CONSTANT.LOGGER.INFO,
      CONSTANT.LOGGER.LOGIN_API_SUCCESS + JSON.stringify(response)
    );
  } catch (e) {
    logger.log(
      CONSTANT.LOGGER.ERROR,
      CONSTANT.LOGGER.LOGIN_API_FAILED + CONSTANT.MESSAGE.UNAUTHORIZED
    );
    response = common.commonResponse(
      CONSTANT.RESPONSE_SUCCESS.FALSE,
      null,
      e,
      null
    );
    res
      .status(CONSTANT.HTTP_RESPONSE.HTTP_BAD_REQUEST)
      .json(response);
  }
};

