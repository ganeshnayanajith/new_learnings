'use strict';

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      maxlength: [40],
      sparse: true,
      default: null,
    },
    password: {
      type: String,
      default: null,
      trim: true,
      required: false,
    },
    accessToken: {
      type: String,
      default: null,
    }
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  }
);

userSchema.plugin(mongoosePaginate);
userSchema.set('autoIndex', true);

module.exports = mongoose.model('User', userSchema);
