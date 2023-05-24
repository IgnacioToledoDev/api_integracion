import { Order } from './../types/order.types';
import OrderModel from "../models/order.model";
import dotenv from 'dotenv'
import { Request, Response, Router, response } from "express";
import axios from 'axios';

const router = Router();

dotenv.config();

const TRANSBANKURL = 'http://localhost:4500/transbank/test';
// const TRANSBANKURL = process.env.TRANSBANK_URL || undefined;
/**
 *
 * @description create a model of Order
 * @param {Order} order
 * @return {Order | undefined}
 */
const insertOrder = async (order: Order) => {
    const amount = order.price
    await getTransbank(amount);
    // const Order = await OrderModel.create(order);
    // const response = {
    //     Order, transbank
    // };
    // return message;

}

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

const getTransbank = async (amount: number) => {
    if (TRANSBANKURL === undefined) {
        const response = "Ah ocurrido un error al intentar acceder a un servicio";
        return response;
    }

    axios.post(TRANSBANKURL, `${amount}`).then(res => {
        console.log(res);
    })
    .catch(err => {
        console.error(err);
    })
};

export {
    insertOrder,
    getAllOrders,
    getOrderByID,
    updateOrderByID,
    deleteOrderByID
};