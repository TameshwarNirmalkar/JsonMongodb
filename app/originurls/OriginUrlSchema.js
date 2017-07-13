const mongoose = require('mongoose');

const OriginUrls = new mongoose.Schema({
    orgId: String,
    originUrlAddress: String,
    originUrlId: String
});
mongoose.model('OriginUrlsSchema', OriginUrls);

module.exports = mongoose.model('OriginUrlsSchema');