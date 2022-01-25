'use strict';
const jwt = require('jsonwebtoken');
const config = require('config');
const authRepository = require('../repositories/auth.repository');

const getJwt = (user) => {
  const data = {
    userId: user._id,
    email: user.email
  };
  let tokens = [];
  const accessToken = jwt.sign(data, config.get('accessToken'), {
    expiresIn: config.get('accessTokenExpirationTime'),
  });
  tokens.push(accessToken);
  return tokens;
};

const checkJwt = async (token) => {
  const userDetails = await authRepository.checkJwt(token);
  return !!userDetails;
};

/**
 * set login response structure
 * @param {object} userDetails
 * @returns {object}
 */
const authResponse = (userDetails) => ({
  accessToken: userDetails.accessToken,
  profile: {
    id: userDetails._id,
    email: userDetails.email
  },
});


/**
 * Export module functions to be accessed from outside
 */
module.exports = {
  getJwt,
  checkJwt,
  authResponse
};

