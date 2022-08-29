import { Router } from 'express';
import * as userController from '../controllers/user.controller';

const router = Router();
//Get user
router.get('/api/v1/user/:id',userController.getUser);
//Update user
router.put('/api/v1/user/:id',userController.updateDataUser);
//delete user
router.delete('/api/v1/user/:id',userController.deleteUser)
export default router;