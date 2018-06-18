//EXPRESS
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: "25mb"}));
var port = 3000;

//ROUTES
var router = require('./server/routes');
new router().setupRouters(app);

//SETUP LISTENER
app.listen(port);
console.log("App listening on port " + port);