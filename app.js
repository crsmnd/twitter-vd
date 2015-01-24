// Include libraries
var express = require('express'); 	// Web server
var morgan = require('morgan');   	// Middleware
var swig = require('swig'); 		// Html templating
var routes = require('./routes/'); 	// Reference index.js in routes folder	


// Initiate server instance
var app = express();

// Connect Morgan Middleware to server
app.use(morgan('dev'));


// Include Swig as html rendering machine
// WHY do we need to set app engine when we didn't have to do this with EJS?
app.engine('html', swig.renderFile); 
app.set('view engine', 'html');
app.set('views', './views'); 
swig.setDefaults({ cache: false });

// Answer client requests by running with routes/index.js
app.use('/', routes);

// Create route to static 'public' folder
app.use(express.static('public'));

// Make server listen at specific port
var port = 1234;
var server = app.listen(port);
