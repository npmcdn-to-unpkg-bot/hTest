var express = require('express');
var fs=require('fs');
var bodyParser = require('body-parser');
var router = express.Router();

router.get('/itineraryData', function(req, res, next) {
  fs.readFile('/data/itinerarydata.json',function(err,data){
    res.json(data);
  })
});

module.exports=router;
