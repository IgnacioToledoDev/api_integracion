import dotenv from 'dotenv';
import { connect } from "mongoose";

/**Config dotenv */
dotenv.config();

/**Connection to database */
/**
 * @description Connect with mongo database
 */
async function dbConnect(): Promise<void> {
    const DB_URI = <string>process.env.DB_URI;
    await connect(DB_URI);
};




export default dbConnect;