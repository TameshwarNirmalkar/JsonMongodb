const mongoose = require('mongoose');
/**
 * Organization users
 */
const CustomerRanges = new mongoose.Schema({
  code: String,
  highCount: Number,
  lowCount: Number
});
mongoose.model('CustomerRangesSchema', CustomerRanges);

module.exports = mongoose.model('CustomerRangesSchema');