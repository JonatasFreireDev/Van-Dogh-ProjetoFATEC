import { Router } from 'express';

import AddressController from './app/controllers/AddressController';
import ClientController from './app/controllers/ClientController';
import PermissionsController from './app/controllers/PermissionsController';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/user', UserController.store);
routes.put('/user/:id', UserController.update);
routes.delete('/user/:id', UserController.delete);

routes.post('/client', ClientController.store);

export default routes;
