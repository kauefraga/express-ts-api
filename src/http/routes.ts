import { Router } from 'express';
import { HelloController } from './controllers/hello';
import { CreateUserController } from './controllers/users/create';

const router = Router();

router.get('/v1', HelloController);

router.post(
  '/v1/users/create',
  CreateUserController,
);

export { router };
