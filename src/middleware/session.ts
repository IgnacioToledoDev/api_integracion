import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/handlerJWT";

const checkJwt = (req: Request, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop();
        const verify = verifyToken(`${jwt}`);
        if (!verify) res.send("NO valido").status(401);
        console.log('checkiando')
        next();
    }
    catch (err) {
        res.send('Sesion no valida').status(400)
    };
};

export { checkJwt };