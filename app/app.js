const express = require('express');
// const mongodb = require('mongodb');
// const bodyParser = require('body-parser');
const path = require('path');
const app = express();
// const appconstant = require('./app_constant');

// ORGANIZATIONS USER API
const UserController = require(path.resolve(__dirname+'/users/UserController') );
app.use('/users', UserController);

// MEMBERSHIPS API
const MembershipsController = require(path.resolve(__dirname+'/memberships/MembershipsController') );
app.use('/memberships', MembershipsController);

// ORGANIZATIONS API
const OrganizationsController = require(path.resolve(__dirname+'/organizations/OrganizationsController') );
app.use('/organizations', OrganizationsController);

// USER ACCOUNT API
const UserAccountController = require(path.resolve(__dirname+'/useraccount/UserAccountController') );
app.use('/useraccount', UserAccountController);

// KeyManagement MODULE
// const KeyManagementController = require(path.resolve(__dirname+'/keymanagement/KeyManagementController') );
// app.use('/keyManagement', KeyManagementController);

// OriginUrl API
const OriginUrlController = require(path.resolve(__dirname+'/originurls/OriginUrlController') );
app.use('/originurls', OriginUrlController);

// BRANDS SERVICES
const BrandsController = require(path.resolve(__dirname+'/brands/BrandsController') );
app.use('/brands', BrandsController);

// companyManagement MODULE
// const CompanyManagementController = require(path.resolve(__dirname+'/companymanagement/CompanyManagementController') );
// app.use('/companyManagement', CompanyManagementController);

// shippingProfiles MODULE
// const ShippingProfilesController = require(path.resolve(__dirname+'/shippingprofiles/ShippingProfilesController') );
// app.use('/shippingProfiles', ShippingProfilesController);

// businessProfile API
const OrgmgmtController = require(path.resolve(__dirname+'/orgmgmt/OrgmgmtController') );
app.use('/merchantOrgDetails', OrgmgmtController);

// productionAccess MODULE
// const ProductionAccessController = require(path.resolve(__dirname+'/productionaccess/ProductionAccessController') );
// app.use('/productionAccess', ProductionAccessController);

// permissions MODULE
// const PermissionsController = require(path.resolve(__dirname+'/permissions/PermissionsController') );
// app.use('/permissions', PermissionsController);

// PAYMENT SETTINGS MODULE
// const PaymentSettingController = require(path.resolve(__dirname+'/paymentsettings/PaymentSettingController') );
// app.use('/paymentsettings', PaymentSettingController);

// CURRENCIES API
const CurrencyController = require(path.resolve(__dirname+'/currencies/CurrencyController') );
app.use('/currencies', CurrencyController);

// CATEGORIES SERVICES
const CategoriesController = require(path.resolve(__dirname+'/categories/CategoriesController') );
app.use('/categories', CategoriesController);

// PSP SERVICE PROVIDERS API
const PspserviceProvidersController = require(path.resolve(__dirname+'/pspserviceproviders/PspserviceProvidersController') );
app.use('/pspserviceproviders', PspserviceProvidersController);

// Customer Ranges API
const CustomerRangesController = require(path.resolve(__dirname+'/customerranges/CustomerRangesController') );
app.use('/customerranges', CustomerRangesController);

// ADVANCE CHECKOUT API
// const AdvancedCheckoutController = require(path.resolve(__dirname+'/advancedcheckout/AdvancedCheckoutController') );
// app.use('/advancedCheckout', AdvancedCheckoutController);

// ALLOW CARD TYPES  API
// const AllowCardTypesController = require(path.resolve(__dirname+'/allowedcardtypes/AllowCardTypesController') );
// app.use('/allowed-card-types', AllowCardTypesController);

// ACQUIRERS  API
const AcquirersController = require(path.resolve(__dirname+'/acquirers/AcquirersController') );
app.use('/acquirers', AcquirersController);

// PAYMENT BRANDS API
const PaymentBrandsController = require(path.resolve(__dirname+'/paymentbrands/PaymentBrandsController') );
app.use('/paymentbrands', PaymentBrandsController);


app.listen(5000, () => {
  console.log('Mongo Database Ready: http://localhost:'+5000);
})