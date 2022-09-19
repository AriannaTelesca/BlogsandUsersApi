let Comment = require("../models/modelComment");

const postComment = (req, res) => {
    
    const id = req.body.id;
    const title = req.body.title;
    const content = req.body.content;
    const user = req.body.user;
    const blog = req.body.blog
 
    const newComment = new Comment ({
        id,
        title,
        content,
        user,
        blog
    });

    newComment.save()
    .then(() => res.json('Comment added'))
    .catch(err => res.status(400).json('Error' +err))
};

const getAllComment = (req, res) => {
    Comment.find()
    .then(result => res.json(result))
    .catch(err => res.status(400).json('Error'+err))
};

const getComment = (req, res) => {
    Comment.find({title : req.params.title})
    .then(result => res.json(result))
    .catch(err => res.status(400).json('Error'+err))
};

const getCommentByUser = (req, res) => {
    Comment.find({user : req.params.user})
    .then(result => res.json(result))
    .catch(err => res.status(400).json('Error'+err))
};

const getCommentByBlog = (req, res) => {
    Comment.find({blog : req.params.blog})
    .then(result => res.json(result))
    .catch(err => res.status(400).json('Error'+err))
};

module.exports = {
    getAllComment,
    postComment,
    getComment,
    getCommentByBlog,
    getCommentByUser
};