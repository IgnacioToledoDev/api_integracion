//Imports
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

//ENVIROMENT
const PORT = process.env.PORT || 4200;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Import routes
app.use('/transbank', require('./routes/route'));

//Server
app.listen(PORT, () => { console.log(`Server transbank on  http://localhost:${PORT}`) });