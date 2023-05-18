import { Types } from "mongoose";
import { Product } from "./product.type";
import { User } from "./user.type";

export interface Order {
    products: Types.Array<Product>
    user: User
    price: number
}