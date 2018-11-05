import { Router } from "express";
import { Route, Get, Post} from 'tsoa';

@Route('token')
export class TokenController {
    @Get('')
    public async getToken(): Promise<Object> {
        return Promise.resolve({
            "token": "str1234" + Math.random ().toString()
        });
    }

    @Get('exposed/{tenantId}')
    public async getExposed(tenantId: string): Promise<Object> {

        return Promise.resolve({
            "token": tenantId +  Math.random ().toString()
        });
    }
}