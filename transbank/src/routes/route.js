const WebpayPlus = require("transbank-sdk").WebpayPlus;
const { Options, IntegrationApiKeys, Environment, IntegrationCommerceCodes } = require("transbank-sdk");
const router = require('express').Router();


router.post('/test', async (request, response, next) => {
    try{
        const price = request.body.amount;
        let buyOrder = "O-" + Math.floor(Math.random() * 10000) + 1;
        let sessionId = "S-" + Math.floor(Math.random() * 10000) + 1;
        let amount = price || Math.floor(Math.random() * 1000) + 1001;
        let returnUrl = 'http://localhost:8080/api/v1/order'
        const tx = await WebpayPlus.Transaction(new Options(IntegrationCommerceCodes.WEBPAY_PLUS, IntegrationApiKeys.WEBPAY, Environment.Integration));
        const createResponse = await (new WebpayPlus.Transaction).create(
        buyOrder,
        sessionId,
        amount,
        returnUrl
        );

        const token = createResponse.token;
        const url = createResponse.url;

        const data = {
            buyOrder,
            amount,
            token,
            url
        };
        console.log(data);

        return data;
    }
        catch (error) {
            console.error(error);
            response.status(500).json({ error: 'Error al crear la transacción' });
          }
    });
router.get('/test', async (request, response, next) => {
        try{
            const price = request.body.amount;
            let buyOrder = "O-" + Math.floor(Math.random() * 10000) + 1;
            let sessionId = "S-" + Math.floor(Math.random() * 10000) + 1;
            let amount = price || Math.floor(Math.random() * 1000) + 1001;
            let returnUrl = 'http://localhost:8080/api/v1/order'
            const tx = await WebpayPlus.Transaction(new Options(IntegrationCommerceCodes.WEBPAY_PLUS, IntegrationApiKeys.WEBPAY, Environment.Integration));
            const createResponse = await (new WebpayPlus.Transaction).create(
            buyOrder,
            sessionId,
            amount,
            returnUrl
            );
    
            const token = createResponse.token;
            const url = createResponse.url;
    
            const data = {
                buyOrder,
                amount,
                token,
                url
            };
            console.log(data);
    
            return data;
        }
            catch (error) {
                console.error(error);
                response.status(500).json({ error: 'Error al crear la transacción' });
              }
        });


module.exports = router;