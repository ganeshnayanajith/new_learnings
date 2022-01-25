'use strict';

const Product = require('../../../models/product.model');

exports.create = async (data) => {
  return await Product.create(data);
};