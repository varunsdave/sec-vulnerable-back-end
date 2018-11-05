
export interface RegisteredUser {
    userId: string;
    userName: string;
}

export interface PrivateUserInfo extends RegisteredUser {
    password: string;
}

export interface UserResponseModel extends RegisteredUser {
    token: string;
}

export interface UserInputModel {
    username: string;
    password: string;
}

export interface UserRegisterModel extends UserInputModel {
    userId: string;
}