import { Router } from 'express';

import AddressController from './app/controllers/AddressController';
import PermissionsController from './app/controllers/PermissionsController';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/user', UserController.store);

export default routes;
