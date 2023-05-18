const router = require('express').Router();

router.get('/test', (req, res) => {
    res.send('hola mundo')
});


module.exports = router;