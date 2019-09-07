const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ShopSchema = new Schema(
  {
    name: {type: String, required: true, min:1 },
    address: {type:String, required: true},
    emailz: {type:String}
  }
)


module.exports = mongoose.model('Shop', ShopSchema);
