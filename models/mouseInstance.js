const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var MouseInstanceSchema = new Schema(
  {
    type: {type:Schema.Types.ObjectId, ref: 'Mouse',required: true},
    inshop: {type:Schema.Types.ObjectId, ref:'Shop', required: true},
    status: {type:String, required: true, enum:['Available','Maintenance','Sold'], default:'Maintenance'},
    dayCreated: {type:Date, default: Date.now}
  }
)

MouseInstanceSchema
.virtual('url')
.get(function() {
  return '/storage/mouseinstance/update/' + this._id;
})

module.exports = mongoose.model('MouseInstance', MouseInstanceSchema);
