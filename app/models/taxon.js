var mongoose = require('mongoose')
	, Schema = mongoose.Schema


var TaxonSchema= Schema({
	id:Number,
	species: String,
	genus: String,
	family: String,
	description: String,
	edibility:String,
	common_name:String,
	grp:String
});

var Taxon=mongoose.model('Taxon',TaxonSchema);

