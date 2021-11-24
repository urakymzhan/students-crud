const express = require('express');
const router = express.Router();

router.use('/api/v1/students', require('./students.routes'));

module.exports = router;
