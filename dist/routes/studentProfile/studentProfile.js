'use strict';

var router = require('express').Router();

router.get('/studentdashboard', function (req, res) {
    res.render('studentdashboard');
});

router.get('/studentprofile', function (req, res) {
    res.render('studentprofile');
});

router.get('/studentsettings', function (req, res) {
    res.render('studentsettings');
});

module.exports = router;