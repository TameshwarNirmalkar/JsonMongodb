const mongoose = require('mongoose');
/**
 * Organization users
 */
const PspserviceProviders = new mongoose.Schema({
  legalBusinessName: String,
  organizationId: String
});
mongoose.model('PspserviceProvidersSchema', PspserviceProviders);

module.exports = mongoose.model('PspserviceProvidersSchema');