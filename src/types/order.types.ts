import { Types } from "mongoose";
import { Product } from "./product.type";

export interface Order {
    date: Date;
    products: Types.Array<Product>
    user: object
}