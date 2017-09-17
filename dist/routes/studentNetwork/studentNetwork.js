'use strict';

var router = require('express').Router();

router.get('/studentnetwork', function (req, res) {
    res.render('studentnetwork');
});

module.exports = router;