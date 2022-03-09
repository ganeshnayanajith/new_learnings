'use strict';

const mongoose = require('mongoose');
const Post = require('../../../models/post.model');

exports.create = async (data) => {
  return await Post.create(data);
};

exports.findAll = async (createdBy) => {
  return Post.find({ createdBy: mongoose.Types.ObjectId(createdBy) }).sort({ createdAt: -1 });
};

exports.delete = async (postId) => {
  return Post.findByIdAndDelete(postId);
};