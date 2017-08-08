const express = require('express');
const postController = require('../controllers/postController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
    secret: process.env.secret,
    requestProperty: 'payload'
});

module.exports = router;