const mongoose = require('mongoose');

// let currency = new mongoose.Schema({
//                 currencyCode: String
//               });

const AcquirerSchema = new mongoose.Schema({
  id: Number,  
  merchantAcqCode: String,
  status: Object,
  assignedMerchantId: String,
  unknownAcqFlag: Boolean,
  acquirerId: String,
  paymentBrandCode: String,
  currencyCodes: [{}]
});
mongoose.model('Acquirer', AcquirerSchema);

module.exports = mongoose.model('Acquirer');