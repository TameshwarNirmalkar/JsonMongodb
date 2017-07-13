var statusCodes = {
    OK: 200,
    Created: 201,
    Accepted: 202,
    NoContent: 204,
    ResetContent: 205,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    InternalServerError: 500,
    NotImplemented: 501,
    ServiceUnavailable: 503,
    HTTPVersionNotSupported: 505
};
exports.statusCodes = statusCodes;

exports.respondWith = function(res, next, statusCode, result, error) {
    var responseObj = {};
    if (statusCode >= 200 && statusCode <= 299) {
        responseObj.succeeded = true;
        responseObj.result = result;
    } else {
        responseObj.succeeded = false;
        responseObj.reason = result;
    }

    if (error) {
        return res.status(statusCodes.InternalServerError).json({
            succeeded: false,
            reason: 'Internal server error. Please try again. If the problem persists please contact a system administrator.'
        });
    }
    return res.status(statusCode).json(responseObj);
};

exports.logRequest = function(req) {
    /*eslint-disable */
    if(Object.keys(req.params).length > 0) console.log('Request - Params',req.params);
    if(Object.keys(req.query).length > 0) console.log('Request - Query', req.query);
    if(Object.keys(req.body).length > 0) console.log('Request - Body', req.body);
    /*eslint-enable */
}
