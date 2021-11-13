const router = require('express').Router();

router.use('/', require('./CRUD'));

module.exports = router;