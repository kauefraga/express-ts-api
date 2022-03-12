import HelloController from '@controllers/hello'
import { Router } from 'express'

const router = Router()

router.get('/', HelloController.sayHello)

export default router
