const router = require('express').Router();
const {getAllUser, postUser, getUser, deleteUser, loginUser} = require('../controllers/controlUsers');
const {getAllBlog, postBlog, getBlogByUser, getBlog} = require('../controllers/controlBlog');
const {getAllComment, postComment, getComment, getCommentByUser, getCommentByBlog} = require('../controllers/controlComments');

router.post('/postUser', postUser);
router.post('/postBlog', postBlog);
router.post('/postComment', postComment);

router.get('/getAllUsers', getAllUser);
router.get('/getAllBlogs', getAllBlog);
router.get('/getAllComments', getAllComment);

router.get('/getUser/:user', getUser);

router.get('/getBlog/:title', getBlog);
router.get('/getBlogByUser/:user', getBlogByUser);

router.get('/getComment/:title', getComment);
router.get('/getCommentbyUser/:user', getCommentByUser);
router.get('/getCommentbyBlog/:blog', getCommentByBlog);

router.delete('/deleteUser/:_id', deleteUser);
router.post('/login', loginUser);

module.exports = router; 