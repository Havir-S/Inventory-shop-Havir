const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var KeyboardInstanceSchema = new Schema(
  {
    type: {type:Schema.Types.ObjectId, ref: 'Keyboard',required: true},
    inshop: {type:Schema.Types.ObjectId, ref:'Shop', required: true},
    status: {type:String, required: true, enum:['Available','Maintenance','Sold'], default:'Maintenance'},
    dayCreated: {type:Date, default: Date.now}
  }
)

KeyboardInstanceSchema
.virtual('url')
.get(function() {
  return '/storage/keyboardinstance/update/' + this._id;
})


module.exports = mongoose.model('KeyboardInstance', KeyboardInstanceSchema);
