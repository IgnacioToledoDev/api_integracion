import { Router } from "express";
import {
    deleteProduct, getProduct, getProducts, postProduct, updateProduct
} from "../controllers/product.controller";
import { checkJwt } from "../middleware/session";


const router = Router();


router.get('/', checkJwt, getProducts);

router.get('/:id', checkJwt, getProduct);

router.post('/', checkJwt, postProduct);

router.put('/:id', checkJwt, updateProduct);

router.delete('/:id', checkJwt, deleteProduct);



export { router };