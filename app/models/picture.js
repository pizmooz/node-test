var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var PictureSchema= Schema({
	id:Number,
	taxon_id:Number,
	date: Date,
})

var Picture=mongoose.model('Picture',PictureSchema);
