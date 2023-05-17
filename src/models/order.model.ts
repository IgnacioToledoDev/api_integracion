import { Order } from './../types/order.types';
import { Schema, SchemaTypeOptions, Types, model } from "mongoose";

const OrderSchema = new Schema<Order>(
    {
        price: {
            type: Number,
            required: true
        },
        installaments: {
            type: Number,
            required: true
        },
        user: {
            required: false,
            type: Schema.Types.Mixed
        },
        products: {
            required: true,
            type: [{ name: String, description: String, category: String, price: Number }]
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const OrderModel = model('Orders', OrderSchema);

export default OrderModel;