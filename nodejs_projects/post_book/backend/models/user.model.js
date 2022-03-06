'use strict';

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      sparse: true
    },
    password: {
      type: String,
      required: true,
      trim: true
    },
    accessToken: {
      type: String,
      default: null,
    }
  },
  {
    timestamps: true,
  }
);

userSchema.plugin(mongoosePaginate);
userSchema.set('autoIndex', true);

module.exports = mongoose.model('User', userSchema);
