import { Order } from './../types/order.types';
import OrderModel from "../models/order.model";
import dotenv from 'dotenv'
import http from 'http';
dotenv.config();

const TRANSBANKURL = process.env.TRANSBANK_URL || undefined;

const httpOptions = {
    hostname: 'localhost',
    PORT: 4500,
    path: '/test',
    method: 'GET'
};
/**
 *
 * @description create a model of Order
 * @param {Order} order
 * @return {Order | undefined}
 */
const insertOrder = async (order: Order) => {
    if (TRANSBANKURL === undefined) {
        const response = "Ah ocurrido un error";
        return response;
    };
    const request = http.request(httpOptions, (response) => {
        let data = '';
        console.log(httpOptions.PORT);
        response.on('data', (chunk) => {
            data += chunk;
        });

        response.on('end', () => {
            // Realiza cualquier operación necesaria con la respuesta del servidor
            const response = 'Petición exitosa';
            console.log(data);
            return response;
        });
    });

    request.on('error', (error) => {
        const errorMsg = 'Error llamando a web pay'
        console.error(error);
        return errorMsg
    });
    request.end();
    const response = await OrderModel.create(order);
    return response;
};

/**
 * @description get all Orders
 * @return {Array of Order} 
 */
const getAllOrders = async () => {
    const response = await OrderModel.find();
    return response;
};

/**
 *
 * @description get Order by id
 * @param {string} id
 * @param {Order} order
 * @return {Order} 
 */
const getOrderByID = async (id: string) => {
    const response = await OrderModel.findOne({ _id: id });
    return response;
};

/**
 * @description get a order and update the order
 * @param id 
 * @returns new Order
 */
const updateOrderByID = async (id: string, order: Order) => {
    const response = await OrderModel.findOneAndUpdate({ _id: id }, order);
    return response;
};

/**
 *@description get a order and delete this orden
 * @param {string} id
 * @return {*} 
 */
const deleteOrderByID = async (id: string) => {
    const response = await OrderModel.findOneAndDelete({ _id: id });
    return response;
};

export {
    insertOrder,
    getAllOrders,
    getOrderByID,
    updateOrderByID,
    deleteOrderByID
};