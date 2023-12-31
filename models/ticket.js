const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  flight: {
    type: Schema.Types.ObjectId,
    ref: "Flight",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  firstName: String,
  lastName: String,
}, {
  timestamps: true,
}
);


module.exports = mongoose.model('Ticket', ticketSchema);