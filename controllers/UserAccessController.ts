import { Route, Get, Request, Post, Body } from "tsoa";
import { UserResponseModel, UserInputModel,  UserRegisterModel  } from '../models/user.model';
import { isValidUser, addUser, getAllUsers, getUserInfo } from '../services/db.service';

@Route('authenticate')
export class UserAccessController {
 
    @Post('register')
    public async registerUser(@Body() req: UserRegisterModel ): Promise<boolean> {
        const added = addUser(req.username, req.userId, req.password);
        if (added) {
            console.log(added);
            return Promise.resolve(added); 
        } else {
            throw new Error('Duplicate user info');
        }
       
    }

    @Post()
    public async loginUser(@Body() body: UserInputModel): Promise<UserResponseModel> {
     
        const user = isValidUser(body.username, body.password);

        if (user) {
            const u = getUserInfo(body.username);
            return Promise.resolve({
                userName: u.userName,
                userId: u.userId,
                token: u.userId + ':' + Math.random().toString()
            });
        } else {
            throw new Error ('Invalid user');
        }
        // return;
    }

    @Get()
    public async getUsers(): Promise <UserResponseModel[]> {

        return Promise.resolve(getAllUsers());
    }
}

