var express = require('express');
var router = express.Router();
var postSchema = require('../models/post')

/* GET home page. */
router.get('/', function(req, res, next) {
    
    
    postSchema.find().then(data => res.json(data))  

});

module.exports = router;