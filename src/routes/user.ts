import { Router } from 'express'
import userController from '../controllers/user.controller'
const router: Router = Router()
router.get('/', userController.getUsers)
router.post('/', userController.postUser)

export default router
