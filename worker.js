let mongoose = require('mongoose');
const Schema = mongoose.Schema;

const worker = new Schema({
  workername:String,
  ip:String,
  package:String
});


module.exports = mongoose.model("worker", worker)
