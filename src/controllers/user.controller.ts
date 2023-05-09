import { Request, Response } from "express";
import { handleHttp } from "../utils/handlerHttp";
import { getAllUsers } from "../services/user.service";


const getUsers = async (req: Request, res: Response) => {
    try {
        const data = await getAllUsers();
        res.send(data);
    }
    catch (err) {
        handleHttp(res, `Oh a ocurrido un error ${err}`, err)
    };
};

const getUser = async (req: Request, res: Response) => {
    try { }
    catch (err) {
        handleHttp(res, `Oh a ocurrido un error ${err}, err`)
    };
};

const postUser = async ({ body }: Request, res: Response) => {
    try {
    }
    catch (err) {
        handleHttp(res, `Oh a ocurrido un error ${err}`, err)
    };
};

const updateUser = async (req: Request, res: Response) => {
    try { }
    catch (err) {
        handleHttp(res, `Oh a ocurrido un error ${err}`, err)
    };
};

const deleteUser = async (req: Request, res: Response) => {
    try { }
    catch (err) {
        handleHttp(res, `Oh a ocurrido un error ${err}`, err)
    };
};

export {
    getUsers,
    getUser,
    postUser,
    deleteUser,
    updateUser
}