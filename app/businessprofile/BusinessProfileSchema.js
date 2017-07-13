const mongoose = require('mongoose');
/**
 * Organization users
 */
const BusinessProfile = new mongoose.Schema({
  organizationDzAccount: Object,
  sandboxClientId: String,
  countryOfIncorporationAustralia: Boolean,
  profileCompleted: Boolean,
  fbuMerchant: Boolean,
  orgTypeText: String,
  organizationExtracted: Object,
  organizationClientList: [{}],
  testFlag: Boolean,
  pciCompliant: Boolean
});
mongoose.model('BusinessProfileSchema', BusinessProfile);

module.exports = mongoose.model('BusinessProfileSchema');