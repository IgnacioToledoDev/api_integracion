const controller = require('../controllers/controller')
const router = require('express').Router();

router.get('/test', controller.create);


module.exports = router;