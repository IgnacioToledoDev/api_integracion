import { Product } from '../types/product.type';
import { Order } from './../types/order.types';
import { Schema, Types, model } from "mongoose";

const OrderSchema = new Schema<Order>(
    {
        price: {
            required: true,
            type: Number
        },
        user: {
            required: true,
            type: Object,
        },
        products: {
            required: true,
            type: [{ name: String, description: String, category: String, price: Number, stock: Number }]
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const OrderModel = model('Orders', OrderSchema);

export default OrderModel;