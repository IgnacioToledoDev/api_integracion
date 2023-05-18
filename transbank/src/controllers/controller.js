const createTransaction = (req, res) => {
    let buyOrder = "O-" + Math.floor(Math.random() * 10000) + 1;
    let sessionId = "S-" + Math.floor(Math.random() * 10000) + 1;
    let amount = Math.floor(Math.random() * 1000) + 1001;
    let returnUrl =
        request.protocol + "://" + request.get("host") + "/webpay_plus/commit";

    const createResponse = await(new WebpayPlus.Transaction()).create(
        buyOrder,
        sessionId,
        amount,
        returnUrl
    );

    let token = createResponse.token;
    let url = createResponse.url;

    let viewData = {
        buyOrder,
        sessionId,
        amount,
        returnUrl,
        token,
        url,
    };
    response.render("webpay_plus/create", {
        step: "Crear Transacción",
        stepDescription:
            "En este paso crearemos la transacción con el objetivo de obtener un identificador unico y " +
            "poder en el siguiente paso redirigir al Tarjetahabiente hacia el formulario de pago",
        viewData,
    });
};

module.exports = {
    createTransaction
}