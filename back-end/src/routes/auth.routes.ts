import { Router } from "express";
import * as authController from '../controllers/auth.controller';

const router = Router();

router.post('/api/v1/auth/signup',authController.singUpUser);//create account user - sing up
router.post('/api/v1/auth/singin',authController.singInUser);//sign in

export default router;

