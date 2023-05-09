import { Request, Response } from "express";
import { handleHttp } from "../utils/handlerHttp";


const getUsers = async (req: Request, res: Response) => {
    try {

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