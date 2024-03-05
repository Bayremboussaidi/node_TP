// models

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId ,
    name:String,
    content : String
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;