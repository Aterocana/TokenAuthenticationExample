var express			 	= require('express');
var bodyParser 			= require('body-parser');
var jwt                 = require('jsonwebtoken');
var router 				= express.Router();
var parseUrlencoded 	= bodyParser.urlencoded( {extended: false} );

function ensureAuth(req, res, next){
	var bearerToken;
	var bearerHeader = req.headers.authorization;

    if (typeof bearerHeader !== 'undefined') {
        var bearer  = bearerHeader.split(" "); 	//bearerHeader is in the form: Bearer token
        bearerToken = bearer[1];

        var decoded = jwt.verify(bearerToken, 'digitalSYNCretismSECRET');
        if(decoded === "digitalSYNCretism"){
            next();
        }

    } else {
    	console.warn('authentication failed');
        return res.status(403).json({
        	type: false,
        	data: 'Error: Authentication failed'
        });
    }
}

router.get('/restricted', ensureAuth, function(req, res, next) {
    return res.status(200).json({
        type: true,
        data: 'Successful Authentication'
    });
});

module.exports = router;
