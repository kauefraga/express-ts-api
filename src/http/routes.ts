import { Router } from 'express';
import { HelloController } from './controllers/hello';
import { DocsController } from './controllers/docs';
import { CreateUserController } from './controllers/users/create';

const router = Router();

router.get('/v1', HelloController.handler);

router.get(
  '/v1/docs',
  DocsController.handler,
);

router.post(
  '/v1/users/create',
  CreateUserController,
);

export { router };
