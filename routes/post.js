var express = require('express');
var router = express.Router();
var postSchema = require('../models/post')

router.post('/', function(req, res, next) {
  console.log(req.body);

    new postSchema({name: req.body.name, message: req.body.message}).save()
    
  res.json({})
});

module.exports = router;