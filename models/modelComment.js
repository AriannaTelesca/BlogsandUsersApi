require('dotenv').config();
const mongoose = require("mongoose");
const mongoDB = process.env.DATABASE_URL;

const quoteDB = mongoose.createConnection(mongoDB);

const Comment = quoteDB.model(
    'Comment',
    new mongoose.Schema({
    id : {
        type : Number
    },
    title : {
        type : String
    },
    content : {
        type : String
    },
    blog : {
        type : mongoose.Schema.Types.ObjectId, ref : 'blog'
    },
    user : {
        type : mongoose.Schema.Types.ObjectId, ref : 'users'
    }

}, {collection: 'comments'})
);

module.exports = Comment;