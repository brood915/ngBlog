const mongoose = require('mongoose');
const Post = mongoose.model('Post');

//POST
exports.createPost = async (req,res) => {
    const post = await (new Post(req.body)).save();
    console.log('posted!');
    const posts = await Post.find();
    res.json(posts);
}

/*NEED TO ADD LOGICS TO CHECK IF THE USER IS THE ORIGINAL POSTER/ADMIN */
exports.editPost = async (req,res) => {
    const post = await Post.findOneAndUpdate({_id:req.params.id}, req.body, {
        new: true, // return the new post instead of old one
        runValidators: true}).exec();
        res.redirect(`/blog/${post._id}`);
}

/*NEED TO ADD LOGICS TO CHECK IF THE USER IS THE ORIGINAL POSTER/ADMIN */
exports.deletePost = async (req,res) => {
    await Post.findByIdAndRemove(req.params.id);
    res.redirect(`/blog/${post._id}`);
}




//GET
exports.getPosts = async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
}

exports.getPost = async (req, res) => {
    const post = await Post.findOne({_id: req.params.id}); 
    res.json(post);
}