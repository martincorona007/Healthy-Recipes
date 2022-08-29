import { Router } from 'express';
import * as userController from '../controllers/user.controller';

const router = Router();
//Get user
router.get('/api/v1/user/:id',userController.getUser);

export default router;