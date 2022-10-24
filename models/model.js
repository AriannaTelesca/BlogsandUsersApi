require('dotenv').config();
const mongoose = require("mongoose");
const mongoDB = process.env.DATABASE_URL;

const quoteDB = mongoose.createConnection(mongoDB);

const Users = quoteDB.model(
    'Users',
    new mongoose.Schema({
    id : {
        type : Number,
    },
    user : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String
    },
    confirmPwd : {
        type : String
    },
    postBlog : {
        type : String
    }
}, {collection: 'users'})
);

module.exports = Users;