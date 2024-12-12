const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const jwt = require('jsonwebtoken')
const fileUpload = require('express-fileupload');
const path = require('path')

//---------------------------------------
//Express
const server = express()

server.use(cors())

//Environment Variables
dotenv.config({path:'./config/config.env'})

//Database Connection
connectDB()

//Accept Json
server.use(express.urlencoded({ extended: false }))
server.use(express.json())

//file upload

server.use(fileUpload());

//statics
server.use(express.static(path.join(__dirname, 'public')))

//Routes
server.use('/api/auth' , require('./routes/userRoutes'));
server.use('/api/dashboard' , require('./routes/adminRoutes'));
server.use('/api' , require('./routes/blogRoutes'));

//Listening 
server.listen(8080 , ()=> {
    console.log(`Server started on port ${process.env.PORT || 8080}`)
})