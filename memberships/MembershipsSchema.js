const mongoose = require('mongoose');

const Memberships = new mongoose.Schema({
    id: Number,
    organizationId: String,
    userAccountId: String,
    userRole: String,
    status: String,
    statusDate: Number
});
mongoose.model('MembershipsSchema', Memberships);

module.exports = mongoose.model('MembershipsSchema');