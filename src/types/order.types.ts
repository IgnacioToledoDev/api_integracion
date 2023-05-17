import { Types, SchemaTypeOptions } from "mongoose";
import { Product } from "./product.type";
import { User } from "./user.type";

export interface Order {
    price: number
    installaments: number
    products: Types.Array<Product>
    user: User
}