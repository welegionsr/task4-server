var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/task4';
mongoose.connect(URL, ({useNewUrlParser: true}));

var indexRouter = require('./routes/index');
var siblingsRouter = require('./routes/siblings');
var choresRouter = require('./routes/chores');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/siblings', siblingsRouter);
app.use('/chores', choresRouter);

module.exports = app;
