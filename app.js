const express = require('express');
// const mongodb = require('mongodb');
// const bodyParser = require('body-parser');
const path = require('path');
var app = express();

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

/*
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
*/
// businessProfile MODULE
const BusinessProfileController = require(path.resolve(__dirname+'/businessprofile/BusinessProfileController') );
app.use('/merchantOrgDetails', BusinessProfileController);
/*
// productionAccess MODULE
const ProductionAccessController = require(path.resolve(__dirname+'/productionaccess/ProductionAccessController') );
app.use('/productionAccess', ProductionAccessController);

// permissions MODULE
const PermissionsController = require(path.resolve(__dirname+'/permissions/PermissionsController') );
app.use('/permissions', PermissionsController);
*/
// PAYMENT SETTINGS MODULE
const PaymentSettingController = require(path.resolve(__dirname+'/paymentsettings/PaymentSettingController') );
app.use('/paymentsettings', PaymentSettingController);

// CURRENCIES SERVICES
const CurrencyController = require(path.resolve(__dirname+'/currencies/CurrencyController') );
app.use('/currencies', CurrencyController);

// CATEGORIES SERVICES
const CategoriesController = require(path.resolve(__dirname+'/categories/CategoriesController') );
app.use('/categories', CategoriesController);

// PSP SERVICE PROVIDERS SERVICES
const PspserviceProvidersController = require(path.resolve(__dirname+'/pspserviceproviders/PspserviceProvidersController') );
app.use('/pspserviceproviders', PspserviceProvidersController);

// Customer Ranges SERVICES
const CustomerRangesController = require(path.resolve(__dirname+'/customerranges/CustomerRangesController') );
app.use('/customerranges', CustomerRangesController);
/*
// ADVANCE CHECKOUT SERVICES
const AdvancedCheckoutController = require(path.resolve(__dirname+'/advancedcheckout/AdvancedCheckoutController') );
app.use('/advancedCheckout', AdvancedCheckoutController);

// ALLOW CARD TYPES  SERVICES
const AllowCardTypesController = require(path.resolve(__dirname+'/allowedcardtypes/AllowCardTypesController') );
app.use('/allowed-card-types', AllowCardTypesController);
*/
// ACQUIRERS  SERVICES
const AcquirersController = require(path.resolve(__dirname+'/acquirers/AcquirersController') );
app.use('/acquirers', AcquirersController);

// PAYMENT BRANDS API
const PaymentBrandsController = require(path.resolve(__dirname+'/paymentbrands/PaymentBrandsController') );
app.use('/paymentbrands', PaymentBrandsController);


app.listen(5000, () => {
  console.log('Mongo Database Ready: http://localhost:'+5000);
})