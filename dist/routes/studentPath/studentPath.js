'use strict';

var router = require('express').Router();

router.get('/studentstudy', function (req, res) {
    res.render('studentstudy');
});

router.get('/studentlearn', function (req, res) {
    res.render('studentlearn');
});

router.get('/studenttests', function (req, res) {
    res.render('studenttests');
});

router.get('/studentresults', function (req, res) {
    res.render('studentresults');
});

module.exports = router;