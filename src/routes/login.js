const express = require('express');
const { login } = require('../controllers/ControllerLogin.js');

const router = express.Router();

router.post('/login', login);

module.exports = LoginRoutes;