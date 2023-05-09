import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth.services";


const registerCtrl = async ({ body }: Request, res: Response) => {
    const response = await registerNewUser(body);
    res.send(response);
};

const loginCtrl = async ({ body }: Request, res: Response) => {
    const { email, password } = body;
    const response = await loginUser({ email, password });

    if (response === 'PASSWORD_INCORRECT') res.send(response).status(403);

    res.send(response);
};

export { loginCtrl, registerCtrl };