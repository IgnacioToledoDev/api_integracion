const { createTransaction } = require('../controllers/controller');

const router = require('express').Router();

router.get('/test', createTransaction);


module.exports = router;