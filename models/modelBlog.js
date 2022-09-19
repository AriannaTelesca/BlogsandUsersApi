require('dotenv').config();
const mongoose = require("mongoose");
const mongoDB = process.env.DBurl;

const quoteDB = mongoose.createConnection(mongoDB);

const Blog = quoteDB.model(
    'Blog',
    new mongoose.Schema({
    id : {
        type : Number,
        unique: true,
        required: true
    },
    title : {
        type : String
    },
    content : {
        type : String
    },
    picture : {
        id : Number,
        url : String
    },
    user : {
        type : mongoose.Schema.Types.ObjectId, ref : 'users'
    }
}, {collection: 'blog'})
);

module.exports = Blog;