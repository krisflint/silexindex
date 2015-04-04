// silexindex.js server controller silexindex.js server controller silexindex.js server controller
// silexindex.js server controller silexindex.js server controller silexindex.js server controller

var mongoose = require('mongoose');

var Index = mongoose.model('Index');

var User = mongoose.model('User');

var session = require('express-session');

var md5 = require('MD5');

module.exports = {

	createindex: function(req, res){
		// console.log(req)
		var index = new Index({
			firmname: req.body.firmname, 
			contact: req.body.contact,
			phone: req.body.phone,
			email: req.body.email,
			web: req.body.web,
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

	retrievecountall: function(req, res){
		console.log(req.body)
		var count = 0
		if(req.body.metroarea === 'all'){
			Index.find({}, function(err, result){
				if(err){
					console.log('db count all metro all error');
				}
				else{
					for(var i = 0; i<result.length; i++){
						console.log(result[i].industries)
							for(var j = 0; j<result[i].industries.length; j++){
								console.log(result[i].industries[j])
								if(result[i].industries[j] === req.body.industry){
								count++
								}
							}
						}
					console.log('db count all metro all capabilities none success', count);
					res.json(count)
					}
			})		
		}
		else{
			Index.find({metroarea: req.body.metroarea}, function(err, result){
				if(err){
					console.log('db count all metroarea specific error')
				}
				else{
					for(var i = 0; i<result.length; i++){
						console.log(result[i].industries)
							for(var j = 0; j<result[i].industries.length; j++){
								console.log(result[i].industries[j])
								if(result[i].industries[j] === req.body.industry){
								count++
								}
							}
						}
					console.log('db count all metro specific capabilities none success', count);
					res.json(count)
					}
			})
		}
	},

	retrievecount: function(req, res){
		// console.log(req.body.industry)
		// console.log(req.body.metroarea)
		console.log(req.body)
		var count = 0
		if(req.body.metroarea === 'all'){
			if(req.body.brand === true && req.body.design === undefined && req.body.ad === undefined &&
				req.body.av === undefined && req.body.pr === undefined && req.body.media === undefined){
				Index.find({brand: req.body.brand}, function(err, result){
					if(err){
						console.log('db count metro all brand only error');
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
					console.log('db count metro all brand only success');
					res.json(count)
					}
				})
			}
			else if(req.body.brand === undefined && req.body.design === true && req.body.ad === undefined &&
					req.body.av === undefined && req.body.pr === undefined && req.body.media === undefined){
				Index.find({design: req.body.design}, function(err, result){
					if(err){
						console.log('db count metro all design only error')
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
						console.log('db count metro all design only success', count)	
						res.json(count)
					}
				})
			}
			else if(req.body.brand === undefined && req.body.design === undefined && req.body.ad === true &&
					req.body.av === undefined && req.body.pr === undefined && req.body.media === undefined){
				Index.find({ad: req.body.ad}, function(err, result){
					if(err){
						console.log('db count metro all ad only error')
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
						console.log('db count metro all ad only success', count)	
						res.json(count)
					}
				})

			}
			else if(req.body.brand === undefined && req.body.design === undefined && req.body.ad === undefined &&
					req.body.av === true && req.body.pr === undefined && req.body.media === undefined){
				Index.find({av: req.body.av}, function(err, result){
					if(err){
						console.log('db count metro all av only error')
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
						console.log('db count metro all av only success', count)	
						res.json(count)
					}
				})
			}		
			else if(req.body.brand === undefined && req.body.design === undefined && req.body.ad === undefined &&
					req.body.av === undefined && req.body.pr === true && req.body.media === undefined){
				Index.find({pr: req.body.pr}, function(err, result){
					if(err){
						console.log('db count metro all pr only error')
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
						console.log('db count metro all pr only success', count)	
						res.json(count)
					}
				})
			}
			else if(req.body.brand === undefined && req.body.design === undefined && req.body.ad === undefined &&
					req.body.av === undefined && req.body.pr === undefined && req.body.media === true){
				Index.find({media: req.body.media}, function(err, result){
					if(err){
						console.log('db count metro all media only error')
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
						console.log('db count metro all media only success', count)	
						res.json(count)
					}
				})
			}
			else{
			Index.find({brand: req.body.brand,
						design: req.body.design,
						ad: req.body.ad,
						av: req.body.av,
						pr: req.body.pr,
						media: req.body.media

						}, function(err, result){
						if(err){
							console.log('db count all error')
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
							console.log('db count metro all capabilities all success', count)
							res.json(count)
						}
					})
				}
		}
		else{
			if(req.body.brand === true && req.body.design === undefined && req.body.ad === undefined &&
				req.body.av === undefined && req.body.pr === undefined && req.body.media === undefined){
				Index.find({metroarea: req.body.metroarea,
					 	    brand: req.body.brand}, function(err, result){
				 		if(err){
				 			console.log('db count metroarea specific brand only error')
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
					 		console.log('db count metroarea specific brand only success', count)
					 		res.json(count)
				 		}
				 	})
				}
			else if(req.body.brand === undefined && req.body.design === true && req.body.ad === undefined &&
				req.body.av === undefined && req.body.pr === undefined && req.body.media === undefined){
				Index.find({metroarea: req.body.metroarea,
					 	    design: req.body.design}, function(err, result){
				 		if(err){
				 			console.log('db count metroarea specific design only error')
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
					 		console.log('db count metroarea specific design only success', count)
					 		res.json(count)
				 		}
				 	})
				}
			else if(req.body.brand === undefined && req.body.design === undefined && req.body.ad === true &&
				req.body.av === undefined && req.body.pr === undefined && req.body.media === undefined){
				Index.find({metroarea: req.body.metroarea,
					 	    ad: req.body.ad}, function(err, result){
				 		if(err){
				 			console.log('db count metroarea specific ad only error')
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
					 		console.log('db count metroarea specific ad only success', count)
					 		res.json(count)
				 		}
				 	})
				}
			else if(req.body.brand === undefined && req.body.design === undefined && req.body.ad === true &&
				req.body.av === undefined && req.body.pr === undefined && req.body.media === undefined){
				Index.find({metroarea: req.body.metroarea,
					 	    ad: req.body.ad}, function(err, result){
				 		if(err){
				 			console.log('db count metroarea specific ad only error')
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
					 		console.log('db count metroarea specific ad only success', count)
					 		res.json(count)
				 		}
				 	})
				}
			else if(req.body.brand === undefined && req.body.design === undefined && req.body.ad === undefined &&
				req.body.av === true && req.body.pr === undefined && req.body.media === undefined){
				Index.find({metroarea: req.body.metroarea,
					 	    av: req.body.av}, function(err, result){
				 		if(err){
				 			console.log('db count metroarea specific av only error')
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
					 		console.log('db count metroarea specific av only success', count)
					 		res.json(count)
				 		}
				 	})
				}
			else if(req.body.brand === undefined && req.body.design === undefined && req.body.ad === undefined &&
				req.body.av === undefined && req.body.pr === true && req.body.media === undefined){
				Index.find({metroarea: req.body.metroarea,
					 	    pr: req.body.pr}, function(err, result){
				 		if(err){
				 			console.log('db count metroarea specific pr only error')
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
					 		console.log('db count metroarea specific pr only success', count)
					 		res.json(count)
				 		}
				 	})
				}
			else if(req.body.brand === undefined && req.body.design === undefined && req.body.ad === undefined &&
				req.body.av === undefined && req.body.pr === undefined && req.body.media === true){
				Index.find({metroarea: req.body.metroarea,
					 	    media: req.body.media}, function(err, result){
				 		if(err){
				 			console.log('db count metroarea specific media only error')
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
					 		console.log('db count metroarea specific media only success', count)
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
		}
	},

	retrieveclientsearch: function(req, res){
		console.log(req.body)

		console.log(session.authenticate)
		// if(!session.authenticate) res.redirect('/partials/login.html')

		var searchresult = []
		if(session.authenticate === true){
			if(req.body.metroarea === 'all'){
				if(req.body.brand === true && req.body.design === undefined && req.body.ad === undefined &&
					req.body.av === undefined && req.body.pr === undefined && req.body.media === undefined){
					Index.find({brand: req.body.brand}, function(err, result){
					 		if(err){
					 			console.log('db retrieveUserSearch metroarea all brand only error')
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
								console.log('db retrieveUserSearch metroarea all brand only success')
								console.log(searchresult)
								res.json(searchresult)
							}
					 	})
					}
				else if(req.body.brand === undefined && req.body.design === true && req.body.ad === undefined &&
					req.body.av === undefined && req.body.pr === undefined && req.body.media === undefined){
					Index.find({design: req.body.design}, function(err, result){
					 		if(err){
					 			console.log('db retrieveUserSearch metroarea all design only error')
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
								console.log('db retrieveUserSearch metro area all design only success')
								console.log(searchresult)
								res.json(searchresult)
							}
					 	})
					}
				else if(req.body.brand === undefined && req.body.design === undefined && req.body.ad === true &&
					req.body.av === undefined && req.body.pr === undefined && req.body.media === undefined){
					Index.find({ad: req.body.ad}, function(err, result){
					 		if(err){
					 			console.log('db retrieveUserSearch metroarea all ad only error')
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
								console.log('db retrieveUserSearch metro all ad only success')
								console.log(searchresult)
								res.json(searchresult)
							}
					 	})
					}
				else if(req.body.brand === undefined && req.body.design === undefined && req.body.ad === undefined &&
					req.body.av === true && req.body.pr === undefined && req.body.media === undefined){
					Index.find({av: req.body.av}, function(err, result){
					 		if(err){
					 			console.log('db retrieveUserSearch metroarea all av only error')
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
								console.log('db retrieveUserSearch metro all av only success')
								console.log(searchresult)
								res.json(searchresult)
							}
					 	})
					}
				else if(req.body.brand === undefined && req.body.design === undefined && req.body.ad === undefined &&
					req.body.av === undefined && req.body.pr === true && req.body.media === undefined){
					Index.find({pr: req.body.pr}, function(err, result){
					 		if(err){
					 			console.log('db retrieveUserSearch metroarea all pr only error')
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
								console.log('db retrieveUserSearch metro all pr only success')
								console.log(searchresult)
								res.json(searchresult)
							}
					 	})
					}
				else if(req.body.brand === undefined && req.body.design === undefined && req.body.ad === undefined &&
					req.body.av === undefined && req.body.pr === undefined && req.body.media === true){
					Index.find({media: req.body.media}, function(err, result){
					 		if(err){
					 			console.log('db retrieveUserSearch metroarea all media only error')
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
								console.log('db retrieveUserSearch metro all media only success')
								console.log(searchresult)
								res.json(searchresult)
							}
					 	})
					}
				else{
					Index.find({contact: req.body.contact,
								brand: req.body.brand,
								design: req.body.design,
								ad: req.body.ad,
								av: req.body.av,
								pr: req.body.pr,
								media: req.body.media}, function(err, result){
								if(err){
									console.log('db retrieveUserSearch metro all error')
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
									console.log('db retrieveUserSearch metro all success')
									console.log(searchresult)
									res.json(searchresult)
								}
							})
				}
			}
			else{
				if(req.body.brand === true && req.body.design === undefined && req.body.ad === undefined &&
					req.body.av === undefined && req.body.pr === undefined && req.body.media === undefined){
					Index.find({metroarea: req.body.metroarea,
								brand: req.body.brand}, function(err, result){
					 		if(err){
					 			console.log('db retrieveUserSearch metroarea specific brand only error')
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
								console.log('db retrieveUserSearch metroarea specific brand only success')
								console.log(searchresult)
								res.json(searchresult)
							}
					 	})
					}
				else if(req.body.brand === undefined && req.body.design === true && req.body.ad === undefined &&
					req.body.av === undefined && req.body.pr === undefined && req.body.media === undefined){
					Index.find({metroarea: req.body.metroarea,
								design: req.body.design}, function(err, result){
					 		if(err){
					 			console.log('db retrieveUserSearch metroarea specific design only error')
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
								console.log('db retrieveUserSearch metroarea specific design only success')
								console.log(searchresult)
								res.json(searchresult)
							}
					 	})
					}
				else if(req.body.brand === undefined && req.body.design === undefined && req.body.ad === true &&
					req.body.av === undefined && req.body.pr === undefined && req.body.media === undefined){
					Index.find({metroarea: req.body.metroarea,
								ad: req.body.ad}, function(err, result){
					 		if(err){
					 			console.log('db retrieveUserSearch metroarea specific ad only error')
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
								console.log('db retrieveUserSearch metroarea specific ad only success')
								console.log(searchresult)
								res.json(searchresult)
							}
					 	})
					}
				else if(req.body.brand === undefined && req.body.design === undefined && req.body.ad === undefined &&
					req.body.av === true && req.body.pr === undefined && req.body.media === undefined){
					Index.find({metroarea: req.body.metroarea,
								av: req.body.av}, function(err, result){
					 		if(err){
					 			console.log('db retrieveUserSearch metroarea specific av only error')
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
								console.log('db retrieveUserSearch metroarea specific av only success')
								console.log(searchresult)
								res.json(searchresult)
							}
					 	})
					}
				else if(req.body.brand === undefined && req.body.design === undefined && req.body.ad === undefined &&
					req.body.av === undefined && req.body.pr === true && req.body.media === undefined){
					Index.find({metroarea: req.body.metroarea,
								pr: req.body.pr}, function(err, result){
					 		if(err){
					 			console.log('db retrieveUserSearch metroarea specific pr only error')
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
								console.log('db retrieveUserSearch metroarea specific pr only success')
								console.log(searchresult)
								res.json(searchresult)
							}
					 	})
					}
				else if(req.body.brand === undefined && req.body.design === undefined && req.body.ad === undefined &&
					req.body.av === undefined && req.body.pr === undefined && req.body.media === true){
					Index.find({metroarea: req.body.metroarea,
								media: req.body.media}, function(err, result){
					 		if(err){
					 			console.log('db retrieveUserSearch metroarea specific media only error')
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
								console.log('db retrieveUserSearch metroarea specific media only success')
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
			}
		}
		else{
			var info = {error: true}
			res.json(info)
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

		console.log(session.authenticate)

		if(session.authenticate === true){ 
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
		else{
			var info = {error: true}
			res.json(info)
		}
	},

	authenticateadmin: function(req, res){

		console.log(md5(req.body.password));		

		var passwordentered = md5(req.body.password)

		var username = 'krisflint'
		var password = 'c534bf3af59e632e87a0cc9f5ea4e29d'


		if(username === req.body.username && password === passwordentered){
			session.authenticate = true
			console.log(session.authenticate)
			res.redirect('/partials/F2A712BEBB3893C6.html')
		}
		else{
			res.redirect('/partials/login.html')
		}

		console.log(req.body);
	}

}























