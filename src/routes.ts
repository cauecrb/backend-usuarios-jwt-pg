import { Router } from 'express';
import UsersController from './controllers/UsersController';
import EndController from './controllers/EnderecosController';
import AuthController from './controllers/AuthController';
import AuthMiddleware from './middlewares/authMiddl';

const route = Router();

//rota para criar um usuario
route.post('/createusers', UsersController.create);
//rota para listar os usuarios
route.get('/listusers', AuthMiddleware, UsersController.index);
//rota para listar um unico usuario
route.get('/user/:id', UsersController.show);
//rota para deletar um usuario
route.delete('/deleteuser', AuthMiddleware, UsersController.delete);


//rotas para os endereços
//rota para criar um endereço
route.post('/createend', EndController.create);
//rota para listar todos os endereços
route.get('/listend', EndController.index);
//rota para listar um unico endereço
route.get('/end/:id', EndController.show);
//rota para deletar um endereco
route.delete('/deleteend', AuthMiddleware, EndController.delete);

//rota para autenticação
route.post('/auth', AuthController.authenticate);
export default route;