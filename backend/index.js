import express from 'express'
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";
import connectDb from './config/db.js';
import userRouter from './routes/userRoute.js';
import postRouter from './routes/postRoute.js';
import { errorHandler } from "./middleware/errorMiddleware.js";
import commentRouter from "./routes/commentRoute.js"
import cors from 'cors'

dotenv.config();
const app =  express();
const port = process.env.port || 5000


connectDb()
app.use(cors({
  origin: ["http://localhost:5173",],
  credentials: true,
}));

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cookieParser());
app.use('/api/user', userRouter)
app.use('/api/post', postRouter)
app.use('/api',commentRouter)

app.use(errorHandler);

app.get('/api/health' , (req,res)=>{
    res.status(200).send('Health check passed ✅')
})

app.listen(port ,  () => {
    console.log(`Server is running on port ${port}.....`)
})

