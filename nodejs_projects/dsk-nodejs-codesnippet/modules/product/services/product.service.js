'use strict';

const ProductRepository = require('../repositories/product.repository');

const create = async (data) => {

  try {

    const product = await ProductRepository.create(data);

    const result = {
      status: true,
      product
    };

    return Promise.resolve(result);

  } catch (e) {
    return Promise.reject(e);
  }

};


module.exports = {
  create
};