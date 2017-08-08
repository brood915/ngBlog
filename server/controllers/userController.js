const mongoose = require('mongoose');
const User = mongoose.model('User');
const promisify = require('es6-promisify');

exports.register = async (req, res, next) => {
    const user = new User({
        email: req.body.email,
        name: req.body.name
    });
    
    const register = promisify(User.register, User);
    await register(user, req.body.password);
    
    const token = user.generateJWT()
    res.json({token: token});
    next();
}