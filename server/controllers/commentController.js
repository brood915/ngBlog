const mongoose = require('mongoose');
const Post = mongoose.model('Post');

exports.createComment = async (req,res) => {
    const post = await Post.findOneAndUpdate({ _id:req.params.id }, 
        {
            "$push": {
            comments: req.body
            }
        }, 
        {
        new: true, // return the new post instead of old one
        runValidators: true}).exec();
    res.json(post.comments);
}


exports.updateComment = async (req,res) => {
    const post = await Post.findOneAndUpdate({ _id:req.params.postId, "comments._id": req.params.commentId }, 
        { "comments.$": req.body }, 
        { new: true, // return the new post instead of old one
        runValidators: true }).exec();
        console.log(post.comments)
    res.json(post.comments);
}
