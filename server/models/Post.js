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
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', postSchema);