import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
// import mercadopago from "mercadopago";

/**MODULES IMPORTS*/
import { router } from './routes/index';
import db from './config/database'
// import { mercadoPagoAccessToken } from './config/mercadopago';

/**GLOBALS CONFIGS */
const app = express();

// mercadopago.configurations.setAccessToken(mercadoPagoAccessToken);

dotenv.config();
const PORT = process.env.PORT || 4200;

/**DATABASE */
db()
    .then(() => console.log('Connexion ready'))
    .catch((err) => console.log(`Oh a ocurrido un error ${err}`));

/**App use */
app.use(bodyParser.json());
app.use(cors());
app.use(router)

app.listen(PORT, () => console.log(`Server on port ${PORT}`));