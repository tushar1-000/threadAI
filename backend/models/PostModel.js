import mongoose from "mongoose";
import { string, trim } from "zod";
const postSchema =  mongoose.Schema({
    title:{
        type:String,
        require:true,
        trim:true
    },
    content:{
        type: String,
        require:true,
        trim:true
    },
    likes:{
        type: Number,
        default: 0
    },
    dislikes:{
        type: Number,
        default: 0
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
})

const Post = mongoose.model('Post',postSchema)
export default Post