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


//USERS
router.post('/register', 
    // userController.validateRegister,
    userController.register);

router.post('/account/password',
    auth,
    userController.changePassword);

router.post('/login',
    authController.login);

    

//BLOGS
router.post('/posts/create',
    auth,
    postController.createPost);

router.post('/posts/edit',
    auth,
    postController.editPost);

router.post('/posts/delete',
    auth,
    postController.deletePost);  

router.get('/posts',
    postController.getPosts);

router.get('/posts/:id',
    postController.getPost);

module.exports = router;