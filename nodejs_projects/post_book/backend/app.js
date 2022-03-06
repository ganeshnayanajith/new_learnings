const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');

const connectDB = require('./lib/db/db');
const authentication = require('./modules/authentication/middlewares/auth.middleware');

const indexRouter = require('./routes/index');
const authRouter = require('./modules/authentication/routes/auth.routes');
const postRouter = require('./modules/post/routes/post.routes');

const app = express();

dotenv.config();
connectDB();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Authenticate all requests
app.use(async (req, res, next) => {
  await authentication.authRequest(req, res, next);
});
app.use('/', indexRouter);
app.use('/v1/authenticate', authRouter);
app.use('/v1/post', postRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
