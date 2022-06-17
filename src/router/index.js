const express = require('express');
const router = express.Router();

const users = require('./users');

router.use('/users', users);

module.exports = router;

// so, if I try to import express(require) in users.ts I get an error that it is already
//declareed here in index.ts. Why is this like this? Are typescript files modules inside a single directory?
//why is it not the same with .js files?