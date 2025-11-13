import Post from "../models/PostModel.js";
import { postSchema } from "../validations/postValidation.js";

export async function createPost(req,res){
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
        user: req.user._id
    })
     res.status(201).json({success: true, post})
}

export async function getAllPosts(req,res){
    const posts = await Post.find()
    res.status(200).json({success: true, posts})
}

export async function getPostById(req,res) {
    const postId =  req.params.postId;
    const post =  await Post.findById( postId)
    if (!post) {
       res.status(404).json({ success: false, message: "Post not found" });
    }
    return res.status(200).json({success: true, post})
}

export async function updatePost(req,res) {
    
}

export async function deletePost(req,res) {
    
}