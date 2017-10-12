const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema({
        name: {
            type: String,
            trim: true
        },
        date: {
            type: String,
            trim: true
        },
        dateEdited: {
            type: String,
        },
        likes: {
            type: Number,
            default: 0
        },
        dislikes: {
            type: Number,
            default: 0
        },
        text: {
            type: String,
            trim: true
        },
        replies: [{
            name: {
                type: String,
                trim: true
            },
            date: {
                type: String,
                trim: true
            },
            dateEdited: {
                type: String,
            },
            likes: {
                type: Number,
                default: 0
            },
            dislikes: {
                type: Number,
                default: 0
            },
            text: {
                type: String,
                trim: true
            }
        }]
    });

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
    dateEdited: {
        type: String,
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
    },
    comments: [commentsSchema]
});

module.exports = mongoose.model('Post', postSchema);