var http = require('http');
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//TODO: use debug

// routes
var userRoute = require('./routes/user');

// inits
var app = express();

//TODO: Error Handling!
mongoose.connect('mongodb://localhost/testDb', function (err) {
  if (!err) {
    console.log("database successfully connected");
  } else {
    console.error("error: not able to connect to database");
  }
});

// middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// route handler
app.use('/user', userRoute);

// handle 404s/errors
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: 'Error Occured'
  });
});

// server configs
var server = http.createServer(app);
server.listen(3000, 'localhost', function () {
  console.log('Server Online! \n');
});