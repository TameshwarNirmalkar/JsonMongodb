const mongoose = require('mongoose');
/**
 * Organization users
 */
const organizationProductionAccessRequestInfo = new mongoose.Schema({
  organizationContactInformation: Object  
})
const Orgmgmt = new mongoose.Schema({
  merchant: Object,
  serviceProvider: Object,
  organizationDzAccount: Object,
  sandboxClientId: String,
  countryOfIncorporationAustralia: Boolean,
  profileCompleted: Boolean,
  fbuMerchant: Boolean,
  orgTypeText: String,
  organizationExtracted: Object,
  organizationClientList: [{}],
  organizationDzAccount: Object,
  organizationProductionAccessRequestInfo: Object,
  testFlag: Boolean,
  pciCompliant: Boolean
});
mongoose.model('OrgmgmtSchema', Orgmgmt);

module.exports = mongoose.model('OrgmgmtSchema');