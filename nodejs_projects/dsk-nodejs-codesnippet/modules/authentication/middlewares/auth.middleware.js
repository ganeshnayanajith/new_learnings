'use strict';

const common = require('../../../lib/utils/util');
const validate = require('../servicers/auth.service');
const CONSTANTS = require('../../../lib/constants/constant.json');

const config = require('config');
const isEmpty = require('is-empty');
const _ = require('lodash');
const urlPattern = require('url-pattern');
const jwt = require('jsonwebtoken');

/**
 * Authenticate request
 * @param {object} req - Request data
 * @param {object} res - Response data
 * @param {NextFunction} next - Next data
 */
const authRequest = async (req, res, next) => {
  let response;

  if (req.headers['x-api-key'] === config.get('api.key') && req.headers['x-api-secret'] === config.get('api.secret')) {
    if (isGuestAction(req.path, req.method)) {
      // No need to check access token for guest actions
      next();
    } else {
      if (!isEmpty(req.headers['authorization'])) {
        let authHeader = req.headers['authorization'];
        authHeader = authHeader.replace('Bearer', '');
        authHeader = authHeader.trim();

        // check user logout or not
        if (!(await validate.checkJwt(authHeader))) {
          response = common.commonResponse(
            CONSTANTS.RESPONSE_SUCCESS.FALSE,
            null,
            CONSTANTS.MESSAGE.INVALID_AUTHORIZATION_TOKEN
          );
          res
            .status(CONSTANTS.HTTP_RESPONSE.HTTP_FORBIDDEN)
            .json(response);
        }
        const tokenInfo = validate.validateJwt(authHeader);
        if (!isEmpty(tokenInfo)) {
          req.user = tokenInfo;

          jwt.verify(authHeader, config.get('accessToken'), (err, user) => {
            if (err) {
              response = common.commonResponse(
                CONSTANTS.RESPONSE_SUCCESS.FALSE,
                null,
                CONSTANTS.MESSAGE.INVALID_AUTHORIZATION_TOKEN
              );
              res
                .status(CONSTANTS.HTTP_RESPONSE.HTTP_FORBIDDEN)
                .json(response);
            } else {
              next();
            }
          });
        } else {
          response = common.commonResponse(
            CONSTANTS.RESPONSE_SUCCESS.FALSE,
            null,
            CONSTANTS.MESSAGE.INVALID_AUTHORIZATION_TOKEN
          );
          res
            .status(CONSTANTS.HTTP_RESPONSE.HTTP_FORBIDDEN)
            .json(response);
        }
      } else {
        response = common.commonResponse(
          CONSTANTS.RESPONSE_SUCCESS.FALSE,
          null,
          CONSTANTS.MESSAGE.AUTHORIZATION_TOKEN_IS_REQUIRED
        );
        res
          .status(CONSTANTS.HTTP_RESPONSE.HTTP_FORBIDDEN)
          .json(response);
      }
    }
  } else {
    response = common.commonResponse(
      CONSTANTS.RESPONSE_SUCCESS.FALSE,
      null,
      CONSTANTS.MESSAGE.API_ACCESS_KEYS_ARE_REQUIRED
    );
    res
      .status(CONSTANTS.HTTP_RESPONSE.HTTP_FORBIDDEN)
      .json(response);
  }
};

/**
 * Check whether current request is a guest action request
 * @param {string} url - Request url
 * @param {string} method - Request method. Ex:POST, GET
 * @return {boolean}
 */
const isGuestAction = (url, method) => {
  const isGuestAction = false;
  const guestActions = config.get('api.guestActions');
  for (let i = 0; i < guestActions.length; i++) {
    let pattern = new urlPattern(guestActions[i].url);
    let matchRes = pattern.match(url);

    if (method === guestActions[i].method && matchRes) {
      if (!isEmpty(matchRes.id) && !isEmpty(guestActions[i].ignore)) {
        return _.indexOf(guestActions[i].ignore, matchRes.id) <= -1;
      } else {
        return true;
      }
    }
  }
  return isGuestAction;
};

/**
 * Export module functions to be accessed from outside
 */
module.exports = {
  authRequest,
};
