'use strict';

var router = require('express').Router();

router.get('/helpcenter', function (req, res) {
    res.render('helpcenter');
});

module.exports = router;