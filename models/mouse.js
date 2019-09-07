const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var MouseSchema = new Schema(
  {
    model: {type: String, required: true, min:1, max:100 },
    description: {type: String, min: 1, max: 100},
    brand: {type: Schema.Types.ObjectId, ref: 'Brand'},
    price: {type: Number, required: true},
    image_url: {type: String, required: true, default: '/images/apex100-steelseries.png'},
    time_Added: {type: Date, default: Date.now},
    type: {type: String, default: 'Mouse'}
  }
)

MouseSchema
.virtual('url')
.get(function() {
  return '/product/mouse/' + this._id;
});

MouseSchema
.virtual('admin')
.get(function() {
  return '/admin-room/mouse/update/' + this._id;
});
module.exports = mongoose.model('Mouse', MouseSchema);
