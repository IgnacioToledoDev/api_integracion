import { Schema, Types, model, Model } from "mongoose"
import { User } from "../types/user.type"

const UserSchema = new Schema<User>(
    {
        username: {
            required: true,
            type: String
        },
        email: {
            unique: true,
            required: true,
            type: String
        },
        password: {
            required: true,
            type: String
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const UserModel = model("Users", UserSchema);

export default UserModel;