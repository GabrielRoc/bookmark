var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var livrosRouter = require('./routes/livros');
var generosRouter = require('./routes/generos');
var autoresRouter = require('./routes/autores');
var estantesRouter = require('./routes/estantes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/livros', livrosRouter);
app.use('/generos', generosRouter);
app.use('/autores', autoresRouter);
app.use('/estantes', estantesRouter);

module.exports = app;
