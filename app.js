var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
var compression = require('compression');
var helmet = require('helmet');

//Moongose
var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://'+ process.env.DB_ADMIN +':'+ process.env.DB_PASS +'@cluster0-4qzuu.azure.mongodb.net/'+ process.env.DB_DATABASE + '?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



var indexRouter = require('./routes/index');
var productRouter = require('./routes/product');
var shopRouter = require('./routes/shop');

var app = express();
app.use(compression());
app.use(helmet());

// app.use(function(req,res,next) {
//   console.log(req.ip);
//   console.log(req.path);
//   next();
// });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/shop', shopRouter);
app.use('/', indexRouter);
app.use('/product', productRouter);

app.use('*', function(req,res) {
  res.render('notfound');
});

app.use(function(req,res,next) {
  next(createError(404));
});

app.use(function(err,req,res,next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
