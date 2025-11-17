import express from 'express'
import protect from '../middleware/authMiddleware.js'
import asyncHandler from 'express-async-handler'
import { createPost, getPostById, updatePost, deletePost, getPaginatedPosts } from '../controllers/postController.js'


const router =  express.Router();

router.post('/', protect ,  asyncHandler(createPost));

router.get('/:postId',  asyncHandler(getPostById));
router.put('/:postId', protect , asyncHandler(updatePost));
router.delete('/:postId', protect , asyncHandler(deletePost));
router.get('/' , asyncHandler(getPaginatedPosts))

export default router