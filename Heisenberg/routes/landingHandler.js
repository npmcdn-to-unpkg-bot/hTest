var express = require('express');
var router = express.Router();
var landingModel = require('../models/landing.model');

router.get('/myalert', function (req, res, next) {

    landingModel.getMyAlert().then(function (data) {
        res.send(data);
    })

});
router.get('/myfavourities', function (req, res, next) {

    landingModel.getMyFavourites().then(function (data) {
        res.send(data);
    });

});
router.get('/myplans', function (req, res, next) {

    landingModel.getMyPlan().then(function (data) {
        res.send(data);
    });

});
router.get('/myworklist', function (req, res, next) {

    landingModel.getMyWorkList().then(function (data) {
        res.send(data);
    });

});
module.exports = router;
