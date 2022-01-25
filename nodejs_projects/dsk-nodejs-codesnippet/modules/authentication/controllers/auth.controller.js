'use strict';

const common = require('../../../lib/utils/util');
const logger = require("../../../lib/logger/logger");
const CONSTANT = require('../../../lib/constants/constant.json');
const User = require("../repositories/auth.repository");
const authService = require("../servicers/auth.service");

/* POST user signUp */
exports.signUp = async (req, res, next) => {

  let response;

  try {

    const requestBody = req.body;

    logger.log(
      CONSTANT.LOGGER.INFO,
      CONSTANT.LOGGER.SIGN_UP_API_START + JSON.stringify(requestBody)
    );

    const tokens = authService.getJwt(requestBody);
    const user = await User.createUser(requestBody, tokens);
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
      CONSTANT.LOGGER.SIGN_UP_API_END + e.message
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
exports.authenticate = async (req, res, next) => {

  let response;

  try {

    const requestBody = req.body;

    logger.log(
      CONSTANT.LOGGER.INFO,
      CONSTANT.LOGGER.LOGIN_API_START + JSON.stringify(requestBody)
    );

    const user = await User.authUser(requestBody);
    const tokens = authService.getJwt(user);
    user.accessToken = tokens[0];
    user.refreshToken = tokens[1];
    const data = common.userAuth(user);
    const userObject = await User.setDetails(data);
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
      CONSTANT.LOGGER.LOGIN_API_END + CONSTANT.MESSAGE.UNAUTHORIZED
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

