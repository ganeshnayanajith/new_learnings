'use strict';

/**
 * Prepare static response JSON
 * @param {boolean} success - True or False
 * @param {object} data - Any other date to be sent. Ex:view record data
 * @param {string} message - Optional message to be sent
 * @param {object} error - Error object
 * @returns {object}
 */
const commonResponse = (success, data = '', message = '', error = '') => ({
  'success': success,
  'data': data,
  'message': message,
  'error': error
});

/**
 * Remove attributes those not be sent with response. ex:_id, __v
 * @param {object} object - JSON object
 * @param {array} attributes - Attributes to be removed
 * @returns {object}
 */
const removeAttributes = (object, attributes) => {

  const objectRes = {};
  for (const key in object.toJSON()) {
    if (attributes.indexOf(key) === -1) {
      objectRes[key] = object[key];
    }
  }

  return objectRes;
};

/**
 * Prepare response JSON object for user when authentication. Just include permissions
 * @param {object} user - JSON object
 * @returns {object}
 */
const userAuth = user => {
  const msg = removeAttributes(user, ['_id', 'password', '__v', 'accessToken']);
  msg.id = user._id;
  return msg;
};

/**
 * Export module functions to be accessed from outside
 */
module.exports = {
  commonResponse,
  userAuth
};