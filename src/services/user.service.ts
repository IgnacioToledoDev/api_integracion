import UserModel from "../models/user.model";

const getAllUsers = async () => {
    const response = await UserModel.find();
    return response
};

export {
    getAllUsers
}