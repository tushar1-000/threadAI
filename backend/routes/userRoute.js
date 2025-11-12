import express from 'express'
import protect from '../middleware/authMiddleware.js'
import asyncHandler from 'express-async-handler'
import { signupUser, signinUser , logoutUser} from '../controllers/userController.js'


const router =  express.Router();


router.post('/signup' ,asyncHandler( signupUser ));
router.post('/signin' , asyncHandler(signinUser ));
router.get('/logout' , logoutUser );


export default router