import express from 'express'
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";
import connectDb from './config/db.js';
import userRouter from './routes/userRoute.js';
dotenv.config();
const app =  express();
const port = process.env.port || 5000


connectDb()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cookieParser());
app.use('/api/user', userRouter)

app.listen(port ,  () => {
    console.log(`Server is running on port ${port}.....`)
})
