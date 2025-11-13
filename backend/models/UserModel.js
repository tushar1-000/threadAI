import mongoose from "mongoose";

const userSchema =  mongoose.Schema({
    name:{
        type:String,
        require:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
        trim: true
    },
    password:{
        type:String,
        minLength:5,
        require:true
    }
})

const User = mongoose.model('User',userSchema)
export default User