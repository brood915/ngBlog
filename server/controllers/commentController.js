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
        console.log('comment added')
    res.json(post.comments);
}


exports.updateComment = async (req,res) => {
    const post = await Post.findOneAndUpdate({ _id:req.params.postId, "comments._id": req.params.commentId }, 
        { "comments.$": req.body }, 
        { new: true, // return the new post instead of old one
        runValidators: true }).exec();
        console.log("comment updated");
    res.json(post.comments);
}

exports.deleteComment = async (req,res) => {
    const post = await Post.findOneAndUpdate({ _id:req.params.postId}, 
        { $pull: { comments: { _id: req.params.commentId } }  }, 
        { new: true, // return the new post instead of old one
        runValidators: true }).exec();
        console.log("comment removed");
    res.json(post.comments);
}
