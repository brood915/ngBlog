const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.login = (req, res) => {
  passport.authenticate('local', function (err, user, info) {
    if (err) {
        res.json(err);
    }
    else if (user) {
      const token = user.generateJWT();
      res.json({"token": token});
    }
    else {
      res.json(info);
    }
  })(req,res);
}