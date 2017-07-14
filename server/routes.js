var router = require('express').Router();
var four0four = require('./utils/404')();
var fs = require('file-system');
var path = require("path");

fs.recurseSync(path.resolve(__dirname, "routes"),['*.js'], function(filepath, relative, filename) {
    if (!filename) return;
    router.use('/', require('./routes/' + filename));
});

//Catch all route
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;




