var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var path = require('path');
app.use(express.static(path.join(__dirname, './client')));

require('./config/mongoose.js');

require('./config/routes.js')(app);

app.listen(8888, function(){
	console.log('so ready for you at 8888');
})