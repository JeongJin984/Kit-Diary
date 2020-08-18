var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()

var passport = require('passport')

var indexRouter = require('./routes/index');
var apiUserRouter = require('./routes/user');

var session = require('express-session')
var FileStore = require('session-file-store')(session)

const models = require('./models');
models.sequelize.sync();

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  store: new FileStore()
}))

app.use(passport.initialize())
app.use(passport.session())
const passportConfig = require('./passport')
passportConfig()

app.use('/', indexRouter);
app.use('/api/user', apiUserRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(4000,function(){
  console.log('i\'m listening on 4000')
})


module.exports = app;
