import express from 'express';
import { registerController } from '../controllers/authControllers/registerController.js';
import { loginController } from '../controllers/authControllers/loginController.js';
import { logoutController } from '../controllers/authControllers/logoutController.js';
import { updatePasswordController } from '../controllers/authControllers/updatePasswordController.js';

const AuthRouter=express.Router();

AuthRouter.post('/register',registerController)

AuthRouter.post('/login',loginController)  

AuthRouter.post('/logout',logoutController)  

AuthRouter.post('/forgot-password',updatePasswordController)

export default AuthRouter;


