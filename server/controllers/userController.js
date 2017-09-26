const mongoose = require('mongoose');
const User = mongoose.model('User');
const promisify = require('es6-promisify');

exports.validateRegister = (req, res, next) => {
    req.sanitizeBody('name');
    req.checkBody('name', "You must supply a name!").notEmpty();
    req.checkBody('email', 'That email is not valid!').isEmail();
    req.sanitizeBody('email').normalizeEmail({
        remove_dots: false,
        remove_extension: false,
        gmail_remove_subaddress: false
    });
    req.checkBody('password', 'Password cannot be blank!').notEmpty();
    req.checkBody('passwordConfirm', 'Confirmed password cannot be blank!').notEmpty();
    req.checkBody('passwordConfirm', 'Oops! Your passwords do not match!').equals(req.body.password);

    const errors = req.validationErrors();
    if(errors) {
        errors.map((each)=>{
            res.json(each);
        });
        return;
    }
    next();
}

exports.register = async (req, res) => {
    const user = new User({
        email: req.body.email,
        name: req.body.name
    });
    
    const register = promisify(User.register, User);
    await register(user, req.body.password, function(err){
        if (err) {
            res.json(err); // to send error msg if email already exists
        }
        else {
            const token = user.generateJWT();
            
                res.status(200);
                res.json({token: token});
                console.log('user registered!!');
        }     
    });
}

exports.changePassword = async (req, res) => {
    const user = await User.findOne({ email: req.payload.email });
    const changePassword = promisify(user.changePassword, user);
    await changePassword(req.body.oldPass, req.body.newPass);
}
