import express from 'express'
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";
import connectDb from './config/db.js';
import userRouter from './routes/userRoute.js';
import postRouter from './routes/postRoute.js';
import { errorHandler } from "./middleware/errorMiddleware.js";
import commentRouter from "./routes/commentRoute.js"

dotenv.config();
const app =  express();
const port = process.env.port || 5000


connectDb()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cookieParser());
app.use('/api/user', userRouter)
app.use('/api/post', postRouter)
app.use('/api',commentRouter)

app.use(errorHandler);


app.listen(port ,  () => {
    console.log(`Server is running on port ${port}.....`)
})


/*
A user can create many posts.

👉 Write REST routes for:

creating a post for a user
router.post('/posts/)

getting all posts from a given user
router.get('/posts')

updating a single post
router.put('/posts/:postId')

deleting a single post
router.delete('/posts/:postId')
*/