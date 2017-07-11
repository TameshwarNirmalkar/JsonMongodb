const express = require('express');
// const mongodb = require('mongodb');
// const bodyParser = require('body-parser');
const path = require('path');
var app = express();

// USER MODULE
const UserController = require(path.resolve(__dirname+'/usermodule/UserController') );
app.use('/users', UserController);

// DASHBOARD MODULE
const DashboardController = require(path.resolve(__dirname+'/dashboard/DashboardSettingController') );
app.use('/dashboard', DashboardSettingController);

// KeyManagement MODULE
const KeyManagementController = require(path.resolve(__dirname+'/keymanagement/KeyManagementController') );
app.use('/keyManagement', KeyManagementController);

// OriginUrl MODULE
const OriginUrlController = require(path.resolve(__dirname+'/originurl/OriginUrlController') );
app.use('/originUrl', OriginUrlController);

// companyManagement MODULE
const CompanyManagementController = require(path.resolve(__dirname+'/companymanagement/CompanyManagementController') );
app.use('/companyManagement', CompanyManagementController);

// shippingProfiles MODULE
const ShippingProfilesController = require(path.resolve(__dirname+'/shippingprofiles/ShippingProfilesController') );
app.use('/shippingProfiles', ShippingProfilesController);

// businessProfile MODULE
const BusinessProfileController = require(path.resolve(__dirname+'/businessprofile/BusinessProfileController') );
app.use('/businessProfile', BusinessProfileController);

// productionAccess MODULE
const ProductionAccessController = require(path.resolve(__dirname+'/productionaccess/ProductionAccessController') );
app.use('/productionAccess', ProductionAccessController);

// permissions MODULE
const PermissionsController = require(path.resolve(__dirname+'/permissions/PermissionsController') );
app.use('/permissions', PermissionsController);

// PAYMENT SETTINGS MODULE
const PaymentSettingController = require(path.resolve(__dirname+'/paymentsettings/PaymentSettingController') );
app.use('/authenticationSettings', PaymentSettingController);

// CURRENCIES SERVICES
const CurrencyController = require(path.resolve(__dirname+'/currencies/CurrencyController') );
app.use('/currencies', CurrencyController);

// ADVANCE CHECKOUT SERVICES
const AdvancedCheckoutController = require(path.resolve(__dirname+'/advancedcheckout/AdvancedCheckoutController') );
app.use('/advancedCheckout', AdvancedCheckoutController);

app.listen(5000, () => {
  console.log('Mongo Database Ready: http://localhost:'+5000);
})