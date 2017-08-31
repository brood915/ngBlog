const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    description: {
        type: String,
        trim: true
    },
    title: {
        type: String,
        trim: true
    },
    date: {
        type: String,
        trim: true
    },
    name: {
        type: String,
        trim: true
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },
    views: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Post', postSchema);