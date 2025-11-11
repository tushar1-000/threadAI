import mongoose from "mongoose";

const connectDb =  async function(){
    try{
        await mongoose.connect(process.env.MONGO_URI )
        console.log('✅ MongoDb is connected');
    }
    catch(err){
        console.log('❌ MongoDb is not connected');
        console.log("Error ",err);
        process.exit(1)
    }
}

export default connectDb;