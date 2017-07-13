var logger = require('morgan'),
    bodyParser = require('body-parser'),
    cors = require('cors');

module.exports = function (app) {
    app.use(cors());
    app.options('*', cors());
    app.use(logger('dev'));
    app.use(bodyParser.urlencoded({
        limit: '50mb',
        extended: true
    }));
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use('/', require('../routes.js'));
};
