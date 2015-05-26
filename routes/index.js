var express			 	= require('express');
var bodyParser 			= require('body-parser');
var jwt                 = require('jsonwebtoken');
var router 				= express.Router();
var parseUrlencoded 	= bodyParser.urlencoded( {extended: false} );

/*
    API which don't need any special authorization
 */

router.post('/login', function (req, res){
    var username = req.body.username;
    var password = req.body.password;

    /*
        I'm using a plain string just for example purpose. In a production environment your users should be store in a database
     */
    if(username === "digitalSYNCretism" && password === "digitalSYNCretismBlogAccess"){
        var token = jwt.sign('digitalSYNCretism', 'digitalSYNCretismSECRET');
        res.status(200).json({
            type: true,
            data: token
        });
    }
    else {
        res.status(403).json({
            type: false,
            data: "authentication failed"
        });
    }
});

router.get('/login', function(req, res){
    res.status(404).json({
        type: false,
        data: "you should try to login with a POST request providing username and password"
    });
});

module.exports = router;
