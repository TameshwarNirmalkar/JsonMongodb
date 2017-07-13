const mongoose = require('mongoose');

const KeyManagement = new mongoose.Schema({
    id: Number,
    organizationId: String,
    userAccountId: String,
    userRole: String,
    status: String,
    statusDate: Number
});
mongoose.model('KeyManagementSchema', Memberships);

module.exports = mongoose.model('KeyManagementSchema');