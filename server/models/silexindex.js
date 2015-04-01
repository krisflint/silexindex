// silexindex.js server model silexindex.js server model silexindex.js server model 
// silexindex.js server model silexindex.js server model silexindex.js server model 

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var indexSchema = new mongoose.Schema({

	firmname: String,
	contact: String,
	phone: String,
	email: String,
	web: String,
	street: String,
	city: String,
	state: String,
	zip: String,
	metroarea: String,
	industries: Array,
	brand: Boolean,
	design: Boolean,
	ad: Boolean,
	pr: Boolean,
	av: Boolean,
	media: Boolean
});
mongoose.model('Index', indexSchema);


var userSchema = new mongoose.Schema({

	name: String,
	company: String,
	email: String,
	phone: String,
	searchindustry: String,
	searchmetroarea: String,
	searchbrand: Boolean,
	searchdesign: Boolean,
	searchad: Boolean,
	searchpr: Boolean,
	searchav: Boolean,
	searchmedia: Boolean,
	searchcount: Number,
	created_at: Date
});
mongoose.model('User', userSchema);

userSchema.pre('save', function(next){
	now = new Date();
	if (!this.created_at){
		this.created_at = now
	}
	next()
});




























