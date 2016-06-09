var express = require('express');
var fs=require('fs');
var bodyParser = require('body-parser');
var router = express.Router();

router.get('/nodeMasterData', function(req, res, next) {
  fs.readFile('/data/configjsons/nodemaster.json',function(err,data){
    res.json(data);
  })
});
router.get('/edgeMasterData', function(req, res, next) {
  fs.readFile('/data/configjsons/edgemaster.json',function(err,data){
    res.json(data);
  })
});
router.get('/travelplanData', function(req, res, next) {
  fs.readFile('/data/travelplan.json',function(err,data){
    res.json(data);
  })
});
module.exports=router;
