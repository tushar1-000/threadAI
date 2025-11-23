import express from 'express'
import asyncHandler from 'express-async-handler'
import { signupUser, signinUser , logoutUser , currentUser} from '../controllers/authController.js'
import protect from '../middleware/authMiddleware.js';


const router =  express.Router();


router.post('/signup' ,asyncHandler( signupUser ));
router.post('/signin' , asyncHandler(signinUser ));
router.get('/logout' , logoutUser );
router.get('/me' , protect,  asyncHandler(currentUser))


export default router