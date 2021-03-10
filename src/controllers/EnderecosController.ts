import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Endereco from '../models/endereco';

export default {

    //controller para listar os endereços do banco
    async index(request: Request, response: Response){
        const enderecosRepository = getRepository(Endereco);

        const enderecos = await enderecosRepository.find();

        return response.json(enderecos);
    },

    //controller para listar um endereço
    async show(request: Request, response: Response){
        const {id} = request.params;
        const enderecosRepository = getRepository(Endereco);

        const endereco = await enderecosRepository.findOneOrFail(id);

        return response.json(endereco);
    },

    async delete(request: Request, response: Response){
        const {id} = request.params;
        const enderecosRepository = getRepository(Endereco);

        await enderecosRepository.delete(id);

        const enderecos = await enderecosRepository.find();

        return response.json(enderecos);
    },


    //controller para criar um usuario no banco
    async create(request: Request, response: Response) {
        const{
            rua,
            numero,
            complemento,
            cep,
            cidade,
            estado
        } = request.body;
    
        const enderecosRepository = getRepository(Endereco);
    
        const endereco = enderecosRepository.create({
            rua,
            numero,
            complemento,
            cep,
            cidade,
            estado,
        });
    
        await enderecosRepository.save(endereco);
    
        return response.status(201).json(endereco);
    }
};