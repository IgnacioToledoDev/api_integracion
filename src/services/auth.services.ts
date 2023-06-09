import UserModel from '../models/user.model';
import { generateToken } from '../utils/handlerJWT';
import { encrypt, verified } from '../utils/handlerPass';
import { Auth, User } from './../types/user.type';

const registerNewUser = async ({ email, password, username }: User) => {
    const checkIs = await UserModel.findOne({ email });
    if (checkIs) return 'Already_user';

    const passHash = await encrypt(password);
    const newUser = await UserModel.create(
        { email, password: passHash, username }
    );

    return newUser;
};

const loginUser = async ({ email, password }: Auth) => {
    const checkIs = await UserModel.findOne({ email });
    if (!checkIs) return 'Null';

    const passwordHash = checkIs.password;
    const isCorrect = await verified(password, passwordHash);

    if (!isCorrect) return "PASSWORD_INCORRECT"

    const token = generateToken(checkIs.email);
    const data = {
        token,
        user: checkIs
    };
    return data;
};

export { registerNewUser, loginUser, };