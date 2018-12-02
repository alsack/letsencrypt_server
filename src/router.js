const express = require('express');
const path = require('path');

router = express.Router();

var publicDir = path.resolve(__dirname, 'public/.well-known');
router.use('/', express.static(publicDir));

module.exports = router;