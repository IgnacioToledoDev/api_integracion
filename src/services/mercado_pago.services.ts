import mercadopago from 'mercadopago';
import { ACCESS_TOKEN } from '../config/mercadoPago';
import { urls } from '../utils/callbackUrl';

/**Configuration */
mercadopago.configure({
    access_token: `${ACCESS_TOKEN}`
});

/**
 *
 * @description create a user for mercadopago checkout pro using the email user of /api/v1/auth/register -> user.email
 * @param {(string | undefined)} email
 * @return {*} 
 */
const createUserMercadoPago = async (email: string | undefined) => {
    if (email === undefined && email === null) console.log('Email is undefined');

    const response = mercadopago.customers.create({ email })
        .then((customer) => {
            return customer;
        }).catch((err) => { console.error(err) });
    return response;
};

/**
 * @description search email of user when he/she is loggin in the api
 * @param {(string | undefined)} email_user
 * @return {*} 
 */
const searchUserMercadoPago = async (email_user: string | undefined) => {
    if (email_user === undefined && email_user === null) console.log('Email is undefined');

    const filter = { email: email_user };
    const response = mercadopago.customers.search({
        qs: filter
    }).then((customer) => { console.log('Encontrado con exito ', email_user) })
        .catch((err) => {
            console.error("ERROR EN BUSCAR EMAIL MERCADO", err);
        });
    return response;
};

const createPreferenceMercadoPago = async (preferences: any) => {
    const preference = await mercadopago.preferences.create(preferences).then((pref: any) => {
        return pref;
    })
    return preference
};

const createPaymentMercadoPago = async (email_user: string, payment: string, total_payment: number, installments_payment: number, order: any) => {
    const payment_data = {
        payment_method_id: payment,
        transaction_amount: total_payment,
        installments: installments_payment,
        items: [],
        payer: {
            email: email_user
        },
        back_urls: {
            "success": urls.success,
            "failure": urls.failure,
            "pending": urls.pending
        }
    };
    console.log("payment mercado pago aqui", payment_data);
    const createPreference = await createPreferenceMercadoPago(payment_data);
    await mercadopago.payment.create(payment_data)
        .then((data) => {
            return {
                "message": "Created",
                "result": data
            };
        }).catch((err) => {
            console.error("error en mercadopago.payment " + err);
        })
        .finally(() => {
            mercadopago.configurations.setAccessToken(`${ACCESS_TOKEN}`);
        });
};

const getAllPaymentMethodId = async () => {
    const mercadopago = require('mercadopago');

    const data = await mercadopago.payment_methods.listAll();
    const payment_methods = data.body;

    const response = { data, payment_methods }
    return response;
}


export {
    createUserMercadoPago,
    searchUserMercadoPago,
    createPaymentMercadoPago,
    getAllPaymentMethodId
};
