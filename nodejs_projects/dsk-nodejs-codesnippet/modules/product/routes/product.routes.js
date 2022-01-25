'use strict';

const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const productValidator = require('../validators/product.validator');

router.post('/', productValidator.create, productController.create);

module.exports = router;
