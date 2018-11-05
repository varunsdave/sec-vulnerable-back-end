import { PrivateUserInfo, RegisteredUser, UserResponseModel } from "../models/user.model";

const registeredUsers: PrivateUserInfo [] = [];

export function isValidUser(userId: string, password: string): boolean {
    const pv: PrivateUserInfo = registeredUsers.find( user => {
        return user.userId === userId;
    });

    if (pv) {
        return pv.password === password;
    } else {
        return false;
    }
}

export function addUser(username: string, userId: string, password: string): boolean {
        const pv: PrivateUserInfo = registeredUsers.find( user => {
            return user.userId == userId;
        });

        if (pv) {
            console.log('could not add');
            return false;
        } else {
            registeredUsers.push( {
                userName: username,
                userId: userId,
                password: password
            });
            return true;
        }
    }

    export function getUserInfo(userId: string): RegisteredUser {
        const pv: PrivateUserInfo = registeredUsers.find( user => {
            return user.userId == userId;
        });

        return {
            userId: pv.userId,
            userName: pv.userName
        }
    }

    export function getAllUsers(): UserResponseModel[] {
        const users: UserResponseModel []  =  [];
        registeredUsers.forEach((user) => {
            console.log(JSON.stringify(user));
            users.push( {
                token: user.userId + ':'  + Math.random().toString(),
                userId: user.userId,
                userName: user.userName
            });
        });

        return users;
    };
