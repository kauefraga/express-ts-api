import { Router } from 'express';
import { HelloController } from '@controllers/hello';
import { DocsController } from '@controllers/docs';

const router = Router();

router.get(['/v1', '/api/v1'], HelloController.handler);

router.get(
  ['/v1/docs', '/api/v1/docs'],
  DocsController.handler
);

export { router };
