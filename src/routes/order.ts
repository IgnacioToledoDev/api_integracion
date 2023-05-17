import { Router } from "express";
import { checkJwt } from "../middleware/session";
import {
    getOrder,
    deleteOrder,
    getOrders,
    updateOrder,
    postOrder
} from "../controllers/order.controller";

const router = Router();

router.post('/', postOrder)

router.get('/', getOrders)

router.get('/id', checkJwt, getOrder)

router.put('/:id', checkJwt, updateOrder)

router.delete('/:id', checkJwt, deleteOrder);

export { router };