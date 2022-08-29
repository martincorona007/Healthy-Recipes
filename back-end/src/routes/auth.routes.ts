import { Router } from "express";
import * as authController from '../controllers/auth.controller';

const router = Router();

//create account user
router.post('/api/v1/auth/signup',authController.singUpUser);
export default router;

