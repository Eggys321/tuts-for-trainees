const express = require('express');
const app = express();
const morgan = require('morgan');
const connect = require('./db/mongoDB');
const fileUpload = require('express-fileupload');
const cloudinary = require('cloudinary').v2;
const postRouter = require('./routes/postRoute');
const userRouter = require('./routes/userRoute');
const auth = require('./middleware/auth');
const cors = require('cors')
require('dotenv/config')


// port
const port = process.env.PORT || 4343

// middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
// app.use(fileUpload({
//     useTempFiles : true,
//     tempFileDir : '/tmp/'
// }));

// cloudinary config

// cloudinary.config({
//     cloud_name:process.env.cloud_name,
//     api_key:process.env.api_key,
//     api_secret:process.env.api_secret
// })

// API's

app.use('/api',userRouter)
app.use('/api',postRouter);




// routes
app.get('/',(req,res)=>{
    res.json({message:'app is running'})
})

app.use((req,res)=>{
    res.json({errMsg:'that route doesnt exist'})
})

// server and database
connect()
.then(()=>{
    try {
        
        app.listen(port,()=>{
            console.log(`server is connected to http://localhost:${port}`);
        })
    } catch (error) {
        console.log('cannot connect to the server');
        
    }

})
.catch((error)=>{
    console.log('invalid database connection...!', error);

})



