import Post from "../models/PostModel.js";
import { postSchema } from "../validations/postValidation.js";
import Comment from "../models/CommentModel.js"

export async function createPost(req, res, next) {
  const parsed = postSchema.safeParse(req.body);
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
  const { title, content } = parsed.data;
  const post = await Post.create({
    title,
    content,
    user: req.user._id,
  });
  res.status(201).json({ success: true, post });
}


export async function getPaginatedPosts(req,res){
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  
    const posts =  await Post.find().
    sort({createdAt:-1})
    .skip( (page -1 ) * limit  )
    .limit(limit);
    return res.status(200).json({ success: true, posts });
  }
  

export async function getPostById(req, res) {
  const postId = req.params.postId;
  const post = await Post.findById(postId);
  if (!post) {
    return res.status(404).json({ success: false, message: "Post not found" });
  }
  return res.status(200).json({ success: true, post });
}

export async function updatePost(req, res) {
  const parsed = postSchema.safeParse(req.body);

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
  const { title, content } = parsed.data;

  const post = await Post.findById(req.params.postId);
  if (!post) {
    return res.status(404).json({ success: false, message: "Post not found" });
  }

  if (!post.user.equals(req.user._id)) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
  post.title = title;
  post.content = content;
  await post.save();
  res.status(200).json({ success: true, post });
}

export async function deletePost(req, res) {
  const post = await Post.findById(req.params.postId);
  if (!post) {
    return res.status(404).json({ success: false, message: "Post not found" });
  }
  if (!post.user.equals(req.user._id)) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
  
  await Comment.deleteMany({ post: post._id });
  await post.deleteOne();
  res.status(200).json({ success: true, message: "Post deleted successfully" });
}
