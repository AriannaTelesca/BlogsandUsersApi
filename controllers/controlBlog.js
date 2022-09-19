let Blog = require("../models/modelBlog");

const postBlog = (req, res) => {
    
    const id = req.body.id;
    const title = req.body.title;
    const content = req.body.content;
    const picture = req.body.picture;
    const user = req.body.user;
    const comment = req.body.comment;

    const newBlog = new Blog ({
        id,
        title,
        content,
        picture,
        user,
        comment
    });

    newBlog.save()
    .then(() => res.json('Blog added'))
    .catch(err => res.status(400).json('Error' +err))
};

const getAllBlog = (req, res) => {
    Blog.find()
    .then(result => res.json(result))
    .catch(err => res.status(400).json('Error'+err))
};

const getBlog = (req,res) => {
    Blog.find({title : req.params.title})
    .then(result => res.json(result))
    .catch(err => res.status(400).json('Error'+err))
};

const getBlogByUser = (req, res) => {
    Blog.find({user: req.params.user})
    .then(result => res.json(result))
    .catch(err => res.status(400).json('Error'+err))
};

module.exports = {
    getAllBlog,
    postBlog,
    getBlog,
    getBlogByUser
};