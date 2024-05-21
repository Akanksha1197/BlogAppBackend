import mongoose from "mongoose";
import  express  from "express";
import cors from 'cors';
import userRouter from "./Routes/User.js";
import blogRouter from "./Routes/Blogs.js"
import commentRouter from "./Routes/comment.js";
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port =5000;



mongoose.connect('mongodb://127.0.0.1:27017/akki').then(()=>{
    console.log("connected to mongoDb");
}).catch((error)=>{
    console.log("Mogodb is failed to connect",error);

})

app.use(cors({
 Access-Control-Allow-Origin: (Access-Control-Allow-Origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204
}));




app.use(express.json())
app.use('/api',userRouter)
app.use('/api',blogRouter)
app.use('/api/comment',commentRouter)


app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})

