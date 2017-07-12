const mongoose = require('mongoose');

const Currencies = new mongoose.Schema({
  id: Number,  
  alphaTwoCode: String,
  code: String,
  name: String,
  numCode: String
});
mongoose.model('CurrenciesSchema', Currencies);

module.exports = mongoose.model('CurrenciesSchema');