import { Request, Response } from "express";
import { deleteProductByID, getAllProducts, getProductByID, insertProduct, updateProductByID } from "../services/product.service";
import { handleHttp } from "../utils/handlerHttp";


const getProducts = async (req: Request, res: Response) => {
    try {
        const data = await getAllProducts();
        res.send(data);
    }
    catch (err) {
        handleHttp(res, `Oh a ocurrido un error ${err}`);
    };
};
const getProduct = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const data = await getProductByID(id);
        res.send(data);
    }
    catch (err) {
        handleHttp(res, `Oh a ocurrido un error ${err}`);
    };
};
const postProduct = async ({ body }: Request, res: Response) => {
    try {
        const product = insertProduct(body);
        res.send(product);
    }
    catch (err) {
        handleHttp(res, `Oh a ocurrido un error ${err}`);
    };
};
const updateProduct = async ({ params, body }: Request, res: Response) => {
    try {
        const { id } = params
        const data = await updateProductByID(id, body);
        res.send(data);
    }
    catch (err) {
        handleHttp(res, `Oh a ocurrido un error ${err}`);
    };
};
const deleteProduct = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params
        const data = await deleteProductByID(id);
        res.send(data);
    }
    catch (err) {
        handleHttp(res, `Oh a ocurrido un error ${err}`);
    };
};


export {
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
    postProduct
}