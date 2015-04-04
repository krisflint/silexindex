var silexindex = require('./../server/controllers/silexindex.js')

module.exports = function(app){


	app.get('/retrieveusers', function(req, res){
		silexindex.retrieveusers(req, res)
	})
	
	app.post('/createindex', function(req, res){
		silexindex.createindex(req, res);
	})

	app.post('/retrievecount', function(req, res){
		silexindex.retrievecount(req, res);
	})

	app.post('/createuser', function(req, res){
		silexindex.createuser(req, res)
	})

	app.post('/retrieveclientsearch', function(req, res){
		silexindex.retrieveclientsearch(req, res)
	})

	app.post('/retrievecountall', function(req, res){
		silexindex.retrievecountall(req, res)
	})

	app.post('/partials/authenticate', function(req, res){
		silexindex.authenticateadmin(req, res)
	})



}