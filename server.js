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
app.use(express.static("public"));
// use middlewares
app.use(express.urlencoded({
  extended: true
}));
app.use(methodOverride('_method'));
// Parse application body as JSON
app.use(express.json());

app.use(bodyParser.urlencoded({
  endtended: false
}));



// Set Handlebars.

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});