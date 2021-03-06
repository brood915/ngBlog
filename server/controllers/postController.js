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
        console.log('edited!');
        res.json(post);
}

exports.increaseView = async (req,res) => {
    const post = await Post.findOneAndUpdate({_id:req.params.id}, req.body, {
        new: true, // return the new post instead of old one
        runValidators: true}).exec();
        console.log('view increased!');
        res.json(post);
}

/*NEED TO ADD LOGICS TO CHECK IF THE USER IS THE ORIGINAL POSTER/ADMIN */
exports.deletePost = async (req,res) => {
    await Post.findByIdAndRemove({_id: req.params.id});
    console.log('deleted!')
    const posts = await Post.find();
    res.json(posts);
}




//GET
exports.getPosts = async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
}

exports.getPost = async (req, res) => {
    try {
        const post = await Post.findOne({_id: req.params.id}); 
        if (post) {
            res.json(post);
        }
        else { // if query returns null
            res.json({msg: "Post with that ID does not exist!"});
        }
    }
    catch(e) {
        res.json({msg: "Post with that ID does not exist!"});
    } 
}