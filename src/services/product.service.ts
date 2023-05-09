import ProductModel from "../models/product.model";
import { Product } from "../types/product.type";

/**
 *  @description Insert data to create a product of the model ProductModel
 * @param {Product} product
 * @return {Product}
 */
const insertProduct = async (product: Product) => {
    const response = await ProductModel.create(product);
    return response;
};

/**
 * @description get all products of the database
 * @return Array 
 */
const getAllProducts = async () => {
    const response = await ProductModel.find();
    return response;
};

/**
 *@description get product by id of the database
 * @param {string} id
 * @return {Object | undefined}
 */
const getProductByID = async (id: string) => {
    const response = await ProductModel.findOne({ _id: id });
    return response;
};

/**
 * @description update a element (Product) by id of the database
 * @param {string} id
 * @param {Product} product
 * @return {Product} 
 */
const updateProductByID = async (id: string, product: Product) => {
    const response = await ProductModel.findOneAndUpdate(
        { _id: id },
        product,
        {
            new: true
        });
    return response;
};

/**
* @description delete element (Product) of the database
 * @param {string} id
 * @return {*} 
 */
const deleteProductByID = async (id: string) => {
    const response = await ProductModel.findOneAndRemove({ _id: id });
    return response;
};

export {
    getAllProducts,
    getProductByID,
    updateProductByID,
    insertProduct,
    deleteProductByID
}