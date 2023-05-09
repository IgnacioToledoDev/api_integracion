/**To handler all error on controllers.ts */
import { Response } from "express"

/**
 * @description Get the error of the methods HTTP and return res.send({error}.status(404)) and on the console the errorRaw of the problem
 * @kind Handler
 * @param {Response} res
 * @param {string} error
 * @param {*} [errorRaw]
 */
const handleHttp = (res: Response, error: string, errorRaw?: any) => {
    console.log(errorRaw);
    res.send(error).status(404);
};


export { handleHttp };