const mongoose = require('mongoose');

const Acquirer = new mongoose.Schema({
  id: Number,
  cardBrand: String,
  name: String
});
mongoose.model('AcquirerSchema', Acquirer);

module.exports = mongoose.model('AcquirerSchema');