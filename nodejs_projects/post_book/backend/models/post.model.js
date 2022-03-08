'use strict';

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    likes: {
      type: Number,
      default: 0,
      required: true
    },
    dislikes: {
      type: Number,
      default: 0,
      required: true
    }
  },
  {
    timestamps: true,
  });

// Create indexes for unique fields
postSchema.set('autoIndex', true);

module.exports = mongoose.model('Post', postSchema);

