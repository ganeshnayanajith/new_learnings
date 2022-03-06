'use strict';

const postRepository = require('../repositories/post.repository');

const create = async (data) => {

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


module.exports = {
  create
};