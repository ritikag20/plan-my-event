const express = require('express');

const router = express.Router();

console.log('router loaded');


router.use('/', require('./blogs'));

// for any further routes, access from here
// router.use('/routerName', require('./routerfile));


module.exports = router;