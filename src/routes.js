const { Router } = require('express');

import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import ProviderController from './app/controllers/ProviderController';

import FileController from './app/controllers/FileController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth'

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

/** AUTHENTICATED
 * if it's below the middleware auth, send the token in the request
 */
routes.use(authMiddleware);

routes.put('/users', authMiddleware,UserController.update);
routes.get('/providers', authMiddleware,ProviderController.index);

routes.post('/files', upload.single('file'), FileController.store);

module.exports = routes;
