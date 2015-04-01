// silexindex.js server controller silexindex.js server controller silexindex.js server controller
// silexindex.js server controller silexindex.js server controller silexindex.js server controller

var mongoose = require('mongoose');

var Index = mongoose.model('Index');

var User = mongoose.model('User');

module.exports = {

	createindex: function(req, res){
		// console.log(req)
		var index = new Index({
			firmname: req.body.firmname, 
			contact: req.body.contact,
			phone: req.body.phone,
			email: req.body.email,
			street: req.body.street,
			city: req.body.city,
			state: req.body.state,
			zip: req.body.zip,
			metroarea: req.body.metroarea,
			industries: req.body.industries,
			brand: req.body.brand,
			design: req.body.design,
			ad: req.body.ad,
			av: req.body.av,
			pr: req.body.pr,
			media: req.body.media})
		index.save(function(err, result){
			if(err){
				console.log('db create index error');
			}
			else{
				console.log('db create index success');
				res.json(result)
			}
		})
	},

	// retrievecount: function(req, res){
	// 	console.log(req)

	// 	Index.count({metroarea: req.body.metroarea,
	// 				 brand: req.body.brand,
	// 				 design: req.body.design,
	// 				 ad: req.body.ad,
	// 				 av: req.body.av,
	// 				 pr: req.body.pr,
	// 				 media: req.body.media},function(err, count){
	// 		if(err){
	// 			console.log('db retrievecount error')
	// 		}
	// 		else{
	// 			console.log('db retrievecount success')
	// 			res.json(count)
	// 		}
	// 	})
	// },

	retrievecount: function(req, res){
		// console.log(req.body.industry)
		// console.log(req.body.metroarea)
		var count = 0
		if(req.body.metroarea === 'all'){
			Index.find({brand: req.body.brand,
						design: req.body.design,
						ad: req.body.ad,
						av: req.body.av,
						pr: req.body.pr,
						media: req.body.media}, function(err, result){
						if(err){
							console.log('db count all error')
						}
						else{
							// console.log(result)
							for(var i = 0; i<result.length; i++){
								console.log(result[i].industries)
								for(var j = 0; j<result[i].industries.length; j++){
									console.log(result[i].industries[j])
									if(result[i].industries[j] === req.body.industry){
										count++
									}
								}
							}
							console.log('db count all success')
							res.json(count)
						}
					})
		}
		else{
			Index.find({metroarea: req.body.metroarea,
					 	brand: req.body.brand,
					 	design: req.body.design,
					 	ad: req.body.ad,
					 	av: req.body.av,
					 	pr: req.body.pr,
					 	media: req.body.media}, function(err, result){
				 		if(err){
				 			console.log('db count metroarea error')
				 		}
				 		else{
				 			console.log(result)
				 			for(var i = 0; i<result.length; i++){
				 				console.log(result[i].industries)
				 				for(var j = 0; j<result[i].industries.length; j++){
				 					console.log(result[i].industries[j])
				 					if(result[i].industries[j] === req.body.industry){
				 						count++
				 					}
				 				}
				 			}
					 		console.log('db count metroarea success', count)
					 		res.json(count)
				 		}
				 	})
		}
	},

	retrieveclientsearch: function(req, res){
		// console.log(req)

		var searchresult = []

		if(req.body.metroarea === 'all'){
			Index.find({brand: req.body.brand,
						design: req.body.design,
						ad: req.body.ad,
						av: req.body.av,
						pr: req.body.pr,
						media: req.body.media}, function(err, result){
						if(err){
							console.log('db retrieveUserSearch all error')
						}
						else{
							console.log(result)
							for(var i = 0; i<result.length; i++){
								console.log(result[i].industries)
								for(var j = 0; j<result[i].industries.length; j++){
									console.log(result[i].industries[j])
									if(result[i].industries[j] === req.body.industry){
										searchresult.push(result[i]);
									}
								}
							}
							console.log('db retrieveUserSearch all success')
							console.log(searchresult)
							res.json(searchresult)
						}
					})
		}
		else{
			Index.find({metroarea: req.body.metroarea,
					 	brand: req.body.brand,
					 	design: req.body.design,
					 	ad: req.body.ad,
					 	av: req.body.av,
					 	pr: req.body.pr,
					 	media: req.body.media}, function(err, result){
				 		if(err){
				 			console.log('db retrieveclientsearch metroarea error')
				 		}
				 		else{
				 			console.log(result)
				 			for(var i = 0; i<result.length; i++){
				 				console.log(result[i].industries)
				 				for(var j = 0; j<result[i].industries.length; j++){
				 					console.log(result[i].industries[j])
				 					if(result[i].industries[j] === req.body.industry){
				 						searchresult.push(result[i]);
				 					}
				 				}
				 			}
					 		console.log('db retrieveclientsearch metroarea success')
					 		res.json(searchresult)
				 		}
				 	})
		}

	},

	createuser: function(req, res){
		// console.log(req)
		var user = new User({
			name: req.body.name,
			company: req.body.company,
			phone: req.body.phone,
			email: req.body.email,
			web: req.body.web,
			searchindustry: req.body.searchindustry,
			searchmetroarea: req.body.searchmetroarea,
			searchbrand: req.body.searchbrand,
			searchdesign: req.body.searchdesign,
			searchad: req.body.searchad,
			searchpr: req.body.searchpr,
			searchav: req.body.searchav,
			searchmedia: req.body.searchmedia,
			searchcount: req.body.searchcount})
		// console.log(user)
		user.save(function(err, result){
			if(err){
				console.log('db create user error')
			}
			else{
				console.log('db create user success')
				res.json(result)
			}
		})
	},

	retrieveusers: function(req, res){
		User.find({}, function(err, result){
			if(err){
				console.log('db retrieve all users error')
			}
			else{
				console.log('db retrieve all users success')
				res.json(result)
			}
		})
	}

}























