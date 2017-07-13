const mongoose = require('mongoose');

const Brands = new mongoose.Schema({
    alias: String,
    brandingCode: String,
    brandingStatus: String,
    description: String,
    displayName: String,
    logo: Object,
    productionCallbackUrl: String,
    sandboxCallbackUrl: String
});
mongoose.model('BrandsSchema', Brands);

module.exports = mongoose.model('BrandsSchema');