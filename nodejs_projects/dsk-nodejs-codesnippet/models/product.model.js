'use strict';

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true,
  });

// Create indexes for unique fields
productSchema.set('autoIndex', true);

module.exports = mongoose.model('Product', productSchema);

