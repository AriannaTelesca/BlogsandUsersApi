let Users = require("../models/model");


const postUser = (req, res) => {
    
    const id = req.body.id;
    const user = req.body.user;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPwd = req.body.confirmPwd;
    const postBlog = req.body.postBlog;

    const newUsers = new Users ({
        id,
        user,
        email,
        password,
        confirmPwd,
        postBlog
    });

    newUsers.save()
    .then(() => res.json('User added'))
    .catch(err => res.status(400).json('Error' +err))
};

const getAllUser = (req, res) => {
    Users.find()
    .then(result => res.json(result))
    .catch(err => res.status(400).json('Error'+err))
};

const getUser = (req, res) => {
    Users.find({user : req.params.user})
    .then((result) => res.json(result))
    .catch(err => res.status(400).json('Error'+err))
};

module.exports = {
    getAllUser,
    postUser,
    getUser
}