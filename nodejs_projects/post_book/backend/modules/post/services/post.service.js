'use strict';

const postRepository = require('../repositories/post.repository');

exports.create = async (data) => {

  try {

    const post = await postRepository.create(data);

    const result = {
      status: true,
      post
    };

    return Promise.resolve(result);

  } catch (e) {
    return Promise.reject(e);
  }

};

exports.getAll = async (userId) => {

  try {

    const posts = await postRepository.findAll(userId);

    const result = {
      status: true,
      posts
    };

    return Promise.resolve(result);

  } catch (e) {
    return Promise.reject(e);
  }

};

exports.delete = async (postId) => {

  try {

    const post = await postRepository.delete(postId);

    const result = {
      status: true,
      post
    };

    return Promise.resolve(result);

  } catch (e) {
    return Promise.reject(e);
  }

};