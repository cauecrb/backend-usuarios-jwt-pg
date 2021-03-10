import { Request, Response } from 'express';
import { getRepository } from 'typeorm'
import User from '../models/user';

export default {

    //controller para listar os usuarios do banco
    async index(request: Request, response: Response){
        const usersRepository = getRepository(User);

        const users = await usersRepository.find();

        return response.json(users);
    },

    //controller para listar um usuario
    async show(request: Request, response: Response){
        const {id} = request.params;
        const usersRepository = getRepository(User);

        const user = await usersRepository.findOneOrFail(id);

        return response.json(user);
    },

    async delete(request: Request, response: Response){
        const {id} = request.params;
        const usersRepository = getRepository(User);

        await usersRepository.delete(id);

        const users = await usersRepository.find();

        return response.json(users);
    },

    //controller para criar um usuario no banco
    async create(request: Request, response: Response) {
        const{
            nome,
            telefone,
            email,
            idade,
            peso,
            etnia
        } = request.body;
    
        const usersRepository = getRepository(User);
    
        const user = usersRepository.create({
            nome,
            telefone,
            email,
            idade,
            peso,
            etnia,
        });
    
        await usersRepository.save(user);
    
        return response.status(201).json(user);
    }
};