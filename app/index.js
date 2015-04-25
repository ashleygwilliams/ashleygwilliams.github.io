const fs = require('fs');
const path = require('path');

const bodyParser = require('body-parser');
const routeBuilder = require('express-routebuilder');
const express = require('express');

const modulePath = path.join(__dirname, 'modules');
const resources = fs.readdirSync(modulePath);

const app = express();

const API = require('./classes/api');

const cors = require('express-cors');
 
app.use(cors({
    allowedOrigins: [
        'localhost:8000', 'ashleygwilliams.github.io'
    ]
}));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({
  type: ['application/json', 'application/vnd.api+json']
}));

app.use(express.static('public'));

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

resources.forEach(function (resource) {
  API.register(resource);
  app.use(API.endpoint(resource));
});

app.get('/', function (request, response) {
  response.set('Content-Type', 'application/json');
  response.send(JSON.stringify(API.index(), null, 2));
});

app.get('/ashleygwilliams', function(request, response) {
  response.redirect('/users/1?include=presentations,projects,writing,community');
});

app.get('/test', function(request, response) {
  response.render('dynamic_index');
});

module.exports = app;
