import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

//pegando os dados do login
interface TokenPayload{
    id: string;
    iat:number;
    exp: number;
}

export default function authMiddl(request:Request, response: Response, next:NextFunction){
    const { authorization } = request.headers;

    if(!authorization){
        return response.sendStatus(401);
    }

    const token = authorization.replace('Bearer', '').trim();

    try{ 
        const data = jwt.verify(token, 'tokensecreto');
        const { id } = data as TokenPayload;

        request.userId = id;
        return next();
    } catch(err){
        return response.sendStatus(401);
    }
} 