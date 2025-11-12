import express from 'express'
import protect from '../middleware/authMiddleware.js'
import { signupUser, signinUser , logoutUser} from '../controllers/userController.js'


const router =  express.Router();


router.post('/signup' ,signupUser );
router.post('/signin' ,signinUser );
router.get('/logout' ,logoutUser );
router.get('/auth' , protect, (req,res)=>{
    res.status(200).json({
        success: true,
        message: "Authorized",
    });
} );


export default router