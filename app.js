var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Importo estos archivos y los guardo en una variable
var indexRouter = require('./routes/index');
const profileRouter = require('./routes/profile');
const productRouter = require('./routes/product'); // Requiero product. El archivo que voy a querer usar
//var profileRouter = require('./routes/profile');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Definiendo cuando los voy a querer usar
app.use('/', indexRouter); // Cuando aparezca una / entra a index y también quiero utilizar indexRouter
app.use('/profile', profileRouter); // Cuando aparezca /profile entra a profile
app.use('/product', productRouter); // Cuando aparezca /product entra a product
//app.use('/profile', profileRouter);

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

module.exports = app;
