const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');
const promisify = require('es6-promisify');
const md5 = require('md5');
const validator = require('validator');
const mongodbErrorHandler = require('mongoose-mongodb-errors');
const passportLocalMongoose = require('passport-local-mongoose');
//passport-local must be installed as well but doesnt need to be required directly

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        validate: [validator.isEmail, 'Invalid Email Address'],
        required: "Please supply an email address"
    },
    name: {
        type: String,
        required: 'Please supply a name',
        trim: true
    },

    admin: {
        type: Boolean,
        default: false
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date
});

userSchema.virtual('gravatar').get(function() {
    const hash = md5(this.email);
    return `https://gravatar.com/avatar/${hash}?s=200`
});

userSchema.methods.generateJWT = function() {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    return jwt.sign({
        _id: this._id,
        email: this.email,
        name: this.name,
        admin: this.admin,
        exp: parseInt(expiry.getTime()/1000),
        pic: this.gravatar
    }, process.env.SECRET)
}

userSchema.plugin(passportLocalMongoose, {usernameField: "email"});
userSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('User', userSchema);