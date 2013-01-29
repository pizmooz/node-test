var mongoose = require('mongoose')
  , Imager = require('imager')
  , Taxon = mongoose.model('Taxon')
  , Picture = mongoose.model('Picture')
  , _ = require('underscore')

console.log("taxon loaded\n")

exports.show = function(req,res){
  var taxon = req.taxon
    , pictures = req.pictures

	res.render('taxon/show' , {
		taxon: taxon,
		pictures: pictures
	})
}

exports.index = function(req,res){
  Taxon
    .find()
    .exec(function(err, taxons) {
      res.json(taxons);
    })
}

exports.search = function(req,res) {
	console.log(req.param('taxon_query'))
	var query_json_s= JSON.parse(decodeURIComponent(req.param('taxon_query')))
	
	Taxon
		.find(query_json_s)
		.exec(function(err,obj) {
			if (err) return next(err)
			return obj
			var taxons=obj
			res.render('taxon/search', {
				taxons:taxons,
			})
		})
}

