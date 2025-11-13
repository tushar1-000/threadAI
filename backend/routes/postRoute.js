import express from 'express'
import protect from '../middleware/authMiddleware.js'
import asyncHandler from 'express-async-handler'
import { createPost, getAllPosts, getPostById, updatePost, deletePost } from '../controllers/postController.js'


const router =  express.Router();

router.post('/', protect ,  asyncHandler(createPost));
router.get('/',  asyncHandler(getAllPosts));
router.get('/:postId',  asyncHandler(getPostById));
router.put('/:postId', protect , asyncHandler(updatePost));
router.delete('/:postId', protect , asyncHandler(deletePost));

export default router