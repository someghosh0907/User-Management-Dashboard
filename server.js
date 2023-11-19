const express=require("express");
const cors=require("cors");
const morgan=require("morgan");
const port=3400;

//MONGODB URL
const DB_URL="mongodb+srv://soumyajitghosh:someghosh01@clusterbloggy.vfxvsud.mongodb.net/BLOGAPP?retryWrites=true&w=majority";
//REST object
const app=express();

//routes import
const userRoutes=require('./userRoutes')

//DBmodel import
const { default: mongoose } = require("mongoose");
//middlewares
app.use(cors(
    {
        origin:"http://localhost:3000"
    }
))
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/user',userRoutes)        

//MONGO CONNECT
mongoose.connect(DB_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>console.log('DB connected'))
.catch((error)=>console.log(error))


app.listen(port,()=>{
    console.log(`app running on localhost ${port}`)
})
