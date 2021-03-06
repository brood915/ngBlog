const express = require('express');
const postController = require('../controllers/postController');
const commentController = require('../controllers/commentController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
    secret: process.env.SECRET,
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

    

//Blog posts
router.post('/posts/create',
    auth,
    postController.createPost);

router.put('/posts/edit/:id',
    auth,
    postController.editPost);

router.put('/posts/increaseView/:id',
    postController.increaseView);

router.delete('/posts/delete/:id',
    auth,
    postController.deletePost);  

router.get('/posts',
    postController.getPosts);

router.get('/posts/:id',
    postController.getPost);


//Blog comments/replies
router.post('/posts/:id/comments/create/',
    auth,
    commentController.createComment);

router.put('/posts/:postId/comments/:commentId/update/',
    auth,
    commentController.updateComment);

router.delete('/posts/:postId/comments/:commentId/delete/',
    auth,
    commentController.deleteComment);

module.exports = router;