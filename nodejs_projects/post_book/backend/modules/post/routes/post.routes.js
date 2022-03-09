'use strict';

const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');
const postValidator = require('../validators/post.validator');

router.post('/', postValidator.create, postController.create);
router.get('/', postController.getAll);
router.delete('/:id', postController.delete);

module.exports = router;
