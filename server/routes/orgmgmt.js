const router = require('express').Router();
const statusCode = require('../utils/helpers.js').statusCodes;
const log = require('../utils/helpers.js').logRequest;
const _ = require('lodash');
const path = require('path');
const db = require(path.join('../../app/orgmgmt/db') ); //Database connection name
const OrgmgmtSchema = require( path.join('../../app/orgmgmt/OrgmgmtSchema') );

///////////
// Debug //
///////////
const debug = 'true'; // Enable to show requests data in debug console

//////////
// Data //
//////////
const orgmgmt = require('../data/orgmgmt.json');

router.get('/orgmgmt/v0/organizations/:orgId/merchantOrgDetails', function (req, res) {
    if(debug) log(req);
    OrgmgmtSchema.findOne({}, function (err, data) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        if(data){
            res.status(statusCode.OK).send(data);
        }else{
            res.status(statusCode.OK).send({message: "No data found"});
        }
    });
    // res.status(statusCode.OK).send(orgmgmt.orgData);
});

router.put('/orgmgmt/v0/organizations/:orgId/merchant', function (req, res) {
    if(debug) log(req);
    // console.log( req.body);
    let reqpayload = req.body;
    let modifieddata = {
        profileCompleted: reqpayload.profileCompleted,
        orgTypeText: reqpayload.orgTypeText,
        organizationExtracted: reqpayload.organizationExtracted,
        organizationProductionAccessRequestInfo: reqpayload.organizationProductionAccessRequestInfo,
        testFlag: reqpayload.testFlag,
        pciCompliant: reqpayload.pciCompliant
    }
    OrgmgmtSchema.findOne({}, function (err, data) {
        OrgmgmtSchema.findByIdAndUpdate({ _id: data._id }, modifieddata,
            function (err, updata) {
                if (err){
                    return res.status(500).send("There was a problem adding the information to the database.");
                }else if(!updata){
                    return next(new Error(req.params.id+', Id not found'));
                }
                else{
                    res.status(statusCode.OK).send(updata);
                }
        });
    })
    /*
    OrgmgmtSchema.findByIdAndUpdate({ _id: req.params.id }, req.body,
        function (err, data) {
            if (err){
                return res.status(500).send("There was a problem adding the information to the database.");
            }else if(!data){
                return next(new Error(req.params.id+', Id not found'));
            }
            else{
                res.status(statusCode.OK).send({message: "Data updated successfully"});
            }
    });
        */
    // for(let prop in req.body.organization) {
    //     if (orgmgmt.orgData[prop]) {
    //         orgmgmt.orgData[prop] = req.body.organization[prop] || null;
    //     }
    // }

    // orgmgmt.orgData.merchant = {};
    // orgmgmt.orgData.merchant.businessType = req.body.businessType;
    // orgmgmt.orgData.merchant.pspOrgId = req.body.pspOrgId;

    // res.status(statusCode.OK).send(orgmgmt.orgData);
});

router.put('/orgmgmt/v0/organizations/:orgId/serviceProvider', function (req, res) {
    if(debug) log(req);

    res.status(statusCode.OK).send(orgmgmt.orgData);
});

router.get('/orgmgmt/v0/pspServiceProviders', function (req, res) {
    if(debug) log(req);

    res.status(statusCode.OK).send(orgmgmt.psp);
});

router.get('/orgmgmt/v0/organizations/:orgId/initial-integration-info', function (req, res) {
    if(debug) log(req);

    res.status(statusCode.OK).send(orgmgmt["initial-integration-info"]);
});

router.get('/orgmgmt/v0/organizations/:orgId/settings/transaction/allowed-card-types', function(req, res) {
    if(debug) log(req);
    // console.log('Allow card type: ', orgmgmt["initial-integration-info"] );
    res.status(statusCode.OK).send({allowedCardTypes: orgmgmt["initial-integration-info"] });
});

router.get('/orgmgmt/v0/organizations/:orgId/provisionedMerchants', function(req, res) {
    if(debug) log(req);

    res.status(statusCode.OK).send(orgmgmt["provisionedMerchants"]);
});

router.get('/orgmgmt/v0/organizations/:orgId/details', function(req, res) {
    if(debug) log(req);

    res.status(statusCode.OK).send(orgmgmt["details"]);
});

router.post('/orgmgmt/v0/organizations/:orgId/merchantOrgDetails', function (req, res) {
    OrgmgmtSchema.create(req.body, 
        function (err, user) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(statusCode.OK).send({message: "Organization user added successfully"});
        });
});

router.put('/orgmgmt/v0/organizations/:orgId/merchantOrgDetails/:id', function (req, res, next) {
    OrgmgmtSchema.findByIdAndUpdate({ _id: req.params.id }, req.body,
        function (err, data) {
            if (err){
                return res.status(500).send("There was a problem adding the information to the database.");
            }else if(!data){
                return next(new Error(req.params.id+', Id not found'));
            }
            else{
                res.status(200).send({message: "Data updated successfully"});
            }
        });
});

// DELETE All records from usertable
router.delete('/orgmgmt/v0/organizations/:orgId/merchantOrgDetails', function (req, res) {
    OrgmgmtSchema.remove(function (err) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(statusCode.OK).send({message: "Database empty"});
    });
});

module.exports = router;

// Expected data:
// {
//     "organization": {
//         "address": {
//             "countryOfIncorporation": "US",
//             "countrySubdivision": "US-AL",
//             "address1": "31 Spooner",
//             "city": "asdf"
//         },
//         "phone": {
//             "countryCode": "US+1",
//             "number": "5555555555"
//         },
//         "orgTypeText": "MERCHANT",
//         "organizationExtracted": {
//             "legalBusinessName": "Grey Spade LLC",
//             "taxId": "",
//             "website": "http://test.com"
//         },
//         "testFlag": false,
//         "organizationProductionAccessRequestInfo": {
//             "organizationContactInformation": {
//                 "contactFirstName": "Dale",
//                 "contactLastName": "Race",
//                 "contactEmail": "race.dale@gmail.com"
//             },
//             "acquirerBankId": "1243",
//             "acquirerBankName": "Bnak",
//             "merchantAcquirerId": "5432"
//         },
//         "pciCompliant": true
//     },
//     "businessType": "11",
//     "pspOrgId": null
// }



// R4 data:
// {
//     "merchant": {
//         "businessType": null,
//         "pspOrgId": null
//     },
//     "countryOfIncorporationAustralia": false,
//     "fbuMerchant": false,
//     "profileCompleted": false,
//     "address": {
//         "city": "Columbia",
//         "zipCode": "65203",
//         "countryOfIncorporation": "US",
//         "countrySubdivision": "US-AK",
//         "address1": "4101 MasterCard Blvd."
//     },
//     "phone": {
//         "countryCode": "US+1",
//         "number": "5733569744"
//     },
//     "orgTypeText": "MERCHANT",
//     "organizationExtracted": {
//         "doingBusinessAsName": "Summer",
//         "legalBusinessName": "Summer",
//         "taxId": "852258963",
//         "website": "http://Summer.com"
//     },
//     "testFlag": false,
//     "pciCompliant": true
// }


// Mock data from Service
// var mockMerchantData = { // eslint-disable-line no-unused-vars
//     "merchant":{ "pciCompliant":false,"businessType":"12","pspOrgId":"d5fa1517c57643db92f901b44142644a"},
//     "profileCompleted":false,"fbuMerchant":false,"countryOfIncorporationAustralia":false,
//     "address":{"city":"DELHI","zipCode":"45465","countryOfIncorporation":"US","countrySubdivision":"US-AK","address1":"Delhi","address2":"NCR"},
//     "phone":{"countryCode":"US+1","number":"436455676"},
//     "orgTypeText":"MERCHANT",
//     "organizationExtracted":{"profileCompleted":true,"legalBusinessName":"ViratKohli","taxId":"676786787","website":"http://ViratKohli.com"},
//     "testFlag":false,"pciCompliant":true
// };
// var mockServiceProviderData = { // eslint-disable-line no-unused-vars
//     Organization: {
//         organizationId: '2',
//         orgTypeText: 'SERVICE PROVIDER',
//         nmOfMerchantServed: '100',
//         serviceProvider: {
//             numOfMerServed : "009",
//             providerType : 2,
//             pspOptIn : true,
//             visible : true
//         },
//         // serviceProviderType: 'Miscellaneous',
//         testFlag: '',
//         organizationExtracted: {
//             legalBusinessName: 'MasterCard',
//             taxId: '******',
//             ausCoNum: 'AUS89',
//             website: 'www.mastercard.com'
//         },
//         address: {
//             zipCode: '12345',
//             city: 'St. Louis',
//             state: 'MO',
//             countryOfIncorporation: 'AU',
//             countrySubdivision: '',
//             address1: '456 Street',
//             address2: 'Apt BB'
//         },
//         phone: {
//             countryCode: 'US+1',
//             number: '1234567890',
//             ext: '3'
//         }
//     },
//     organizationProductionAccessRequestInfo:{
//         organizationContactInformation: {
//             contactFirstName: "test",
//             contactLastName: "test",
//             contactEmail: "test@test.com"
//         }
//     }
// };
