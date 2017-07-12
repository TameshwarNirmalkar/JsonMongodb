const mongoose = require('mongoose');

// let currency = new mongoose.Schema({
//                 currencyCode: String
//               });

const AcquirerRelation = new mongoose.Schema({
  id: Number,  
  acquirerId: String,
  assignedMerchantId: String,
  currencyCodes: [{}],
  merchantAcqCode: String,
  passwordProvided: Boolean,
  paymentBrandCode: String,
  readonly: Boolean,
  status: Object,
  unknownAcqFlag: Boolean,
  updateHistory: Boolean,
});
mongoose.model('AcquirerRelationshipsSchema', AcquirerRelation);

module.exports = mongoose.model('AcquirerRelationshipsSchema');