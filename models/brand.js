const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var BrandSchema = new Schema(
  {
    name: {type: String, min:1, required:true},
  }
);

module.exports = mongoose.model('Brand', BrandSchema);
