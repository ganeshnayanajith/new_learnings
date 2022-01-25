'use strict';

const CONSTANT = require("../../../lib/constants/constant.json");
const User = require("../../../models/user");
const isEmpty = require('is-empty');
const bcrypt = require('bcrypt');

exports.authUser = async (body) => {
  return new Promise((resolve, reject) => {
    User.findOne({ email: body.email })
      .exec((err, data) => {
        if (err || isEmpty(data)) {
          reject(CONSTANT.MESSAGE.INVALID_USER);
        } else {
          bcrypt.compare(body.password, data.password, (err, doesMatch) => {
            if (doesMatch) {
              resolve(data);
            } else {
              reject(CONSTANT.MESSAGE.INVALID_USER);
            }
          });
        }
      });
  });
};


exports.createUser = async (body, tokens) => {

  const user = await User.findOne({
    email: body.email
  });
  if (user) {
    return Promise.reject(new Error(CONSTANT.MESSAGE.EMAIL_ALREADY_USE));
  }

  return new Promise((resolve, reject) => {
    bcrypt.hash(body.password, 5, (err, hashedPassword) => {
      if (err) {
        reject(err);
      } else {
        resolve(
          User.create({
            email: body.email,
            password: hashedPassword,
            accessToken: tokens[0]
          })
        );
      }
    });
  });
};

exports.setDetails = async (details) => {
  return new Promise((resolve, reject) => {
    if (details.email !== undefined || !isEmpty(details.email)) {
      User.findOne({ email: details.email })
        .exec((err, data) => {
          if (err || isEmpty(data)) {
            reject(CONSTANT.MESSAGE.INVALID_EMAIL);
          } else {
            const body = {
              accessToken: details.accessToken
            };
            User.findOneAndUpdate({ email: details.email }, body, {
              new: true,
            })
              .exec((err, createdObject) => {
                if (err) {
                  reject(CONSTANT.MESSAGE.INVALID_EMAIL);
                } else {
                  resolve(createdObject);
                }
              });
          }
        });
    } else {
      reject(CONSTANT.MESSAGE.INVALID_EMAIL);
    }
  });
};


