// req express and handlebars
var express = require("express");
var app = express();
var exphbs = require("express-handlebars");
// use routes.js 
var routes = require("./controllers/burgersController.js");
// set port
var PORT = process.env.PORT || 8080;
// req suggested middlewares
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));
// use middlewares
// app.use(express.urlencoded({
//   extended: true
// }));
app.use(bodyParser.urlencoded({
  endtended: false
}));
app.use(methodOverride('_method'));
// Parse application body as JSON
app.use(express.json());

// use handlebars.
app.engine('handlebars', exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
app.use('/', routes);

// start listening
app.listen(PORT, function () {
  // log where listening (if listening) so i know it's working (and where to look)
  console.log("Server listening on: http://localhost:" + PORT);
});