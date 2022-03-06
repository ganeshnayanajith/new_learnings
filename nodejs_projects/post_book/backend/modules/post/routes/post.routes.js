'use strict';

const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');
const postValidator = require('../validators/post.validator');

router.post('/', postValidator.create, postController.create);

module.exports = router;
