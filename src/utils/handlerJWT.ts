import { sign, verify } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || 'token_test';


/**
 * @description generate token for the user
 * @kind handler
 * @param {string} id
 * @return {string} 
 */
const generateToken = (id: string) => {
    const jwt = sign({ id }, JWT_SECRET);
    return jwt;
};

/**
 *
 * @description verify the token
 * @kind handler
 * @param {string} jwt
 * @return {Boolean} 
 */
const verifyToken = (jwt: string) => {
    const isOk = verify(jwt, JWT_SECRET);
    return isOk
};


export { generateToken, verifyToken }