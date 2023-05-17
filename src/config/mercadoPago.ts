import dotenv from 'dotenv';

dotenv.config();

const ACCESS_TOKEN = process.env.MERCADO_PAGO_ACCESS_TOKEN || '';
if (ACCESS_TOKEN === null) console.log('ACCESS_TOKEN IS NULL');

export {
    ACCESS_TOKEN
}