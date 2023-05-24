const services = require('../services/transaction.js')

exports.create = (req, res) => {
    const { buyOrder, amount } = req.body;
    const data = services.create();
    res.json(data);
};

