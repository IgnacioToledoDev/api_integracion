import { Product } from './../types/product.type';
import { Schema, model } from "mongoose";

const ProductSchema = new Schema<Product>(
    {
        name: {
            required: true,
            type: String
        },
        description: {
            type: String
        },
        price: {
            required: true,
            type: Number
        },
        stock: {
            required: true,
            type: Number
        },
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const ProductModel = model('Products', ProductSchema);

export default ProductModel;