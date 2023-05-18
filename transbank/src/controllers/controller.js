const WebpayPlus = require("transbank-sdk").WebpayPlus;
const asyncHandler = require("../utilis/asyncHandler");

exports.create = asyncHandler(async function (request, response, next) {
    console.log('estoy aqui')
    let buyOrder = "O-" + Math.floor(Math.random() * 10000) + 1;
    let sessionId = "S-" + Math.floor(Math.random() * 10000) + 1;
    let amount = Math.floor(Math.random() * 1000) + 1001;
    let returnUrl =
        request.protocol + "://" + request.get("host") + "/webpay_plus/commit";

    const createResponse = await (new WebpayPlus.Transaction).create(
        buyOrder,
        sessionId,
        amount,
        returnUrl
    );

    let token = createResponse.token;
    let url = createResponse.url;

    console.log(token, url, createResponse);
});

