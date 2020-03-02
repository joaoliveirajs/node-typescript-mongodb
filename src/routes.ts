import { Router } from 'express';

import UserController from './controllers/UserController';

const routes = Router();

routes.get('/', (req, res) => res.redirect('/users'));

routes.delete('/users/:id', UserController.destroy);
routes.get('/users/:id', UserController.show);
routes.get('/users', UserController.index);
routes.patch('/users', UserController.update);
routes.post('/users', UserController.store);

export default routes;
