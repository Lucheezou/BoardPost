var express = require('express');
var router = express.Router();
var postSchema = require('../models/post')

/* GET home page. */
router.post('/', function(req, res, next) {
    console.log(req.body.id)
  postSchema.findByIdAndDelete(req.body.id).then(data=> {console.log("deleted")
res.json(data)
})
  
});

module.exports = router;
 