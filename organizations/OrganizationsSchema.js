const mongoose = require('mongoose');

// const orgclientinforlist = new mongoose.Schema({
//     environment: String,
//     orgId: Number,
//     orgClientId: Number
// });

const Organizations = new mongoose.Schema({
    id: String,
    threeDsEnabled: Boolean,
    businessProfileComplete: Boolean,
    parentId: String,
    name: String,
    country: String,
    subdivision: String,
    productionRequestStatus: String,
    type: String,
    childOrganizationList:[{}],
    organizationClientInfoList: [{}]
});
mongoose.model('OrganizationsSchema', Organizations);

module.exports = mongoose.model('OrganizationsSchema');