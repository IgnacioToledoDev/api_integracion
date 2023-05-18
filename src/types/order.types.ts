import { Types } from "mongoose";
import { Product } from "./product.type";
import { User } from "./user.type";

export interface Order {
    //Price of the order
    price: number
    // amount of installments (cuotas)
    installaments: number
    //Array of productos of schema of mongodb colleciontion @product
    products: Types.Array<Product>
    //User of create the order
    user: User
}