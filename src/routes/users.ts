import { Router } from "express";
import {
    deleteUser, getUser, getUsers, postUser, updateUser
} from "../controllers/user.controller";
import { checkJwt } from "../middleware/session";

const router = Router();

router.get('/', checkJwt, getUsers);

router.get('/:id', checkJwt, getUser);

router.post('/', checkJwt, postUser);

router.put('/:id', checkJwt, updateUser);

router.delete('/:id', checkJwt, deleteUser);



export { router };