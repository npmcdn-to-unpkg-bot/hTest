var express = require('express');
var fs=require('fs');
var bodyParser = require('body-parser');
var router = express.Router();

router.get('/flightSearchResultsData', function(req, res, next) {
  fs.readFile('/data/flightSearchResults.json',function(err,data){
    res.json(data);
  })
});
router.get('/hotelSearchResultsData', function(req, res, next) {
  fs.readFile('/data/hotelSearchResults.json',function(err,data){
    res.json(data);
  })
});
router.get('/trainSearchResultsData', function(req, res, next) {
  fs.readFile('/data/trainSearchResults.json',function(err,data){
    res.json(data);
  })
});
module.exports=router;
