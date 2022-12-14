import { Router } from 'express';
import authMiddleware from './app/middlewares/auth';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';


const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.get('/users/del/:id', UserController.del);


//todas rotas abaixo desse middleware precisa estar autenticado
routes.use(authMiddleware)
routes.put('/users', UserController.update);
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.get);



export default routes;