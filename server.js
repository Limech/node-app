

var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV  || 'development';

var app = express();

var config = require('./server/config/config')[env];

require('./server/config/express')(app, config);

require('./server/config/routes')(app);

var Datastore = require('nedb');

var db = {};
db.injects = new Datastore({ filename: 'injects.nedb', autoload: true });

require('./server/injectsServer/injectsServer')(db);



var port = 3030;

app.listen(port);

console.log('Listening on port ' + port + '...');
