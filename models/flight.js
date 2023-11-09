const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  spaceportD: {type: String},
  spaceportA: {type: String},
  flightN: {type: Number},
  departure: {type: String},
  arrival: {type: String},
  depDate: {type: Date},
  arrDate: {type: Date},
  ecoPrice: {type: Number},
  busPrice: {type: Number},
  aircraft: {type: String}
}, {
  timestamps: true,
}
);


module.exports = mongoose.model('Flight', flightSchema);