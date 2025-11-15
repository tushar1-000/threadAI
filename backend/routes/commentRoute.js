import express from 'express'
import asyncHandler from 'express-async-handler'
import { getAllCommentsByPostId, createComment, deleteComment, updateComment  } from '../controllers/commentController.js';
import protect from '../middleware/authMiddleware.js';
const route = express.Router();


route.get('/posts/:postId/comments',asyncHandler(getAllCommentsByPostId));
route.post('/posts/:postId/comments',protect , asyncHandler(createComment));
route.delete('/comments/:commentId',protect , asyncHandler(deleteComment));
route.put('/comments/:commentId',protect , asyncHandler(updateComment));

export default route
