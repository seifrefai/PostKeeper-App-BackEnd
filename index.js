import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import postRoutes from './routes/posts.js'
import dotenv from 'dotenv';

//initializing our app
const app = express();
dotenv.config();

//Setting configurations for our app
app.use(bodyParser.json({limit:"30mb", extended: true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}))
app.use(cors())
//This is for routing our app to /posts
app.use('/posts' ,postRoutes)
app.get('/',(req,res)=>{
    res.send('Welcome to PostKeeper API')
    
})





//This is for ur port connection
const PORT= process.env.PORT || 8000;

//This is to connect to mongodb using the connection, if successful then make our express app listen to this port
// if error, then log the error to the console
mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology: true})
.then(()=>app.listen(PORT,()=> console.log(`server running on port: ${PORT}`)))
.catch((error)=>console.log(error.message))


