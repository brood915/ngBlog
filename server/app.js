const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const promisify = require('es6-promisify');
const expressValidator = require('express-validator');
const routes = require('./routes/index');
const passport = require('passport');
require('./config/passport');

const app = express();

app.use(express.static(path.join(__dirname, '/../dist')));

const ignoredPaths = ['/api'];

app.all('/*', function(req, res, next) {

function startsWith(string, array) {
    for(i = 0; i < array.length; i++)
        if(string.startsWith(array[i]))
        return true;
    return false;
    }
  //Redirecting to index only the requests that do not start with ignored paths
  if(!startsWith(req.url, ignoredPaths)){
            res.sendFile(path.join(__dirname, '/../dist/', 'index.html'));
        }

  else {
    next();
    }
});

app.use(passport.initialize());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(expressValidator());

app.use("/api", routes);

module.exports = app;