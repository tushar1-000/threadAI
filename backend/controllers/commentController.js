import Comment from "../models/CommentModel.js";
import { commentSchema } from "../validations/commentValidation.js";
import Post from "../models/PostModel.js";

export async function getAllCommentsByPostId(req, res) {
  const { postId } = req.params;
  if (!postId) {
    return res.status(400).json({ success: false, message: "PostId missing" });
  }
  const page = Number( req.query.page )|| 1;
  const limit = Number(req.query.limit) || 10
  
  const comments = await Comment.find({ post: postId }).sort({createdAt: -1}).skip((page-1)*limit).limit(limit);
  
  return res.status(200).json({ success: true, comments });
}

export async function createComment(req, res) {
  const { postId } = req.params;

  // 1. Check if post exists
  const post = await Post.findById(postId);
  if (!post) {
    return res.status(404).json({
      success: false,
      message: "Post not found",
    });
  }

  // 2. Validate input with Zod
  const parsed = commentSchema.safeParse(req.body);
  if (!parsed.success) {
    const errors = parsed.error.issues.map((err) => ({
      field: err.path[0],
      message: err.message,
    }));

    return res.status(400).json({
      success: false,
      errors,
    });
  }

  const { comment } = parsed.data;

  // 3. Create comment
  const newComment = new Comment({
    comment,
    user: req.user._id, // authenticated user
    post: postId,
  });

  await newComment.save();

  // 4. Send response
  return res.status(201).json({
    success: true,
    comment: newComment,
  });
}

export async function deleteComment(req, res) {
  const { commentId } = req.params;
  const comment = await Comment.findById(commentId);
  if (!comment) {
    return res
      .status(400)
      .json({ success: true, message: "Comment not found" });
  }
  if (comment.user.toString() !== req.user._id.toString()) {
    return res.status(403).json({
      success: false,
      message: "You are not allowed to delete this comment",
    });
  }
  await comment.deleteOne();
  return res
    .status(200)
    .json({ success: true, message: "Comment deleted succesfully" });
}

export async function updateComment(req, res) {
  const { commentId } = req.params;

  // 1. Find the comment
  const existingComment = await Comment.findById(commentId);
  if (!existingComment) {
    return res.status(404).json({
      success: false,
      message: "Comment not found",
    });
  }

  // 2. Check if user owns the comment
  if (existingComment.user.toString() !== req.user._id.toString()) {
    return res.status(403).json({
      success: false,
      message: "You are not allowed to update this comment",
    });
  }

  // 3. Validate input with zod
  const parsed = commentSchema.safeParse(req.body);
  if (!parsed.success) {
    const errors = parsed.error.issues.map((err) => ({
      field: err.path[0],
      message: err.message,
    }));

    return res.status(400).json({
      success: false,
      errors,
    });
  }

  const { comment } = parsed.data; // this is just new text

  // 4. Update the comment
  existingComment.comment = comment;
  await existingComment.save();

  // 5. Respond
  return res.status(200).json({
    success: true,
    comment: existingComment,
  });
}
