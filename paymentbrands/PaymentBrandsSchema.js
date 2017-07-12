const mongoose = require('mongoose');
/**
 * Payment Brands Schema
 */
const PaymentBrands = new mongoose.Schema({
  id: Number,
  code: String,
  name: String,
  desc: String,
  threeDsEnableSwitch: Boolean,
  transactionEnableSwitch: Boolean,
  tokenizationEnableSwitch: Boolean,
  cryptoFormats: []
});
mongoose.model('PaymentBrandsSchema', PaymentBrands);

module.exports = mongoose.model('PaymentBrandsSchema');