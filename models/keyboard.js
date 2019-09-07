const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var KeyboardSchema = new Schema(
  {
    model: {type: String, required: true, min: 1, max: 50},
    description: {type: String, min: 1, max: 100},
    brand: {type: Schema.Types.ObjectId, ref: 'Brand'},
    price: {type: Number, required: true},
    image_url: {type: String, required: true, default: '/images/apex100-steelseries.png'},
    time_Added: {type: Date, default: Date.now},
    type: {type: String, default: 'Keyboard'}
  }
);

KeyboardSchema
.virtual('url')
.get(function() {
  return '/product/keyboard/' + this._id;
});

KeyboardSchema
.virtual('admin')
.get(function() {
  return '/admin-room/keyboard/update/' + this._id;
});
module.exports = mongoose.model('Keyboard', KeyboardSchema);
