import { Request, Response } from "express";
import { handleHttp } from "../utils/handlerHttp";
import { deleteOrderByID, getAllOrders, getOrderByID, insertOrder, updateOrderByID } from "../services/order.services";

/**
 * @description controller of get all orders
 * @param {Request} req
 * @param {Response} res
 */
const getOrders = async (req: Request, res: Response) => {
    try {
        const data = await getAllOrders();
        res.send(data || 'data not found');
    }
    catch (err) {
        handleHttp(res, `Oh a ocurrido un error ${err}`);
    };
};

/**
 * @description controller get order by ID
 * @param {Request} { params }
 * @param {Response} res
 */
const getOrder = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const data = await getOrderByID(id);
        res.send(data);
    }
    catch (err) {
        handleHttp(res, `Oh a ocurrido un error ${err}`);
    };
};

/**
 * @description controller post order
 * @param {Request} { body }
 * @param {Response} res
 */
const postOrder = async ({ body }: Request, res: Response) => {
    try {
        const response = await insertOrder(body);
        res.send(response);
    }
    catch (err) {
        handleHttp(res, `Oh a ocurrido un error ${err}`);
    };
};

/**
 * @description controller update order by ID
 * @param {Request} { params, body }
 * @param {Response} res
 */
const updateOrder = async ({ params, body }: Request, res: Response) => {
    try {
        const { id } = params
        const data = await updateOrderByID(id, body);
        res.send(data);
    }
    catch (err) {
        handleHttp(res, `Oh a ocurrido un error ${err}`);
    };
};

/**
 * @description controller delete order by ID
 * @param {Request} { params }
 * @param {Response} res
 */
const deleteOrder = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params
        const response = await deleteOrderByID(id);
        res.send(response);
    }
    catch (err) {
        handleHttp(res, `Oh a ocurrido un error ${err}`);
    };
};


export {
    getOrder,
    getOrders,
    postOrder,
    updateOrder,
    deleteOrder
}