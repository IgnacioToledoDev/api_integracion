import { WebpayPlus } from 'transbank-sdk';
import { Order } from './../types/order.types';
import OrderModel from "../models/order.model";

/**
 *
 *  @description create a model of Order
 * @param {Order} order
 * @return {Order | undefined} 
 */
const insertOrder = async (order: Order) => {
    const response = await OrderModel.create(order);
    const createTransaction = await (new WebpayPlus.Transaction()).create(
        order,
    );
    console.log(createTransaction);
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