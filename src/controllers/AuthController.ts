import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import jwt from 'jsonwebtoken';

import Login from '../models/user';

class AuthController{
    async authenticate(request: Request, response: Response){
        const repository = getRepository(Login);
        const { email } = request.body;

        const login = await repository.findOneOrFail({where: {email}});

        if (!login){
            return response.sendStatus(401);
        }

        const token = jwt.sign({id: login.id}, 'tokensecreto', { expiresIn: '10min' });

        return response.json({
            login,
            token,
        });

    }
}

export default new AuthController();