const express = require('express');
const Promise = require('bluebird');
const path = require('path');
const request = require('request');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');

const APP_CONSTANT = require('./constant.js');

const server = express();
const Router = express.Router();

// Set default middlewares (logger, static, cors and no-cache)
server.use(bodyParser.json({ limit: '50mb' }));
server.use( bodyParser.urlencoded({ limit: '50mb', extended: true }) );
server.use(cors());
server.options('*', cors());
server.use(logger('dev'));
server.get('/', (req, res) => {
  res.jsonp(req.query);
});
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})

// Portal Notificaiton API
server.get('/merchantAdmin/portalNotification', function (req, res) {
  request({
    method: 'GET',
    uri: APP_CONSTANT.SERVICE_API + '/portalNotification',
    headers: APP_CONSTANT.HEADERS
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })
})

// UserAccout Api
server.get('/merchantAdmin/private/me/UserAccount', function (req, res) {
  request({
    method: 'GET',
    uri: APP_CONSTANT.SERVICE_API + '/useraccount',
    headers: APP_CONSTANT.HEADERS
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })
});

// Pagination and production access request api
server.get('/merchantAdmin/private/organization/productionAccess', function (req, res) {
  // console.log(req.query.offset, '===',req.query.limit);
  request({
    method: 'GET',
    uri: APP_CONSTANT.SERVICE_API + '/organizationslist',
    headers: APP_CONSTANT.HEADERS
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var formatedbody = {
        totalPages: JSON.parse(body).length/req.query.limit,//JSON.parse(body).length / req.query.limit,
        totalElements: JSON.parse(body).length, //JSON.parse(body).length,
        organizations: null
      };
      
      request({
        method: 'GET',
        uri: APP_CONSTANT.SERVICE_API + '/organizationslist?_page=' + req.query.offset + '&_limit=' + req.query.limit,
        headers: APP_CONSTANT.HEADERS
      }, function (e, r, b) {
        if (!e && r.statusCode == 200) {
          // console.log('Organizations: ==',  this.uri);
          formatedbody.organizations = JSON.parse(b);
          res.json(formatedbody);
        }
      })
      
    }
  })
});

// Organization data based on organization id
server.get('/merchantAdmin/private/organization/:id', function (req, res) {
  // console.log( req.params.id );
  request({
    method: 'GET',
    uri: APP_CONSTANT.SERVICE_API + '/organizations?organizationId=' + req.params.id,
    headers: APP_CONSTANT.HEADERS
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body)[0]);
    }
  })
});

/**
 * Merchant Approved and Denied Status Call
 */
server.put('/merchantAdmin/private/organization/:id/prodAccessRequest/:status', function (req, res) {
  let error = {
    "errors": [{
      "description": "500 Internal Server Error",
      "recoverable": "false",
      "source": "CrossSvcCommunicator"
    }]
  };
  let success = {
    Code: 204
  };
  res.json(success);
});

/**
 * Delete Merchant from organizations
 */
server.delete('/merchantAdmin/private/organization/:id/DELETE', function (req, res) {
  request({
    method: 'DELETE',
    uri: APP_CONSTANT.SERVICE_API + '/organizations/' + req.params.id + '/DELETE',
    headers: APP_CONSTANT.HEADERS
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json({
        status: 200,
        message: 'Successfully deleted'
      });
    }
  })
});


server.get('/geography/v0/geography/countries', function (req, res) {
  // console.log( req.params.id );
  request({
    method: 'GET',
    uri: APP_CONSTANT.SERVICE_API + '/countries',
    headers: APP_CONSTANT.HEADERS
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })
});

server.get('/orgmgmt/v0/organizations/org2/merchantOrgDetails', function(req, res){
  request({
    method: 'GET',
    uri: APP_CONSTANT.SERVICE_API + '/merchantOrgDetails',
    headers: APP_CONSTANT.HEADERS
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })  
})

server.get('/business/v0/business/categories/', function (req, res) {
  request({
    method: 'GET',
    uri: APP_CONSTANT.SERVICE_API + '/categories',
    headers: APP_CONSTANT.HEADERS
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })
});

server.get('/orgmgmt/v0/pspServiceProviders', function (req, res) {
  request({
    method: 'GET',
    uri: APP_CONSTANT.SERVICE_API + '/pspServiceProviders',
    headers: APP_CONSTANT.HEADERS
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })
});

server.get('/business/v0/business/customerRanges', function (req, res) {
  request({
    method: 'GET',
    uri: APP_CONSTANT.SERVICE_API + '/customerRanges',
    headers: APP_CONSTANT.HEADERS
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })
});

server.get('/usermgmt/v0/private/organizations/org2/users', function (req, res) {
  request({
    method: 'GET',
    uri: APP_CONSTANT.SERVICE_API + '/users',
    headers: APP_CONSTANT.HEADERS
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })
});

server.get('/geography/v0/geography/currencies', function (req, res) {
  request({
    method: 'GET',
    uri: APP_CONSTANT.SERVICE_API + '/currencies',
    headers: APP_CONSTANT.HEADERS
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })
});

server.get('/pymtbrand/v0/payment/paymentBrands', function (req, res) {
  request({
    method: 'GET',
    uri: APP_CONSTANT.SERVICE_API + '/paymentBrands',
    headers: APP_CONSTANT.HEADERS
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })
});

server.get('/acquirer/v0/acquirers', function (req, res) {
  request({
    method: 'GET',
    uri: APP_CONSTANT.SERVICE_API + '/acquirer',
    headers: APP_CONSTANT.HEADERS
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })
});

server.get('/three.ds.profile/v0/organizations/org2/3ds/acquirerRelationships', function (req, res) {
  request({
    method: 'GET',
    uri: APP_CONSTANT.SERVICE_API + '/acquirerRelationships',
    headers: APP_CONSTANT.HEADERS
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      let ar = { "acquirerRelationships": JSON.parse(body) };
      res.json(ar);
    }
  })
});
server.delete('/three.ds.profile/v0/organizations/org2/3ds/acquirerRelationships/:id', function (req, res) {
  request({
    method: 'DELETE',
    uri: APP_CONSTANT.SERVICE_API + '/acquirerRelationships/'+req.params.id,
    headers: APP_CONSTANT.HEADERS
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })
});


server.get('/three.ds.profile/v0/organizations/org2/3ds/advancedCheckout', function (req, res) {
  request({
    method: 'GET',
    uri: APP_CONSTANT.SERVICE_API + '/advancedCheckout',
    headers: APP_CONSTANT.HEADERS
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })
});

server.get('/orgmgmt/v0/organizations/org2/settings/transaction/allowed-card-types', function (req, res) {
  request({
    method: 'GET',
    uri: APP_CONSTANT.SERVICE_API + '/allowed-card-types',
    headers: APP_CONSTANT.HEADERS
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })
});

server.get('/adminref/v0/public/portalNotification', function (req, res) {
  request({
    method: 'GET',
    uri: APP_CONSTANT.SERVICE_API + '/portalNotification',
    headers: APP_CONSTANT.HEADERS
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })
});

server.get('/orgmgmt/v0/organizations/org2/initial-integration-info', function (req, res) {
  request({
    method: 'GET',
    uri: APP_CONSTANT.SERVICE_API + '/initialIntegrationInfo',
    headers: APP_CONSTANT.HEADERS
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })
});

// server.get('/usermgmt/v0/private/users/me/memberships/clientIds', function (req, res) {
//   // request({
//   //   method: 'GET',
//   //   uri: APP_CONSTANT.SERVICE_API + '/clientIds',
//   //   headers: APP_CONSTANT.HEADERS
//   // }, function (error, response, body) {
//   //   if (!error && response.statusCode == 200) {
//   //     res.json(JSON.parse(body));
//   //   }
//   // })
//   res.json({
//     message: "SUCCESS"
//   });
// });

server.listen(APP_CONSTANT.PORT, () => {
  console.log('Application is running on PORT: ', APP_CONSTANT.PORT);
})