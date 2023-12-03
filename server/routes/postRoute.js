const express = require('express');
const {createPost, getAllDesc, getAPost, getAllPostsByUser, deleteUserPost} = require('../controllers/postsController');
const router = express.Router();
const auth = require('../middleware/auth')


// create post -- C

router.get('/all',getAllDesc);
router.get('/all/:postId',getAPost);
router.post('/posts',auth,createPost);
router.get('/user/:userId',auth,getAllPostsByUser);
router.delete('/post/:postId',auth,deleteUserPost)

module.exports = router