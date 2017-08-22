const mongoose = require('mongoose');

require('dotenv').config({ path: 'variables.env' });

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`${err.message}`);
});
mongoose.connection.once('open', () => {
  console.log('Connected to mongoDB!');
});

require('../models/User');
require('../models/Post');

const app = require('../app');

app.set('port', process.env.PORT || 1337);

const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});