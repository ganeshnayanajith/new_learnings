'use strict';

const Post = require('../../../models/post.model');

exports.create = async (data) => {
  return await Post.create(data);
};