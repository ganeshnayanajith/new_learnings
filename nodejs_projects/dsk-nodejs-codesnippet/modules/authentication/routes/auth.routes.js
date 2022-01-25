'use strict';

const express = require('express');
const router = express.Router();
const userController = require('../controllers/auth.controller');
const userValidator = require('../validators/user.validator');

/* POST user signup */
router.post('/signup', userValidator.signUp, userController.signUp);

/* POST user authentication. */
router.post('/login', userValidator.login, userController.login);

module.exports = router;

