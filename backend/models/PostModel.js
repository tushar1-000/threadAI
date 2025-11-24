import mongoose from "mongoose";
const postSchema =  mongoose.Schema({
    content:{
        type: String,
        required:true,
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
},{
    timestamps: true, 
})

const Post = mongoose.model('Post',postSchema)
export default Post