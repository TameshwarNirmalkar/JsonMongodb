const path = require('path');
const resolve_path = path.resolve(__dirname+'/app/');
const APP_CONSTANT = {
   acquirers: resolve_path+'acquirers',
   advancecheckout: resolve_path+'advancecheckout',
   allowedcardtypes: resolve_path+'allowedcardtypes',
   businessprofile: resolve_path+'businessprofile',
   categories: resolve_path+'categories',
   companymanagement: resolve_path+'companymanagement',
   currencies: resolve_path+'currencies',
   cutomerranges: resolve_path+'cutomerranges',
   keymanagement: resolve_path+'keymanagement',
   memberships: resolve_path+'memberships',
   organizations: resolve_path+'organizations',
   originurl: resolve_path+'originurl',
   paymentbrands: resolve_path+'paymentbrands',
   paymentsettings: resolve_path+'paymentsettings',
   permissions: resolve_path+'permissions',
   productionaccess: resolve_path+'productionaccess',
   pspserviceproviders: resolve_path+'pspserviceproviders',
   shippingprofiles: resolve_path+'shippingprofiles',
   useraccount: resolve_path+'useraccount',
   users: resolve_path+'users',
}
module.exports = APP_CONSTANT