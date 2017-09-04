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
    userController.validateRegister,
    userController.register);

router.post('/account/password',
    auth,
    userController.changePassword);

router.post('/login',
    authController.login);

    

//BLOGS
router.post('/posts/create',
 
    postController.createPost);

router.put('/posts/edit/:id',
    auth,
    postController.editPost);

router.delete('/posts/delete/:id',
    auth,
    postController.deletePost);  

router.get('/posts',
    postController.getPosts);

router.get('/posts/:id',
    postController.getPost);

module.exports = router;