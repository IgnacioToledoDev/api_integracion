import mercadopago from "mercadopago";

const mercadoPagoPulicKey: string | undefined = process.env.PUBLIC_KEY;
if (!mercadoPagoPulicKey) console.log('Error: public key not defined');

const mercadoPagoAccessToken: string | undefined = process.env.MERCADO_PAGO_ACCESS_TOKEN;
if (!mercadoPagoAccessToken) console.log('Error: access token not defined');



export {
    mercadoPagoAccessToken,
    mercadoPagoPulicKey
};

