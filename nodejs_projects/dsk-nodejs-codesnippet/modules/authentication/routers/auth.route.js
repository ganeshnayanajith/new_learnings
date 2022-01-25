'use strict';

const express = require('express');
const router = express.Router();
const userController = require('../controllers/auth.controller');
const validator = require('../../../lib/validators/user.validator');

/* POST user signup */
router.post('/signup', validator.signUp, userController.signUp);

/* POST user authentication. */
router.post('/login', validator.login, userController.authenticate);

module.exports = router;

