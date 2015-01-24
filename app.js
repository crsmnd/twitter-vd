// Include libraries
var express = require('express'); // Web server
var morgan = require('morgan');   // Middleware

// Initiate server instance
var app = express();

// Connect Morgan Middleware to server
app.use(morgan('dev'));

// Simple route
app.get('/tweet', function(req, res) {
	res.send('Hello World!');
});


// Make server listen at specific port
var port = 1234;
var server = app.listen(port);